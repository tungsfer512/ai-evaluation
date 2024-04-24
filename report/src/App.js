import Report from './Report';
import SummaryReport from './SummaryReport';

const App = () => {

  let submission = {
    "id": "317f5ef8-7cab-43d9-b8bf-dad9652de8a3",
    "selectionRate": 60,
    "accuracy": 81.21062106210621,
    "f1score": 81.21062106210621,
    "precision": 81.21062106210621,
    "recall": 81.21062106210621,
    "executionTime": 36336,
    "executionMemories": 43499147.63636363,
    "userId": "8552c585-064d-42da-9b52-5f34f333cfaa",
    "problemId": "6b811674-56fe-40e7-882a-3414aef16b1c",
    "createdAt": "2022-12-27T00:14:44.000Z",
    "updatedAt": "2022-12-27T00:14:44.000Z",
    "details": [
      {
        "id": "24b6c170-7e6e-4806-97e5-546694174dfb",
        "input": "4.mp4",
        "accuracy": 81.8069306930693,
        "f1score": 81.8069306930693,
        "precision": 81.8069306930693,
        "recall": 81.8069306930693,
        "executionTime": 0,
        "executionMemories": 43507712,
        "description": null,
        "submissionId": "317f5ef8-7cab-43d9-b8bf-dad9652de8a3",
        "createdAt": "2022-12-27T00:14:44.000Z",
        "updatedAt": "2022-12-27T00:14:44.000Z"
      },
      {
        "id": "7dc2e313-3a29-4d52-9fdd-98cd907a18a8",
        "input": "5.mp4",
        "accuracy": 80.81683168316832,
        "f1score": 80.81683168316832,
        "precision": 80.81683168316832,
        "recall": 80.81683168316832,
        "executionTime": 0,
        "executionMemories": 43511808,
        "description": null,
        "submissionId": "317f5ef8-7cab-43d9-b8bf-dad9652de8a3",
        "createdAt": "2022-12-27T00:14:44.000Z",
        "updatedAt": "2022-12-27T00:14:44.000Z"
      },
      {
        "id": "843d5c1f-da4a-415c-918b-445e8986fb82",
        "input": "9.mp4",
        "accuracy": 81.43564356435643,
        "f1score": 81.43564356435643,
        "precision": 81.43564356435643,
        "recall": 81.43564356435643,
        "executionTime": 0,
        "executionMemories": 43524096,
        "description": null,
        "submissionId": "317f5ef8-7cab-43d9-b8bf-dad9652de8a3",
        "createdAt": "2022-12-27T00:14:44.000Z",
        "updatedAt": "2022-12-27T00:14:44.000Z"
      },
      {
        "id": "89807f7f-fb59-430f-bb9c-db56314039ae",
        "input": "11.mp4",
        "accuracy": 81.55940594059405,
        "f1score": 81.55940594059405,
        "precision": 81.55940594059405,
        "recall": 81.55940594059405,
        "executionTime": 0,
        "executionMemories": 43479040,
        "description": null,
        "submissionId": "317f5ef8-7cab-43d9-b8bf-dad9652de8a3",
        "createdAt": "2022-12-27T00:14:44.000Z",
        "updatedAt": "2022-12-27T00:14:44.000Z"
      },
      {
        "id": "8f04660b-9f76-432e-a3f4-8c93e02fd8f9",
        "input": "2.mp4",
        "accuracy": 81.06435643564357,
        "f1score": 81.06435643564357,
        "precision": 81.06435643564357,
        "recall": 81.06435643564357,
        "executionTime": 0,
        "executionMemories": 43499520,
        "description": null,
        "submissionId": "317f5ef8-7cab-43d9-b8bf-dad9652de8a3",
        "createdAt": "2022-12-27T00:14:44.000Z",
        "updatedAt": "2022-12-27T00:14:44.000Z"
      },
      {
        "id": "a58da32b-0d33-479e-b5d0-05b7c5bb0b95",
        "input": "1.mp4",
        "accuracy": 81.1881188118812,
        "f1score": 81.1881188118812,
        "precision": 81.1881188118812,
        "recall": 81.1881188118812,
        "executionTime": 0,
        "executionMemories": 43425792,
        "description": null,
        "submissionId": "317f5ef8-7cab-43d9-b8bf-dad9652de8a3",
        "createdAt": "2022-12-27T00:14:44.000Z",
        "updatedAt": "2022-12-27T00:14:44.000Z"
      },
      {
        "id": "b35357ca-f3a0-4123-98ed-5e8c2e19c50a",
        "input": "10.mp4",
        "accuracy": 82.05445544554455,
        "f1score": 82.05445544554455,
        "precision": 82.05445544554455,
        "recall": 82.05445544554455,
        "executionTime": 0,
        "executionMemories": 43466752,
        "description": null,
        "submissionId": "317f5ef8-7cab-43d9-b8bf-dad9652de8a3",
        "createdAt": "2022-12-27T00:14:44.000Z",
        "updatedAt": "2022-12-27T00:14:44.000Z"
      },
      {
        "id": "ba6279d6-ca08-4c7f-a334-d2584d012eb1",
        "input": "8.mp4",
        "accuracy": 80.56930693069307,
        "f1score": 80.56930693069307,
        "precision": 80.56930693069307,
        "recall": 80.56930693069307,
        "executionTime": 0,
        "executionMemories": 43524096,
        "description": null,
        "submissionId": "317f5ef8-7cab-43d9-b8bf-dad9652de8a3",
        "createdAt": "2022-12-27T00:14:44.000Z",
        "updatedAt": "2022-12-27T00:14:44.000Z"
      },
      {
        "id": "c01e21ff-21d8-4f28-85e6-7eddd450deaa",
        "input": "3.mp4",
        "accuracy": 80.19801980198021,
        "f1score": 80.19801980198021,
        "precision": 80.19801980198021,
        "recall": 80.19801980198021,
        "executionTime": 0,
        "executionMemories": 43503616,
        "description": null,
        "submissionId": "317f5ef8-7cab-43d9-b8bf-dad9652de8a3",
        "createdAt": "2022-12-27T00:14:44.000Z",
        "updatedAt": "2022-12-27T00:14:44.000Z"
      },
      {
        "id": "d2061573-8b97-4a76-a4a3-c084c130ecf0",
        "input": "7.mp4",
        "accuracy": 81.06435643564357,
        "f1score": 81.06435643564357,
        "precision": 81.06435643564357,
        "recall": 81.06435643564357,
        "executionTime": 0,
        "executionMemories": 43524096,
        "description": null,
        "submissionId": "317f5ef8-7cab-43d9-b8bf-dad9652de8a3",
        "createdAt": "2022-12-27T00:14:44.000Z",
        "updatedAt": "2022-12-27T00:14:44.000Z"
      },
      {
        "id": "d3212f00-c872-430d-b4a4-18f0adae9c17",
        "input": "6.mp4",
        "accuracy": 81.55940594059405,
        "f1score": 81.55940594059405,
        "precision": 81.55940594059405,
        "recall": 81.55940594059405,
        "executionTime": 0,
        "executionMemories": 43524096,
        "description": null,
        "submissionId": "317f5ef8-7cab-43d9-b8bf-dad9652de8a3",
        "createdAt": "2022-12-27T00:14:44.000Z",
        "updatedAt": "2022-12-27T00:14:44.000Z"
      }
    ],
    "user": {
      "id": "8552c585-064d-42da-9b52-5f34f333cfaa",
      "username": "user",
      "password": "$2b$10$e4/ZYkpgA1FqpqCrsy8h8.6QGRyrIJj8XqVQghNLR9DekoPNxjrme",
      "email": "user@gmail.com",
      "firstName": "User",
      "lastName": "User",
      "role": "user",
      "createdAt": "2022-11-27T02:46:07.000Z",
      "updatedAt": "2022-11-27T02:46:07.000Z"
    },
    "problem": {
      "id": "6b811674-56fe-40e7-882a-3414aef16b1c",
      "title": "License Plate Recognition",
      "description": "Vehicle License plate detection and recognition is a well-known challenge that has been tackled by many computer-vision labs and companies. However, each country has its own specific license plate formats. This challenge is targeting regular Tunisian license plates.",
      "inputDescription": "A set of vehicle images (900 images) taken from the internet and annotated manually. The annotations are the coordinates of the bounding box containing the license plate.\nA set of license plate images (900 images) where the annotations are the text written in the license plate.\nThis challenge was designed by InstaDeep in Tunisia in partnership with the National Road Safety Observatory of Tunisia, specifically for the AI-Hack-Tunisia 2019 hackathon.\n\nThe objective of this challenge is to detect the vehicle’s license plates then recognize the characters in each license plate. The solution will then be used to detect vehicle license plates in traffic cameras.",
      "outputDescription": "\nThis metric is used in order to evaluate the error for each number in each license plate. In the test set, we provide 213 images of cars where each image contains only one car and one license plate.\n\nThe submission file will have N times 7 rows, where N is the number of images and multiplied by seven because the license plate is composed of two numbers the first one contains at most 3 digits and the second one at most 4 digits. If the first number on the image for example contains only two digits then the first digit should be filled with zero. Also, each row should be one hot encoded. Since we have 10 classes (from 0 to 9) the digit 7 for example should be encoded this way : 0,0,0,0,0,0,0,1,0,0.",
      "inputSample": "license_plate_recognition.mp4",
      "outputSample": "license_plate_recognition.csv",
      "subGroupId": "eed21d3a-e2f4-4cc9-8b33-d248662c01ec",
      "datasetId": "0496234e-684d-4361-8362-0b4274a1c748",
      "createdAt": "2022-12-26T20:13:17.000Z",
      "updatedAt": "2022-12-26T20:13:17.000Z",
      "outputTable": [
        {
          "frame_x": "0",
          "total": "26",
          "bounding_box": "{'5': [[475.198931257699, 303.4207459494252, 486.36734357362036, 312.09096077362733], [495.75043811160145, 777.6903027399054, 503.42378082934965, 782.0514111909997], [503.97581987379186, 775.8685738932455, 511.37314306931887, 781.0025370065591], [504.25183939601294, 785.805276693207, 512.0355899226496, 790.2215890487456], [504.5278589182342, 797.1220771042748, 512.6428328715363, 801.5383894598133]], '1': [[475.49283684496015, 310.1805744564303, 487.3225367322191, 316.4995445825437], [487.0286311449578, 299.23259133095473, 500.033953381261, 305.771990647514], [488.64511187489376, 314.58915826534655, 501.06262293667476, 322.0102743436891], [557.6401443735245, 657.9370913128292, 572.9999588177029, 664.0549835066969], [572.739622979666, 651.1683595238694, 587.9692695048259, 658.1974271508662], [496.52329277382063, 793.8650467420649, 504.0862276826804, 798.0053395753823]], 'X': [[476.7419355908195, 322.3776563277654, 488.7920646685241, 331.0478711519675]], '8': [[478.1379871303099, 328.9170556443247, 488.5716354780786, 338.175081643049], [555.4272897502105, 632.0336754281554, 569.3552570851858, 641.2755976784662]], '3': [[487.5429659226646, 306.9476129965583, 500.6217645557831, 315.1769694398688], [570.6569362753708, 637.761063864968, 586.1469186385676, 646.3521465201865]], '6': [[490.041163414384, 323.3328494863641, 502.16476888890395, 332.37044629464265], [555.2971218311923, 624.6141040441033, 568.5742495710754, 633.2051866993218], [568.1837458140197, 617.3247005790697, 584.3245677723088, 626.3062869913434]], 'T': [[557.1194726974508, 647.2633219533152, 571.8284475465368, 657.5465875557736]], '2': [[570.1362645992967, 626.8269586674172, 585.1055752864197, 635.6783771606727], [573.1301267367215, 659.6292742600691, 587.5787657477706, 668.8711965103797], [504.8038784404554, 791.8777061820726, 512.3668133493151, 796.5148341553881]], '9': [[495.5848263982686, 782.3274307132205, 503.2581691160168, 786.522927450982]], 'V': [[496.0816615382667, 789.1175109598611, 504.1414315871245, 793.7546389331766]], '7': [[504.1414315871247, 780.8369252932264, 512.0355899226498, 785.4740532665419]]}"
        },
        {
          "frame_x": "1",
          "total": "17",
          "bounding_box": "{'6': [[514.0859665018439, 632.2737485432565, 522.9517135555875, 637.1316921343489], [524.0937207571147, 627.7558991341875, 533.4445631190911, 632.7706654008925], [475.4671963471196, 399.11409138267106, 483.99870885213727, 406.4913404311275]], '8': [[514.3895879762873, 637.4960379036806, 524.287648043138, 643.2648459181029], [465.2293813410983, 402.075028075589, 474.5638597289411, 409.3017210210157]], 'Y': [[514.4503122711759, 648.8514810478591, 526.1093768897977, 654.3166675878381]], '1': [[516.4542140025015, 655.1668077162792, 525.8057554153544, 659.1138868840418], [526.6199563952293, 650.7936599534111, 536.0462087762538, 655.0543260296341], [462.8706690602993, 387.82238365544185, 471.8538498744061, 393.24240336451186], [472.6066303895547, 379.34105651810086, 481.9912941450741, 385.01200306555376], [474.7144158319709, 392.58999358471647, 483.19574296931194, 398.3613108675225]], '2': [[524.1691307761629, 634.5428008485252, 533.9724332524283, 639.8592071914229], [527.1478265285667, 656.6756414391705, 536.6117839191153, 662.8592630011225]], '3': [[525.4133960904581, 640.8772424485735, 535.0281735191031, 647.0231590010014], [472.807371860261, 384.71089085949427, 482.44296245416325, 391.686656966538]], '5': [[462.77029832494617, 382.7034761524312, 470.9505132562278, 389.12720321503275]], 'X': [[464.12530325221366, 396.30371079278297, 475.21626950873656, 404.3835549887114]]}"
        },
        {
          "frame_x": "2",
          "total": "18",
          "bounding_box": "{'6': [[560.0857156346324, 849.893572701593, 573.3114670613814, 857.3080091074978]], '8': [[560.3529025321425, 857.7755861781404, 573.5786539588916, 865.1232258596676], [539.9126552564092, 1003.091295798697, 548.8032992710571, 1009.0722744994601], [540.0743033294027, 1023.2164808864001, 549.2882434900379, 1027.9042750032145], [549.0457713805476, 1007.7790899155113, 558.6638317236668, 1012.8710042148098]], 'T': [[560.41969925652, 870.2665736367368, 574.5806048245541, 878.0149936645291]], '1': [[560.8204796027851, 878.8833510814368, 573.5786539588916, 885.7634136923215]], '0': [[575.1149786195747, 846.4869397583396, 587.2719824562832, 855.9052778955701], [575.2485720683296, 876.4118722794688, 588.3407300463235, 884.9618529997914], [549.1265954170444, 1021.3575280469738, 558.2597115411827, 1027.25768271124]], '7': [[574.1798244782892, 856.3728549662125, 588.006746424436, 862.3177634358118]], '3': [[574.9145884464418, 864.5888520646477, 588.3407300463234, 872.4040688168175], [548.399179088573, 1013.3559484337906, 558.9063038331569, 1019.0944550250633]], '9': [[574.7809949976869, 885.2290398973013, 588.1403398731909, 893.6454271688688]], '5': [[538.4578225994668, 1008.6681543169761, 548.8032992710571, 1013.1943003607969], [548.803299271057, 1027.742626930221, 557.8555913586986, 1033.5619575579904]], 'B': [[540.39759947539, 1018.0437425506051, 548.8841233075541, 1023.4589529958905]], '4': [[549.611539636025, 1002.2022313972321, 557.7747673222017, 1007.6174418425177]]}"
        },
        {
          "frame_x": "3",
          "total": "27",
          "bounding_box": "{'5': [[607.5683159076121, 597.5708588438755, 627.8551490683088, 610.9068248658475], [632.9470633676073, 610.4218806468668, 653.638016710788, 625.697623544762], [468.5791388418237, 408.47285921414317, 478.1599817618969, 416.3200257962984], [478.34247400799364, 401.1731693702779, 487.5127093743495, 408.1991208449982], [478.7074585001868, 412.25957332064837, 489.1551395892191, 420.60859357956934], [531.516019358275, 975.5204214089327, 539.9973464956161, 979.3345093523524], [541.8542050996492, 991.981222006849, 550.0846053986074, 996.8492026714766]], '9': [[610.1546850755097, 608.4012797344469, 630.199046126716, 621.0098294279476], [469.35473088773443, 413.6282651663731, 478.3424740079936, 421.2473164409076], [480.8973654533464, 420.8367088871902, 490.0219777581781, 427.72579117733807]], 'S': [[613.9534147908594, 628.3648167491564, 633.6744796960785, 642.3473750631027]], '1': [[615.327423411305, 641.1350145156506, 636.4224969369697, 650.5914267857762]], '3': [[628.58256539678, 584.4773649313939, 647.9803341560118, 598.7023953548306], [541.1014245845006, 979.4348800877058, 549.532566354165, 984.603972958393]], '0': [[630.6031663092, 598.5407472818374, 650.8091754334, 611.4725931213254], [638.0389776669055, 640.2459501141859, 657.6792185356278, 654.5518045741195], [541.6032782612664, 986.9124998715149, 549.8838639279011, 991.7302951684661]], '6': [[636.7457930829568, 627.2332802382011, 655.7394416597047, 641.377486625141], [478.75308156171104, 406.55669063012857, 488.1514322356876, 414.22136496618714]], 'G': [[470.1303229336452, 422.93536971730146, 480.0305272843876, 430.4631748687876]], '2': [[471.1796533487007, 427.9082834234347, 480.80611933029815, 435.57295775949325], [481.26234994553965, 425.8096225933234, 491.1169312347578, 433.748035298527]], '8': [[531.3654632552451, 970.8029968473347, 539.1943806127907, 974.5167140554012], [532.2687998734234, 988.4180609018122, 540.9508684814708, 993.5369684048227], [540.6497562754114, 973.864304275606, 548.9805273097227, 978.9330264109399]], 'B': [[532.3189852410999, 984.001748546274, 540.5995709077347, 988.468246269489]], '4': [[539.6460489218799, 968.9963236109777, 547.9768199561912, 973.4126359665162]]}"
        },
        {
          "frame_x": "4",
          "total": "27",
          "bounding_box": "{'5': [[486.826918702632, 189.7000247335186, 498.22310784868074, 205.21823974090412], [514.2108951785182, 599.4553723137177, 525.362083876253, 606.3558603692467], [525.9141229206953, 593.7693701559617, 537.9485740895378, 600.7802660203791], [526.8525892962472, 609.1160555914582, 537.6173506628724, 616.0717475514314], [552.1325770341571, 851.4786274852802, 564.9351044152502, 858.0577040561197], [565.4685430561291, 862.7697453838832, 577.4709124759038, 869.1710090744297]], '0': [[489.08999172454236, 197.62078031020502, 499.11217225014553, 210.22933000370577], [497.8998117026935, 172.2420328502099, 510.589185432691, 186.54788731014344], [565.5574494962755, 854.6792593305536, 577.2930995956108, 861.7028681021254], [567.3355782992053, 880.3732205328859, 579.0712283985405, 887.3079228643113]], 'X': [[490.6256484179816, 209.42108963873773, 502.74925389250154, 225.26260079211045]], '1': [[492.08048107492397, 219.11997401835373, 504.44655865893435, 230.43533912790568], [554.2663315976727, 876.7280564868804, 567.1577654189122, 881.9735364555228]], '3': [[499.35464435963587, 179.8394922809091, 512.5289623086143, 196.00429958026902], [563.42369493276, 847.1222119181027, 576.0484094335601, 853.8791013692353]], '7': [[500.4861808705911, 187.11365556562103, 513.2563786370854, 206.34977625185934]], '2': [[503.55749425746944, 199.88385333211536, 515.3578035860022, 216.12948466797206], [516.8606825918413, 624.1315176002893, 528.7295220473511, 631.9152681269259], [529.2263571873492, 625.7876347336162, 541.4264200695244, 633.5161813558085]], '4': [[504.527382695431, 209.6635617482281, 518.3482929363838, 225.828369047588]], '9': [[515.4253810762914, 605.8590252292486, 526.300550251805, 612.9251249981103], [529.0607454740165, 618.8871466780872, 539.7703029361974, 625.5116152113951], [553.7328929567936, 858.324423376559, 564.4905722145178, 864.5478741868127]], 'G': [[516.4742552607318, 618.1694959203121, 528.1222790984646, 624.2971293136219]], '6': [[527.0182010095799, 601.4979167781543, 537.6725545673166, 608.9504438781255], [566.7132332181798, 872.8161731204355, 578.3599768773686, 879.1285303708354]], 'S': [[553.6439865166471, 870.5046056766269, 565.8241688167149, 877.1725886876128]]}"
        },
        {
          "frame_x": "5",
          "total": "9",
          "bounding_box": "{'5': [[494.83603974708313, 657.8476799714424, 504.32107423795566, 662.6152899007169], [504.77274254704474, 652.4778456300489, 514.0068501995344, 657.9982360744721], [505.1742254884574, 665.024187549192, 515.5625965975083, 670.6449487289683]], '9': [[495.2877080561722, 662.5149191653636, 503.7690351935133, 668.1858657128164], [506.7801572541078, 671.9999536562362, 516.5161185833632, 677.4701587329828]], 'G': [[496.74308371879283, 672.3512512299724, 505.7262645328996, 677.6207148360128]], '2': [[496.49215688041005, 677.2694172622762, 506.07756210663575, 682.8399930743759], [507.5329377692564, 677.9720124097485, 517.8209381429542, 683.8938857955843]], '6': [[504.87311328239804, 658.2993482805314, 515.0607429207425, 664.4219631370734]]}"
        },
        {
          "frame_x": "6",
          "total": "18",
          "bounding_box": "{'5': [[516.6930975026913, 281.62831776839926, 527.1818393470953, 289.1360487728147], [530.6596853270819, 286.09983402838196, 542.0316896425936, 295.15327435723594], [533.3094727404052, 301.22570384610145, 544.2398458203631, 310.11353246162275], [510.6217680245546, 695.0741461418625, 520.4676051978012, 700.6583522998232], [521.2023691659537, 688.6082232221185, 531.4155883232764, 696.3967212845373], [521.6432275468455, 703.1565497915425, 532.9585926563974, 709.1081379335797]], '9': [[518.4044185404624, 287.9215628750416, 529.0035681937549, 295.3188860705687], [510.84219721500045, 700.2909703157468, 521.2023691659539, 705.8017000768922], [522.3779915149981, 712.5615285838973, 533.9872622118112, 718.439640329119]], 'Y': [[519.7845161515684, 296.9750032038956, 530.7148892315263, 305.64201620163993]], '1': [[521.0542059537855, 302.88182097942837, 533.0334532181838, 310.1687363660669]], '7': [[528.1755096270915, 274.56221799953755, 537.6705811914993, 281.2970943417338]], '3': [[528.4515291493126, 281.0762787239569, 538.9402709937166, 287.8111550661531], [532.7022297915184, 293.1659337972436, 543.0253599225897, 302.32978193498604]], 'G': [[511.5034847863378, 710.2102838858086, 521.6432275468454, 717.7783527577817]], '2': [[510.47481523092415, 717.6313999641512, 522.0106095309219, 724.8320868520478], [522.7453734990745, 718.6600695195648, 534.207691402257, 726.007709201092]], '6': [[521.496274753215, 696.5436740781679, 532.5177342755057, 702.4217858233897]]}"
        },
        {
          "frame_x": "7",
          "total": "9",
          "bounding_box": "{'5': [[573.5558665709427, 474.7722108267808, 591.3537261383368, 487.6874717517925], [590.7237134102872, 462.3294594478062, 607.7340570676196, 474.6147076447685], [593.0862611404725, 475.40222355483013, 610.5691143438419, 486.2699431136814]], '9': [[575.6034079371029, 484.3799049295334, 594.9762993246205, 496.350146762471]], 'V': [[579.3834843053991, 502.8077772249769, 597.3388470548056, 514.1480063298652]], '2': [[581.5885288535718, 512.4154713277294, 598.2838661468795, 523.91320361463]], '8': [[596.3938279627314, 486.2699431136814, 612.7741588920146, 498.55519131064375]], '6': [[598.4413693288919, 499.8152167667425, 615.1367066221997, 512.1004649637048]], '1': [[600.4889106950521, 512.1004649637048, 618.129267080434, 522.023165430482]]}"
        },
        {
          "frame_x": "8",
          "total": "9",
          "bounding_box": "{'5': [[501.17722979525223, 619.2123552249366, 511.83158335298896, 625.1191730004695], [512.0523989707659, 614.0783921116231, 522.5963447196142, 620.6476567404867], [512.2732145885427, 620.702860644931, 523.8108306173872, 627.3273291782388]], '9': [[501.34284150858485, 624.7879495738041, 512.4940302063196, 630.4739517315599]], 'V': [[501.7844727441388, 635.2766914182081, 512.9356614418735, 641.8459560470717]], '2': [[502.998958641912, 640.7970818626312, 513.487700486316, 647.4767543003832]], '8': [[513.5429043907601, 627.6585526049041, 523.6452189040544, 633.5653703804368]], '6': [[514.2053512440908, 636.3255656026483, 524.5836852796064, 642.2875872826254]], '1': [[514.1501473396467, 643.1708497537331, 526.2950063173776, 648.139201153714]]}"
        },
        {
          "frame_x": "9",
          "total": "9",
          "bounding_box": "{'5': [[492.2681436584578, 544.8394224094145, 503.96133432709956, 550.91185189828], [503.6602221210398, 537.5625440963111, 515.2530420543285, 546.1442419690053], [503.66022212103996, 545.5420175568864, 515.8050810987709, 553.1701934437257]], '9': [[492.36851439381076, 550.5103689568672, 504.5635587392183, 557.3355789608813]], 'V': [[494.62685593925664, 561.8522620517731, 505.2159685190138, 569.0287696295231]], '2': [[494.4762998362269, 567.8243208052854, 506.26986124022176, 574.4487893385932]], '8': [[505.96874903416244, 552.3170421932239, 517.5113835997745, 559.4935497709739]], '6': [[506.7717149169876, 561.3002230073307, 518.3645348502762, 568.3261744820511]], '1': [[507.6248661674893, 569.7313647769954, 520.0206519836032, 574.6495308092996]]}"
        }
      ]
    }
  }

  let problem = {
    "id": "41c24adf-2da4-4763-93f0-980d28d629f8",
    "title": "Vehicle counting",
    "description": "The data set contains 31 video clips (about 9 hours in total) captured from 20 unique camera views (some cameras provide multiple video clips to cover different lighting and weather conditions.). Each camera view comes with a detailed instruction document describing the region of interest (ROI), movements of interest (MOI) and how vehicles should be counted (please refer to the ReadMe.txt file for more details). The instruction document is meant to remove the ambiguities so that different people manually counting vehicles following instruction in the document should yield the same result. The ground truth counts for all videos are manually created and cross-validated following the provided instruction document.   ",
    "inputDescription": "A crucial tool in signal timing planning is capturing accurate movement- and class-specific vehicle counts. To be useful in online intelligent transportation systems, methods designed for this task must not only be accurate in their counting, but should also be efficient, preferably working in real-time on the edge [7]. Teams should thus design on-line real-time programs to count both cars and trucks belonging to the MOIs given a video clip. In this track, both the effectiveness of the program and its efficiency will count towards determining the winning team.\n\nThe 9 hours of video in track 1 are split into two data sets A and B. Data set A (5 hours in total) along with all the corresponding instruction documents and a small subset of ground truth labels (for demonstration purpose) are made available to participating teams. Data set B will be reserved for later testing. \n\nTeams can design their vehicle counting programs and submit counting results of data set A to the online evaluation system to get ranked on the public leader board. The public leader board only provides a way for a team to evaluate and improve their systems and the ranking will NOT determine the winners of this track. All prize contenders have to submit functioning code to be tested on data set B. The best performer on data set B combining both the counting accuracy and the program efficiency will be declared the winner. \n\nEach row in the submission file identifies one vehicle that exits the frame in the given movement id.",
    "outputDescription": "To be ranked on the public leader board of data set A, one text file should be submitted to the online evaluation system containing, on each line, details of one counted vehicle, in the following format (values are space-delimited):\n\n〈gen_time〉 〈video_id〉 〈frame_id〉 〈movement_id〉 〈vehicle_class_id〉\n\nWhere:\n\n〈gen_time〉 is the generation time, i.e., the time from the start of the program execution until this frame’s output is generated, in seconds. Teams should obtain a unix timestamp at the start of the program execution and before each output to the stream and report the differences between the current unix timestamp and the program execution start unix timestamp.\n〈video_id〉 is the video numeric identifier, starting with 1. It represents the position of the video in the list of all track videos, sorted in alphanumeric order.\n〈frame_id〉 represents the frame count for the current frame in the current video, starting with 1.\n〈movement_id〉 denotes the the movement numeric identifier, starting with 1. It represents the position of the movement in the list of the MOIs defined in the corresponding instruction document of that video.\n〈vehicle_class_id〉 is the vehicle classic numeric identifier. Only two values are accepted {1, 2} where 1 stands for “car” and 2 represents “truck”.\nIn addition to the vehicle counts, the teams will need to report a baseline efficiency factor (Efficiency Base) and the total wall-clock execution time for the run (Execution Time), which should include the total time taken to parse the video, predict the results, and write them to the output file, including detection or tracking inference.\n\nThe text file containing all counted vehicles should be named track1.txt and can be archived using Zip (track1.zip) or tar+gz (track1.tar.gz) to reduce upload time.\n\nThe Efficiency Base factor score should be measured on the test system the experiments are executed on. If multiple systems are used for testing different runs of a team’s algorithm, a separate Efficiency Base score should be obtained for each system and the appropriate score should be provided when submitting results. The Efficiency Base factor is computed by executing the efficiency_base.py script on the system, which can be downloaded from the Track 1 download page. Note that the script will be updated for the 2021 challenge to better account for differences in GPU performance among systems.",
    "inputSample": "vehicle_counting.mp4",
    "outputSample": "vehicle_counting.csv",
    "subGroupId": "eed21d3a-e2f4-4cc9-8b33-d248662c01ec",
    "datasetId": "9e059837-f436-450a-9d39-05511fa0c748",
    "createdAt": "2022-12-26T17:38:47.000Z",
    "updatedAt": "2022-12-26T17:38:47.000Z",
    "submissions": [
      {
        "id": "b49aeb29-e41f-41f7-93ab-4a6e866c522e",
        "selectionRate": 60,
        "accuracy": 84.50960150960151,
        "f1score": 84.50960150960151,
        "precision": 84.50960150960151,
        "recall": 84.50960150960151,
        "executionTime": 346287,
        "executionMemories": 41582592,
        "userId": "8552c585-064d-42da-9b52-5f34f333cfaa",
        "problemId": "41c24adf-2da4-4763-93f0-980d28d629f8",
        "createdAt": "2022-12-27T02:58:10.000Z",
        "updatedAt": "2022-12-27T02:58:10.000Z",
        "user": {
          "id": "8552c585-064d-42da-9b52-5f34f333cfaa",
          "username": "user",
          "password": "$2b$10$e4/ZYkpgA1FqpqCrsy8h8.6QGRyrIJj8XqVQghNLR9DekoPNxjrme",
          "email": "user@gmail.com",
          "firstName": "User",
          "lastName": "User",
          "role": "user",
          "createdAt": "2022-11-27T02:46:07.000Z",
          "updatedAt": "2022-11-27T02:46:07.000Z"
        },
        "details": [
          {
            "id": "9c45765c-e633-4f69-852b-e9a5e84547d9",
            "input": "1.mp4",
            "accuracy": 84.50960150960151,
            "f1score": 84.50960150960151,
            "precision": 84.50960150960151,
            "recall": 84.50960150960151,
            "executionTime": 0,
            "executionMemories": 41582592,
            "description": null,
            "submissionId": "b49aeb29-e41f-41f7-93ab-4a6e866c522e",
            "createdAt": "2022-12-27T02:58:10.000Z",
            "updatedAt": "2022-12-27T02:58:10.000Z"
          }
        ]
      },
      {
        "id": "bd33673e-95d1-4537-b147-4e3f5c5f948a",
        "selectionRate": 60,
        "accuracy": 93.66018479060344,
        "f1score": 93.66018479060344,
        "precision": 93.66018479060344,
        "recall": 93.66018479060344,
        "executionTime": 3834,
        "executionMemories": 70234112,
        "userId": "8552c585-064d-42da-9b52-5f34f333cfaa",
        "problemId": "41c24adf-2da4-4763-93f0-980d28d629f8",
        "createdAt": "2022-12-26T18:33:01.000Z",
        "updatedAt": "2022-12-26T18:33:01.000Z",
        "user": {
          "id": "8552c585-064d-42da-9b52-5f34f333cfaa",
          "username": "user",
          "password": "$2b$10$e4/ZYkpgA1FqpqCrsy8h8.6QGRyrIJj8XqVQghNLR9DekoPNxjrme",
          "email": "user@gmail.com",
          "firstName": "User",
          "lastName": "User",
          "role": "user",
          "createdAt": "2022-11-27T02:46:07.000Z",
          "updatedAt": "2022-11-27T02:46:07.000Z"
        },
        "details": [
          {
            "id": "14fb6abe-3a8e-4042-ad6e-2abe9d62f3f5",
            "input": "15.mp4",
            "accuracy": 97.92207792207792,
            "f1score": 97.92207792207792,
            "precision": 97.92207792207792,
            "recall": 97.92207792207792,
            "executionTime": 0,
            "executionMemories": 70250496,
            "description": null,
            "submissionId": "bd33673e-95d1-4537-b147-4e3f5c5f948a",
            "createdAt": "2022-12-26T18:33:01.000Z",
            "updatedAt": "2022-12-26T18:33:01.000Z"
          },
          {
            "id": "3bfc935f-f9c6-48be-8035-590bf22ec7ba",
            "input": "8.mp4",
            "accuracy": 97.68518518518518,
            "f1score": 97.68518518518518,
            "precision": 97.68518518518518,
            "recall": 97.68518518518518,
            "executionTime": 0,
            "executionMemories": 70270976,
            "description": null,
            "submissionId": "bd33673e-95d1-4537-b147-4e3f5c5f948a",
            "createdAt": "2022-12-26T18:33:01.000Z",
            "updatedAt": "2022-12-26T18:33:01.000Z"
          },
          {
            "id": "4be87877-6520-4de1-8764-5821e203dd97",
            "input": "3.mp4",
            "accuracy": 85.34266866890705,
            "f1score": 85.34266866890705,
            "precision": 85.34266866890705,
            "recall": 85.34266866890705,
            "executionTime": 0,
            "executionMemories": 70262784,
            "description": null,
            "submissionId": "bd33673e-95d1-4537-b147-4e3f5c5f948a",
            "createdAt": "2022-12-26T18:33:01.000Z",
            "updatedAt": "2022-12-26T18:33:01.000Z"
          },
          {
            "id": "4d95930f-9a65-4afc-a8b1-915bdd50da99",
            "input": "16.mp4",
            "accuracy": 95.99404761904762,
            "f1score": 95.99404761904762,
            "precision": 95.99404761904762,
            "recall": 95.99404761904762,
            "executionTime": 0,
            "executionMemories": 70250496,
            "description": null,
            "submissionId": "bd33673e-95d1-4537-b147-4e3f5c5f948a",
            "createdAt": "2022-12-26T18:33:01.000Z",
            "updatedAt": "2022-12-26T18:33:01.000Z"
          },
          {
            "id": "5e5719ed-ba2f-4570-81b3-6167efb5f188",
            "input": "14.mp4",
            "accuracy": 91.23432123432124,
            "f1score": 91.23432123432124,
            "precision": 91.23432123432124,
            "recall": 91.23432123432124,
            "executionTime": 0,
            "executionMemories": 70250496,
            "description": null,
            "submissionId": "bd33673e-95d1-4537-b147-4e3f5c5f948a",
            "createdAt": "2022-12-26T18:33:01.000Z",
            "updatedAt": "2022-12-26T18:33:01.000Z"
          },
          {
            "id": "5fc8f641-aa93-4f07-9179-0d2b6eb88959",
            "input": "1.mp4",
            "accuracy": 93.93718671679198,
            "f1score": 93.93718671679198,
            "precision": 93.93718671679198,
            "recall": 93.93718671679198,
            "executionTime": 0,
            "executionMemories": 70074368,
            "description": null,
            "submissionId": "bd33673e-95d1-4537-b147-4e3f5c5f948a",
            "createdAt": "2022-12-26T18:33:01.000Z",
            "updatedAt": "2022-12-26T18:33:01.000Z"
          },
          {
            "id": "686760a8-b559-4748-a703-2e0c44404bbc",
            "input": "10.mp4",
            "accuracy": 100,
            "f1score": 100,
            "precision": 100,
            "recall": 100,
            "executionTime": 0,
            "executionMemories": 70090752,
            "description": null,
            "submissionId": "bd33673e-95d1-4537-b147-4e3f5c5f948a",
            "createdAt": "2022-12-26T18:33:01.000Z",
            "updatedAt": "2022-12-26T18:33:01.000Z"
          },
          {
            "id": "80a00421-df64-4d96-a0cb-48f816e78b39",
            "input": "2.mp4",
            "accuracy": 97.95454545454544,
            "f1score": 97.95454545454544,
            "precision": 97.95454545454544,
            "recall": 97.95454545454544,
            "executionTime": 0,
            "executionMemories": 70250496,
            "description": null,
            "submissionId": "bd33673e-95d1-4537-b147-4e3f5c5f948a",
            "createdAt": "2022-12-26T18:33:01.000Z",
            "updatedAt": "2022-12-26T18:33:01.000Z"
          },
          {
            "id": "833b5a31-2b36-4815-9d9a-b4d5ac10f5ad",
            "input": "4.mp4",
            "accuracy": 94.7811447811448,
            "f1score": 94.7811447811448,
            "precision": 94.7811447811448,
            "recall": 94.7811447811448,
            "executionTime": 0,
            "executionMemories": 70262784,
            "description": null,
            "submissionId": "bd33673e-95d1-4537-b147-4e3f5c5f948a",
            "createdAt": "2022-12-26T18:33:01.000Z",
            "updatedAt": "2022-12-26T18:33:01.000Z"
          },
          {
            "id": "98a3c898-bc2d-4b27-b597-97b18d960c31",
            "input": "11.mp4",
            "accuracy": 100,
            "f1score": 100,
            "precision": 100,
            "recall": 100,
            "executionTime": 0,
            "executionMemories": 70225920,
            "description": null,
            "submissionId": "bd33673e-95d1-4537-b147-4e3f5c5f948a",
            "createdAt": "2022-12-26T18:33:01.000Z",
            "updatedAt": "2022-12-26T18:33:01.000Z"
          },
          {
            "id": "bffbb08c-36b9-47c0-b530-c46dca917b20",
            "input": "7.mp4",
            "accuracy": 93.94841269841272,
            "f1score": 93.94841269841272,
            "precision": 93.94841269841272,
            "recall": 93.94841269841272,
            "executionTime": 0,
            "executionMemories": 70266880,
            "description": null,
            "submissionId": "bd33673e-95d1-4537-b147-4e3f5c5f948a",
            "createdAt": "2022-12-26T18:33:01.000Z",
            "updatedAt": "2022-12-26T18:33:01.000Z"
          },
          {
            "id": "c4efb2fa-09db-4f58-80f0-a706847ab34a",
            "input": "12.mp4",
            "accuracy": 85.26787564287564,
            "f1score": 85.26787564287564,
            "precision": 85.26787564287564,
            "recall": 85.26787564287564,
            "executionTime": 0,
            "executionMemories": 70242304,
            "description": null,
            "submissionId": "bd33673e-95d1-4537-b147-4e3f5c5f948a",
            "createdAt": "2022-12-26T18:33:01.000Z",
            "updatedAt": "2022-12-26T18:33:01.000Z"
          },
          {
            "id": "c642d15a-c7c0-49c0-a131-0f249d214883",
            "input": "6.mp4",
            "accuracy": 82.57919709565546,
            "f1score": 82.57919709565546,
            "precision": 82.57919709565546,
            "recall": 82.57919709565546,
            "executionTime": 0,
            "executionMemories": 70262784,
            "description": null,
            "submissionId": "bd33673e-95d1-4537-b147-4e3f5c5f948a",
            "createdAt": "2022-12-26T18:33:01.000Z",
            "updatedAt": "2022-12-26T18:33:01.000Z"
          },
          {
            "id": "d8dcedf1-6fd2-4e60-a145-1f0d878318b5",
            "input": "13.mp4",
            "accuracy": 85.38851585291214,
            "f1score": 85.38851585291214,
            "precision": 85.38851585291214,
            "recall": 85.38851585291214,
            "executionTime": 0,
            "executionMemories": 70250496,
            "description": null,
            "submissionId": "bd33673e-95d1-4537-b147-4e3f5c5f948a",
            "createdAt": "2022-12-26T18:33:01.000Z",
            "updatedAt": "2022-12-26T18:33:01.000Z"
          },
          {
            "id": "f2c981cd-3a68-407d-a0d6-8fc86add0a8f",
            "input": "9.mp4",
            "accuracy": 100,
            "f1score": 100,
            "precision": 100,
            "recall": 100,
            "executionTime": 0,
            "executionMemories": 70270976,
            "description": null,
            "submissionId": "bd33673e-95d1-4537-b147-4e3f5c5f948a",
            "createdAt": "2022-12-26T18:33:01.000Z",
            "updatedAt": "2022-12-26T18:33:01.000Z"
          },
          {
            "id": "f7202c9b-8777-4eaf-bc26-84dcb56c5a87",
            "input": "5.mp4",
            "accuracy": 96.52777777777776,
            "f1score": 96.52777777777776,
            "precision": 96.52777777777776,
            "recall": 96.52777777777776,
            "executionTime": 0,
            "executionMemories": 70262784,
            "description": null,
            "submissionId": "bd33673e-95d1-4537-b147-4e3f5c5f948a",
            "createdAt": "2022-12-26T18:33:01.000Z",
            "updatedAt": "2022-12-26T18:33:01.000Z"
          }
        ]
      },
      {
        "id": "fa1aee7d-1419-4438-b1a5-0de171848b50",
        "selectionRate": 60,
        "accuracy": 85.28461353461354,
        "f1score": 85.28461353461354,
        "precision": 85.28461353461354,
        "recall": 85.28461353461354,
        "executionTime": 276712,
        "executionMemories": 42258432,
        "userId": "8552c585-064d-42da-9b52-5f34f333cfaa",
        "problemId": "41c24adf-2da4-4763-93f0-980d28d629f8",
        "createdAt": "2022-12-27T00:43:25.000Z",
        "updatedAt": "2022-12-27T00:43:25.000Z",
        "user": {
          "id": "8552c585-064d-42da-9b52-5f34f333cfaa",
          "username": "user",
          "password": "$2b$10$e4/ZYkpgA1FqpqCrsy8h8.6QGRyrIJj8XqVQghNLR9DekoPNxjrme",
          "email": "user@gmail.com",
          "firstName": "User",
          "lastName": "User",
          "role": "user",
          "createdAt": "2022-11-27T02:46:07.000Z",
          "updatedAt": "2022-11-27T02:46:07.000Z"
        },
        "details": [
          {
            "id": "a8ac1392-5236-4460-80e4-4b0210f302ff",
            "input": "1.mp4",
            "accuracy": 85.28461353461354,
            "f1score": 85.28461353461354,
            "precision": 85.28461353461354,
            "recall": 85.28461353461354,
            "executionTime": 0,
            "executionMemories": 42258432,
            "description": null,
            "submissionId": "fa1aee7d-1419-4438-b1a5-0de171848b50",
            "createdAt": "2022-12-27T00:43:25.000Z",
            "updatedAt": "2022-12-27T00:43:25.000Z"
          }
        ]
      }
    ],
    "dataset": {
      "id": "9e059837-f436-450a-9d39-05511fa0c748",
      "title": " Vehicle counting",
      "path": "vehicle_counting",
      "createdAt": "2022-12-26T17:28:15.000Z",
      "updatedAt": "2022-12-26T17:28:15.000Z"
    },
    "outputTable": [
      {
        "frame_x": "0",
        "total": "11",
        "bounding_box": "{'truck': [[240.09437303093662, 0.0, 403.6582651763059, 160.56271981242676], [95.43590461264992, 199.2836971256313, 158.30087420080065, 254.60487036320396], [406.6875844947857, 900.3516998827656, 719.9999999999993, 1279.9999999999982], [636.8550368550369, 1035.339492235067, 711.1547911547912, 1267.0839639795386]], 'motobike': [[343.56445105361075, 105.04103165298945, 445.61779747089383, 183.071512309496], [38.191795085098946, 491.2285230826797, 62.89348487097968, 502.28898119576064], [56.132723560608845, 526.8466594843385, 82.72435839295967, 538.2035035273218]], 'car': [[208.58147713950763, 208.5814771395076, 292.6143024618992, 304.61899179366935], [112.54572167194192, 537.2098475967173, 163.5638921453692, 592.7315357561546], [58.79460805269916, 333.6351178454501, 94.71744781735666, 370.9948712006939], [44.54181148912455, 557.6357911537202, 73.94419597306468, 590.6881268149771]]}"
      },
      {
        "frame_x": "1",
        "total": "10",
        "bounding_box": "{'truck': [[325.6248525421391, 247.5967174677609, 703.7725664929012, 1280.0000000000002], [183.0715123094958, 0.0, 309.1236822707433, 84.03282532239153], [63.26974506665317, 222.58716110693751, 111.4491006072337, 266.5285177805225]], 'car': [[142.5562722103034, 144.05627198124267, 210.08206330597886, 216.08440797186404], [29.57559811341619, 329.73882752548695, 57.72949149216764, 359.2333824937028], [170.37213376935864, 603.2550605371063, 228.50181993398638, 671.8350273605433], [67.59853550686982, 601.9197812732378, 102.43934724501186, 641.6677495942167]], 'motobike': [[90.66217144620326, 623.5112702377203, 121.33190008893392, 639.704886961082], [79.86642696396207, 569.0418321682306, 111.51758692326011, 585.4808067207342], [62.446021094891066, 523.1599181187057, 91.64360276277064, 537.1453143797909]]}"
      },
      {
        "frame_x": "2",
        "total": "18",
        "bounding_box": "{'truck': [[229.58792428350944, 111.04337631887454, 603.2444348544341, 694.7713950762017], [135.052754982415, 0.0, 231.09026963657678, 58.522860492379834], [39.150218338454245, 234.27783954579235, 79.33654948264828, 271.3303742246134]], 'car': [[460.6852306664707, 946.869871043376, 615.241501044288, 1279.9999999999993], [234.96762484484736, 677.170008402521, 310.57135314519144, 770.2745997353522], [105.78791324738931, 668.7961455825198, 145.69818822592387, 722.5367138704474], [104.84669002000679, 105.31383668521698, 150.5666679022984, 161.12783565840408], [64.30943679394635, 521.471234552582, 89.74849045403248, 553.3622221119654], [42.00417959923318, 488.8428831189934, 66.52152841656257, 519.4434838985173], [32.787131171665735, 523.1303032695442, 62.09734517133019, 552.6248582377601]], 'bus': [[86.4255026142389, 517.4532216540173, 140.95637337698906, 567.6374288052439]], 'motobike': [[138.19031471511047, 728.4639824316157, 181.65695083034612, 754.9391153381683], [112.11033304596909, 634.022836690331, 154.78666668638226, 653.7803985608926], [94.72367859987482, 573.5646973664122, 131.07759244170825, 594.5077129492076], [96.30428354951974, 619.0070896687042, 135.81940729064303, 639.9501052514996], [76.54672167895808, 640.7404077263219, 111.32003057114662, 657.731910935005], [82.86914147753781, 609.5234599708344, 114.87639170784769, 624.1440557550501], [65.48248703144354, 578.7016634527583, 95.51398107469727, 594.1125617117964]]}"
      },
      {
        "frame_x": "3",
        "total": "21",
        "bounding_box": "{'truck': [[150.0586166471278, 121.54747948417351, 412.6611957796014, 327.1277842907386], [95.1338072660832, 0.0, 172.42152344576448, 48.09013451180168], [16.28283775214064, 245.47993927235774, 52.19430183562889, 273.36151076574924]], 'car': [[469.6864020831701, 432.1688159437283, 615.241501044288, 751.7936694021103], [387.1594404870381, 559.7186400937867, 516.2098508035681, 807.3153575615476], [286.6131305870781, 741.2895662368112, 379.6494729082973, 852.3329425556858], [96.08905831820043, 526.470542333708, 133.12483472715323, 570.3772093886656], [89.7209157682448, 563.8414841400269, 123.74020360090279, 603.5585837279084], [59.220864607930736, 514.2370053298457, 89.38575037087871, 549.7645374506511], [47.82524109748372, 559.8194993716336, 85.53134830116869, 592.1629602174612], [43.564300469923545, 504.14069497641844, 72.40853246782476, 534.7018455456233], [72.31552915589158, 61.83017294374501, 109.11920352716837, 113.35531706353252]], 'bus': [[156.8869250321459, 758.0443831407694, 212.16024411881037, 835.2489000781419], [125.6497239605511, 563.7733215374955, 193.02300993916637, 628.973275710349]], 'motobike': [[159.02080264099612, 714.7970915538028, 208.33306449975333, 739.6165081184753], [136.16081369985042, 645.2374109186023, 183.18707666449308, 668.7505424009237], [112.97425348811689, 673.9756827303283, 153.7956623115914, 692.5902451538327], [95.3394048763759, 645.2374109186023, 131.58881591162125, 665.1582584244578], [140.40624021749176, 700.4279556479399, 188.73878826448555, 725.5739434832005], [116.23996619399486, 731.7787976243686, 157.38794628805715, 752.0262164008119], [204.4142092526998, 873.1841577888838, 262.2173241467397, 907.4741412006024]]}"
      },
      {
        "frame_x": "4",
        "total": "21",
        "bounding_box": "{'car': [[345.19742268415405, 41.6542154398632, 452.29921407209474, 194.65677456549275], [276.3608724206684, 443.70742146432576, 384.41892980314424, 551.7654788468017], [319.74728814786164, 775.9376507708265, 423.20506667007544, 903.1045035377142], [221.6779355903464, 887.3633613722928, 298.55281268671354, 987.5880843156874], [128.63778059988334, 570.5239146480129, 179.28898466805052, 624.4081742949993], [123.24935463518472, 619.0197483303008, 168.87136113629984, 669.670952398468], [69.72432338584493, 599.6214148573857, 114.98710148931346, 644.8841929608543], [79.06426172465588, 545.7371552103995, 118.22015706813264, 590.999933313868], [60.743613444680534, 531.7272477021828, 97.02568160698468, 568.72777265978], [38.8306811882394, 535.6787600762952, 65.41358261408601, 566.9316306715474]], 'truck': [[108.04345603942829, 149.71227282233906, 292.1246599874513, 251.55460124033624], [65.01148628534499, 0.0, 132.9063718973431, 65.02608762839256], [413.1069096391997, 519.7305680298728, 617.7478324697292, 861.1175280789337]], 'motobike': [[281.309849599678, 1049.734597108545, 358.9031834913383, 1101.463486369652], [218.0856516138807, 808.333113890046, 281.66907799732456, 843.5374968594105], [194.3765773692067, 808.333113890046, 241.7947258585547, 839.2267560876516], [166.35676235277379, 851.7997500052816, 220.9594787950533, 877.664194635835], [186.11432422333547, 728.9436380101528, 247.54238022089993, 756.9634530265857], [160.60910799042856, 756.9634530265859, 210.90108366094915, 779.5948420783202], [133.30774976928888, 724.9921256360401, 176.77438588452455, 746.9050578924812]], 'bus': [[171.02673152217923, 622.2528039091197, 255.8046333667711, 702.7199649819527]]}"
      },
      {
        "frame_x": "5",
        "total": "25",
        "bounding_box": "{'truck': [[433.6746796699875, 331.6295427901524, 604.7415026477131, 631.746776084408], [289.28055331708015, 296.5009998694596, 440.1061729061504, 438.4170891874455], [74.45821726549022, 165.4036258806474, 216.3743065834759, 255.1353236108538]], 'bus': [[213.08323563892145, 675.263774912075, 327.1277842907386, 783.305978898007]], 'car': [[184.91177014152103, 384.32351254157646, 258.0971973682851, 463.8728899619722], [227.19302191265012, -3.3319706249008215e-15, 300.3784491394142, 68.73066209122189], [331.98643010555685, 794.7457084893186, 440.7521243239887, 926.6530397755021], [281.65336948319725, 1004.6145188937573, 382.89803165460995, 1141.150177593491], [172.88767526476533, 621.6204254224707, 231.32030886083783, 691.6238775524189], [167.68080692452128, 693.9380412591942, 223.79927681381858, 758.7346250488982], [105.872989584963, 582.8581833339869, 151.57772279377218, 633.7697848830401], [94.35284560275329, 651.2053686219294, 148.1085154420121, 707.1915641806596], [83.64632214929094, 566.2223387100721, 121.34220680835628, 613.0633788189698], [62.4563278143134, 574.252231300169, 90.11484673575777, 608.3792748080803], [53.08811979253385, 599.9032770740891, 81.63884900176676, 633.5842154381061], [42.3815963390715, 571.5756004368034, 69.81706268856874, 606.371801660556], [37.028334612340345, 485.0312025213162, 65.3560112496261, 512.6897214427605], [33.45949346118623, 505.9981442843467, 58.44138151926501, 534.7719260655267]], 'motobike': [[346.4499532729014, 1227.931316597559, 436.7023378371321, 1280.0], [285.1246150433601, 935.7681486171969, 364.9632629271027, 978.0016362658433], [259.66881426883344, 932.2969030570341, 329.67226639878163, 973.9518497789868], [237.68425905446944, 1014.4497146475519, 303.6379246975612, 1047.4265474690978], [242.89112739471355, 821.2170451318273, 316.94436601151824, 864.0290737071676], [211.07137642655528, 859.400746293617, 270.66109187601535, 888.9063335550001], [179.8301663850908, 816.5887177182769, 235.37009534769436, 844.9372231262726]]}"
      },
      {
        "frame_x": "6",
        "total": "25",
        "bounding_box": "{'car': [[421.02770708768867, 433.16118865506047, 596.325607875906, 730.531224975667], [150.5524031851774, 9.835195753794379, 206.67087307447474, 70.581993056642], [47.572118233683355, 190.33996488225594, 160.96613986566558, 263.23612164567305], [121.04681592379428, 351.7528834298224, 172.53695839954133, 411.9211398059762], [332.40062724887304, 792.6735872033379, 441.47543162519696, 924.9349517913953], [220.38668143725897, 774.3855960504211, 292.2323609665741, 849.823559556202], [206.34411680198372, 672.4953596270288, 281.128937766589, 748.9130369445732], [142.3361477667757, 625.7956679329741, 190.6686958137695, 687.8442093446553], [122.08872899033233, 708.7447706622742, 195.56726487258646, 777.3247374857114], [107.44194802338492, 610.4468182153475, 157.08078115272994, 662.3716502388072], [50.94511821169619, 548.0717055330787, 80.33653256459783, 584.321116568324], [81.64281764694904, 622.5299552270961, 119.5250850351334, 666.2905054858608], [86.54138670576597, 696.6616336505257, 118.87194249395779, 750.2193220269243], [65.64082538814702, 641.797660191776, 95.35881101163648, 680.6596413917238], [52.57797456463516, 505.9440116272527, 82.62253145871242, 540.2339950389712], [313.08465630423746, 1068.2540208300743, 418.9576458892005, 1216.9390389903774]], 'truck': [[308.4940761725813, 27.191423554607987, 419.5739340977883, 172.98373708144229], [194.52151361390526, 270.75715369269227, 302.1301259789496, 358.6953745501479]], 'bus': [[244.22638419016818, 714.9496248034422, 363.09832668412594, 829.249569509171]], 'motobike': [[265.6443003153469, 943.289180664216, 342.5902435656206, 975.1089316323743], [309.034869817381, 923.6187891566273, 396.9730906748366, 962.381031245111], [234.98163120057632, 911.4694296960579, 308.45632889068725, 949.6531308578477], [341.433161712233, 1039.3269744953845, 432.84262812985133, 1085.6102486308876], [319.4486064978691, 1045.1123837623227, 405.6512045752434, 1086.7673304842751], [304.9850833305244, 1196.111565629401, 402.7584999417744, 1249.3373308852292]]}"
      },
      {
        "frame_x": "7",
        "total": "21",
        "bounding_box": "{'car': [[420.1641266119577, 235.59202813599063, 568.7221570926142, 498.19460726846427], [295.6131292127136, 115.5451348182884, 417.1606086968871, 273.1066822977726], [98.84262671638835, 0.0, 144.69944694465926, 49.58137439120456], [73.15196461166633, 334.4089810819031, 113.32023089396526, 379.1492451524312], [318.2922548514585, 1077.7041021878872, 428.1442988517813, 1229.837328591212], [331.7409465512108, 795.0423026162429, 438.7910090498904, 926.1606677572431], [267.79829177011914, 835.6351115502997, 350.78005162647827, 928.6752665407624], [175.86427135279376, 684.1564843061217, 235.1962554907309, 756.2024650450453], [144.4138587082481, 664.7509105467211, 199.06173883529544, 728.3208935516537], [154.8973295897633, 774.4927759447103, 239.88035950162063, 864.8290675832988], [110.95597291617831, 683.264274018333, 158.02006559702318, 737.2429964295391], [71.69872025348307, 595.8276658150573, 107.61018433697133, 638.2076544850124], [67.90682653038182, 533.5959982418076, 103.14913289802868, 571.7379880447671], [101.82885167876904, 785.832295231686, 140.17177313744995, 850.7203161617608]], 'truck': [[199.57796014067995, 0.0, 288.11254396248535, 70.52754982415007], [29.064843082313857, 211.2916120703041, 115.93280105866762, 273.99329602316095], [132.91450712923302, 267.461870611405, 209.98532698795293, 334.0824098113154]], 'motobike': [[359.5793039168442, 998.713401441481, 456.3113468600453, 1047.7158179324447], [369.7616242266548, 1096.7182344234084, 470.9484323053981, 1141.26588577883], [323.0340697003933, 1004.9962745042208, 391.39523377253664, 1040.955037108643]], 'bus': [[250.19610028543792, 728.5850490516269, 371.97452708762705, 848.5673338655832]]}"
      },
      {
        "frame_x": "8",
        "total": "21",
        "bounding_box": "{'car': [[334.0152000735656, 788.6375794334002, 435.7271728814578, 930.7220677637233], [299.4420514217601, 868.7134527624208, 387.10171219698293, 986.2621581785595], [184.10359421855213, 843.9323120190938, 282.98279936271575, 945.0197376255342], [174.53463888202015, 710.4576529659302, 243.4801888708787, 800.0132606027037], [146.5638463598498, 747.9974008246323, 199.80649528363023, 814.980088180356], [99.45514316461552, 650.5903426553199, 140.92061628958737, 703.3422759208166], [88.1686830240906, 562.7522398225392, 126.6898621993603, 610.597016505199], [92.19257381039219, 512.7870204401381, 136.51196519764358, 560.4303661814333], [53.41310634654724, 512.2330280477975, 82.63620504251614, 544.5030849016399], [320.2067193072672, 1079.2631713950939, 424.921797221244, 1231.3963977984185], [41.78663175650433, 325.0736430612349, 73.82509209072876, 360.76205457277604]], 'bus': [[255.748080327971, 726.1605540310084, 374.25591180348226, 847.36732162708]], 'motobike': [[371.18122893331616, 1008.9262511358941, 483.4041803581064, 1064.2474243734666], [351.02851582534333, 1046.465618689961, 452.9775350774415, 1087.5613473807293], [337.1982225159502, 1075.7068102583928, 434.80057815652475, 1118.383143898806], [396.07575689022406, 1146.4388817550034, 503.5568934660795, 1200.9697525177537], [369.2054727462601, 1125.4958661722078, 468.78358457389083, 1178.0509807479018]], 'truck': [[202.32473112499216, 8.258660861894777, 288.38867063315877, 104.75459303771798], [84.97772068808533, 274.379876709614, 149.46019148734712, 329.33191943477107], [13.600897665003115, 224.29443555421255, 87.0054713421502, 276.4076273636788], [130.48323880459606, 3.3319706249008215e-15, 189.32004623281045, 57.75723297999039]]}"
      },
      {
        "frame_x": "9",
        "total": "25",
        "bounding_box": "{'truck': [[423.90719520359517, 475.8337421462427, 578.9158392549396, 804.4859492059238], [53.88816306699543, 282.51741047803984, 104.17637928780337, 323.0724235593366], [1.824975588658353, 235.47359530373566, 62.25194507979048, 278.6646842353167], [87.80160332100742, 4.055501308129673, 130.1815919909625, 53.53261726731168]], 'car': [[542.9682699085739, 671.5003911946611, 714.0707076045933, 1042.5046867929607], [327.0330449173903, 1083.5174504232102, 435.53027696391433, 1240.0557454157074], [332.1610235464549, 795.5409663594263, 436.6098514121385, 926.9791554307127], [315.4276195989811, 903.7683047938942, 412.5893199391519, 1021.9817068744354], [248.4940038090856, 803.0979874969955, 328.38251297767044, 906.7371345265109], [215.02719591413796, 899.1801133889418, 319.4760237798215, 1015.5042601850906], [208.00996200068116, 767.7419243176554, 279.8016628075851, 860.8552204769857], [172.65389882134127, 800.6689449884909, 235.26921681834017, 875.1595819159552], [130.01070811648853, 712.6836274582253, 180.48081357096612, 775.2989454552243], [110.30847443639834, 598.2487359464686, 159.15921821853973, 654.6565008661788], [121.64400614275162, 550.7474602246075, 174.0033668816214, 605.2659698599255], [97.35358105770892, 532.1248009927411, 131.89996340088072, 575.0378853096499], [71.44379430033005, 538.602247682086, 103.83102774705364, 577.4669278181544], [42.8350714223909, 485.7030997191042, 68.47496456771373, 521.5989501225562], [76.30187931733856, 487.32246139144047, 107.87943192789405, 522.9484181828363], [133.42599303746624, 6.303515300156206e-16, 197.097363575102, 47.65214037052367]], 'motobike': [[414.20868161148803, 1168.8038318329159, 519.4671903133396, 1224.401915916458], [385.3300651214929, 1020.632238814155, 488.6993185389524, 1091.6142587848908], [374.26442702719555, 1069.4829825962966, 472.5057018155904, 1114.8251094217096], [357.2611294676657, 1110.5068116288132, 450.914212851108, 1163.4059595917952]], 'bus': [[252.00262076581407, 722.1299038801861, 373.4547461910275, 848.9799015465202]]}"
      }
    ]
  }

  // problem.outputTable.map((row) => {
  //   let obj = JSON.parse(row['bounding_box'])
  //   console.log(obj);
  //   for(const [key, value] of Object.entries(obj)) {
  //     console.log(value);
  //   }
  //   return row;
  // })

  return (
    <div className="App">
      <Report info={submission} />
      <SummaryReport info={problem} />
    </div>
  );
}

export default App;
