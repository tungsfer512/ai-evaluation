const axios = require('axios');
const { Dataset, Problem, Sample, Submission, SubmissionDetail } = require('../models/index');
const Minio = require('minio');
const dotenv = require('dotenv');
const fs = require('fs');
var FormData = require('form-data');
const delay = require('delay');
dotenv.config();

const AUTH_TOKEN = 'token 6c7191814dcd43d2ad5de7aebee8329d';

axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json, text/plain, */*';

const minioClient = new Minio.Client({
    endPoint: process.env.MINIO_END_POINT,
    port: Number.parseInt(process.env.MINIO_PORT) || 9000,
    useSSL: process.env.MINIO_SSL === 'true',
    accessKey: process.env.MINIO_ACCESS_KEY,
    secretKey: process.env.MINIO_SECRET_KEY
});
const bucket = process.env.MINIO_BUCKET_NAME;
const videosRoot = process.env.MINIO_VIDEO_ROOT;
const resultsRoot = process.env.MINIO_RESULT_ROOT;

const findAvailableHub = async (req, res) => {
    try {
        let problemId = req.body.problemId;
        let newPassword = Math.random().toString(36).slice(-8);
        const response = await axios.get(`${process.env.HUB_END_POINT}/users`);
        let data = response.data;
        console.log(req.body);
        let problem = await Problem.findOne({
            where: {
                id: problemId
            },
            raw: true
        });
        if (!problem) {
            return res.status(404).json({
                resCode: 404,
                resMessage: 'Problem not found.'
            });
        }
        let dataset = await Dataset.findOne({
            where: {
                id: problem.datasetId
            },
            raw: true
        });
        if (!dataset) {
            return res.status(404).json({
                resCode: 404,
                resMessage: 'Dataset not found.'
            });
        }
        for (let i = 0; i < data.length; i++) {
            let server = data[i];
            let servers = server.servers?.[''];
            console.log("====================1")
            console.log(server)
            console.log(server.server)
            console.log("====================2")
            console.log(servers)
            console.log("====================3")
            if (!server.admin && !server.server && !servers) {
                console.log(server.name);
                const postResponse = await axios.post(
                    `${process.env.HUB_END_POINT}/users/${server.name}/server`
                );
                if (postResponse.status === 201) {
                    const patchResponse = await axios.patch(
                        `${process.env.HUB_END_POINT}/users/${server.name}`,
                        {
                            password: newPassword
                        }
                    );
                    if (patchResponse) {
                        let samples = await Sample.findAll({
                            where: {
                                datasetId: dataset.id
                            },
                            raw: true
                        });
                        console.log(samples);
                        let resultsName = samples.map((sample) => sample.truth);
                        for (let j = 0; j < resultsName.length; j++) {
                            let pathArray = resultsName[j].split('/');
                            let name = pathArray[pathArray.length - 1];
                            if(pathArray[0] =='demo') {
                                minioClient.fGetObject(
                                    bucket,
                                    resultsName[j],
                                    `./src/downloads/truths/${name}`,
                                    async function (err) {
                                        if (err) {
                                            console.log(err);
                                        } else {
                                            console.log('success');
                                        }
                                    }
                                );
                            }
                        }
                        return res.status(200).json({
                            resCode: 200,
                            resMessage: 'OK',
                            data: {
                                username: patchResponse.data.name,
                                token: newPassword
                            }
                        });
                    }
                } else {
                    console.log("loi me no roiiiiiiiiiiiiiiiiiiiiiii")
                }
            } else {
                console.log("loi me roiiiiiiiiiiiiiiiiiiiiii")
            }
        }
    } catch (err) {
        return res.status(500).json({
            resCode: 500,
            resMessage: 'Somethings went wrong'
        });
    }
};

const evaluate = async (req, res) => {
    try {
        let startTime = Date.now();
        console.log(req.body);
        let username = req.body.username;
        let problemId = req.body.problemId;
        let token = req.body.token;
        let userId = req.body.userId;
        let problem = await Problem.findOne({
            where: {
                id: problemId
            },
            raw: true
        });
        if (!problem) {
            return res.status(404).json({
                resCode: 404,
                resMessage: 'Problem not found.'
            });
        }
        console.log("found problem");
        let dataset = await Dataset.findOne({
            where: {
                id: problem.datasetId
            },
            raw: true
        });
        if (!dataset) {
            return res.status(404).json({
                resCode: 404,
                resMessage: 'Dataset not found.'
            });
        }
        console.log("found dataset");
        console.log(dataset.path);
        console.log("-----------------");
        let loadData = await axios.post(
            `${process.env.KUBE_END_POINT}/cp_video`,
            {
                username: username,
                password: token,
                src_filename: videosRoot + '/' + dataset.path
            }
        );
        console.log(loadData);
        if (loadData.data.code !== 0) {
            return res.status(500).json({
                resCode: 500,
                resMessage: 'Somethings went wrong'
            });
        }
        console.log("uploaded video to hub");
        let nbConvert = await axios.post(
            `${process.env.KUBE_END_POINT}/nbconvert`,
            {
                username: username,
                password: token,
                filename: 'predict.ipynb'
            }
        );
        if (nbConvert.data.code !== 0) {
            return res.status(500).json({
                resCode: 500,
                resMessage: 'Somethings went wrong'
            });
        }
        console.log("ran file predict from hub");
        let samples = await Sample.findAll({
            where: {
                datasetId: dataset.id
            },
            raw: true
        });
        let formData = new FormData();
        let resultsName = samples.map((sample) => sample.truth);
        for (let i = 0; i < resultsName.length; i++) {
            let pathArray = resultsName[i].split('/');
            let name = pathArray[pathArray.length - 1];
            if(pathArray[0] == 'demo') {
                formData.append(
                    'file',
                    fs.createReadStream(`./src/downloads/truths/${name}`)
                );
                console.log(name);
                let cpRes = await axios.post(`${process.env.KUBE_END_POINT}/cp`, {
                    username: username,
                    password: token,
                    src_filename: `/home/jovyan/${name}`
                });
                if (cpRes.data.code !== 0) {
                    return res.status(500).json({
                        resCode: 500,
                        resMessage: 'Somethings went wrong'
                    });
                }
                console.log(`uploaded file predicted to k8s ${name}`);
                let removeResultFile = await axios.post(
                    `${process.env.KUBE_END_POINT}/rm`,
                    {
                        username: username,
                        password: token,
                        filename: name
                    }
                );
                if (removeResultFile.data.code !== 0) {
                    return res.status(500).json({
                        resCode: 500,
                        resMessage: 'Somethings went wrong'
                    });
                }
                console.log(`removed file predicted from hub ${name}`);
            }
        }
        let removeDataset = await axios.post(
            `${process.env.KUBE_END_POINT}/rm`,
            {
                username: username,
                password: token,
                filename: dataset.path
            }
        );
        if (removeDataset.data.code !== 0) {
            return res.status(500).json({
                resCode: 500,
                resMessage: 'Somethings went wrong'
            });
        }
        console.log(`removed dataset from hub ${dataset.path}`);
        formData.append('id', problemId);
        await axios.post(`${process.env.EVALUATE_END_POINT}/upload`, formData);
        console.log(`uploaded truth files`);
        let newForm = new FormData();
        newForm.append('id', problemId);
        newForm.append('server', username);
        let evaluatedRes = await axios.post(
            `${process.env.EVALUATE_END_POINT}/evaluate`,
            newForm
        );
        console.log(`evaluated`);
        let time = Date.now() - startTime;
        console.log(time);
        let submit = new Submission({
            accuracy: evaluatedRes.data.summary.accuracy,
            f1score: evaluatedRes.data.summary['f1_score'],
            precision: evaluatedRes.data.summary.precision,
            recall: evaluatedRes.data.summary.recall,
            selectionRate: req.body.selectionRate,
            executionTime: time,
            executionMemories: evaluatedRes.data.summary.memories,
            userId: userId,
            problemId: problemId
        });
        await submit.save();
        console.log(`evaluated save`);
        let submissionDetail = evaluatedRes.data.details;
        for(let i = 0;  i < submissionDetail.length; i++) {
            let subDetail = new SubmissionDetail({
                accuracy: submissionDetail[i].accuracy,
                f1score: submissionDetail[i]['f1_score'],
                precision: submissionDetail[i].precision,
                recall: submissionDetail[i].recall,
                executionMemories: submissionDetail[i].memories,
                executionTime: submissionDetail[i].time, 
                input: submissionDetail[i].file_name.split('.')[0] + '.mp4', 
                submissionId: submit.dataValues.id
            })
            await subDetail.save();
            console.log(`evaluated save details`);
        }
        let resData = submit.dataValues;
        resData.problem = problem;
        await axios.delete(`${process.env.HUB_END_POINT}/users/${username}/server`)
        // await delay(1000 * 60 * 2);
        console.log("okokok");
        return res.status(200).json({
            resCode: 200,   
            resMessage: 'OK',
            data: resData
        });
    } catch (err) {
        return res.status(500).json({
            resCode: 500,
            resMessage: err
        });
    }
};

const test = async (req, res) => {
    let cpRes2 = await axios.post(`${process.env.KUBE_END_POINT}/cp`, {
        username: username,
        password: token,
        src_filename: `/home/jovyan/1.jpg`
    });
    return res.status(200).json(cpRes2.data);
}

module.exports = {
    findAvailableHub,
    evaluate, 
    test
};
