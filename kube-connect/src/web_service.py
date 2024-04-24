# -*- coding: utf-8 -*-
import os
import subprocess
from minio import Minio

from flask import Flask, request, jsonify, send_from_directory

from config import PATH_DATA_DIR

template_dir = os.path.abspath("templates")
static_dir = os.path.abspath("static")
app = Flask(__name__, template_folder=template_dir, static_folder=static_dir)
client = Minio(
    "minio:9000",
    access_key="minioadmin",
    secret_key="xqORsmOYEKkUltCStWaYcOEK1M24FDRd",
    secure=False,
)


@app.route("/")
def index():
    return "TungBV: Hello World!"


@app.route("/nbconvert", methods=["POST"])
def nbconvert():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    filename = request.json.get("filename", None)
    command = f'sshpass -p {password} ssh -o StrictHostKeyChecking=no -t {username}@jupyterhub "jupyter nbconvert --to html --execute /home/{username}/{filename} --stdout  >> mylog.out.log 2>&1"'
    result = subprocess.run(
        command,
        cwd=PATH_DATA_DIR,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
        shell=True,
    )
    return jsonify({"message": result.stdout, "code": 0}), 200


@app.route("/cp", methods=["POST"])
def cp():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    src_filename = request.json.get("src_filename", None)
    result_dst = "result_file/{}_{}".format(username, os.path.basename(src_filename))
    command = f'sshpass -p {password} ssh -o StrictHostKeyChecking=no -t {username}@jupyterhub "cp /home/{username}/{src_filename} {result_dst}"'
    result = subprocess.run(
        command,
        cwd=PATH_DATA_DIR,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
        shell=True,
    )
    return jsonify({"message": result.stdout, "code": 0, "filename": result_dst}), 200


@app.route("/cp_video", methods=["POST"])
def cp_video():
    import time
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    src_filename = request.json.get("src_filename", None)
    bucket_name = src_filename.split("/")[0]
    folder = "/".join(src_filename.split("/")[1:])
    objects = client.list_objects(bucket_name, prefix=folder, recursive=True)
    for obj in objects:
        client.fget_object(bucket_name, f"{obj.object_name}", f"/app/data/{obj.object_name}")
    command = f'sshpass -p {password} scp -r -o StrictHostKeyChecking=no /app/data/{folder} {username}@jupyterhub:/home/{username}'
    result = subprocess.run(
        command,
        cwd=PATH_DATA_DIR,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
        shell=True,
    )
    return jsonify({"message": result.stdout, "code": 0, "filename": src_filename}), 200


@app.route("/rm", methods=["POST"])
def rm():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    filename = request.json.get("filename", None)
    command = f'sshpass -p {password} ssh -o StrictHostKeyChecking=no -t {username}@jupyterhub "rm -rf /home/{username}/{filename}"'
    print(command)
    result = subprocess.run(
        command,
        cwd=PATH_DATA_DIR,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
        shell=True,
    )
    return jsonify({"message": result.stdout, "code": 0}), 200


@app.route("/result_file/<path:filename>", methods=["GET", "POST"])
def download(filename):
    dir = "{}/result_file/".format(PATH_DATA_DIR)
    return send_from_directory(directory=dir, path=filename)


if __name__ == "__main__":
    webservice_port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=webservice_port, debug=True)
