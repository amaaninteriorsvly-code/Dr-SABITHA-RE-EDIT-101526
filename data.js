var APP_DATA = {
  "scenes": [
    {
      "id": "0-entry",
      "name": "ENTRY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.06872936724520073,
          "pitch": 0.5471678852081023,
          "rotation": 0,
          "target": "1-living-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-1",
      "name": "LIVING 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.08197732445825245,
          "pitch": 0.5737207656228271,
          "rotation": 0,
          "target": "2-living-2"
        },
        {
          "yaw": -2.245170341037916,
          "pitch": 0.3776707325568083,
          "rotation": 0,
          "target": "3-passage-1"
        },
        {
          "yaw": -3.1103685889850823,
          "pitch": 0.6134240984418717,
          "rotation": 4.71238898038469,
          "target": "0-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living-2",
      "name": "LIVING 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -1.1559832394000011,
          "pitch": 0.4775144048086659,
          "rotation": 0,
          "target": "1-living-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-passage-1",
      "name": "PASSAGE 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.09739637112083344,
          "pitch": 0.48595395643751615,
          "rotation": 0,
          "target": "5-courtyard"
        },
        {
          "yaw": -1.4917134692461111,
          "pitch": 0.42312030642538545,
          "rotation": 0,
          "target": "1-living-1"
        },
        {
          "yaw": 2.8975685078202247,
          "pitch": 0.3697650794577676,
          "rotation": 0,
          "target": "6-lift-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-passage-2",
      "name": "PASSAGE 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.5076175534261402,
          "pitch": 0.34937201340716584,
          "rotation": 0,
          "target": "3-passage-1"
        },
        {
          "yaw": -1.7686558727435688,
          "pitch": 0.8720745449187071,
          "rotation": 4.71238898038469,
          "target": "17-bedroom-2"
        },
        {
          "yaw": 1.166469626066588,
          "pitch": 0.4681648737689983,
          "rotation": 0,
          "target": "5-courtyard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-courtyard",
      "name": "COURTYARD",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -1.605766221506581,
          "pitch": 0.22890774934803204,
          "rotation": 0,
          "target": "6-lift-area"
        },
        {
          "yaw": -1.4003151450603823,
          "pitch": 0.5915092799011514,
          "rotation": 0,
          "target": "3-passage-1"
        },
        {
          "yaw": 2.909912641424346,
          "pitch": 0.5869295137299613,
          "rotation": 0,
          "target": "4-passage-2"
        },
        {
          "yaw": 1.14431958422254,
          "pitch": 0.6197136133974652,
          "rotation": 0,
          "target": "10--home-theatre-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-lift-area",
      "name": "LIFT AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.0361128525134582,
          "pitch": 0.7805960233835236,
          "rotation": 0.7853981633974483,
          "target": "13-bedroom-1"
        },
        {
          "yaw": 2.983357649202416,
          "pitch": 0.22476684875987019,
          "rotation": 0,
          "target": "3-passage-1"
        },
        {
          "yaw": -1.688005104795284,
          "pitch": 0.6650392945644992,
          "rotation": 0,
          "target": "7-dining-1"
        },
        {
          "yaw": -1.7874101770546567,
          "pitch": 0.21304391880778795,
          "rotation": 0,
          "target": "9-wash-area"
        },
        {
          "yaw": -1.4517423006337395,
          "pitch": 0.2079094677735327,
          "rotation": 0,
          "target": "23-kitchen-1"
        },
        {
          "yaw": -2.095293720039601,
          "pitch": 0.30131870540907535,
          "rotation": 4.71238898038469,
          "target": "20-bedroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-dining-1",
      "name": "DINING 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.09959549758220732,
          "pitch": 0.6400523410220149,
          "rotation": 0,
          "target": "8-dining-2"
        },
        {
          "yaw": -1.040918086317646,
          "pitch": 0.4298264568544319,
          "rotation": 0,
          "target": "23-kitchen-1"
        },
        {
          "yaw": -1.6521117868669464,
          "pitch": 0.436868701306123,
          "rotation": 0,
          "target": "9-wash-area"
        },
        {
          "yaw": -2.637617986430927,
          "pitch": 0.6829122264865521,
          "rotation": 0,
          "target": "20-bedroom-3"
        },
        {
          "yaw": 1.0230133623189026,
          "pitch": 0.3613986346502287,
          "rotation": 4.71238898038469,
          "target": "6-lift-area"
        },
        {
          "yaw": 1.3152887497017893,
          "pitch": 0.3085734277109218,
          "rotation": 0,
          "target": "13-bedroom-1"
        },
        {
          "yaw": 2.1947088025895205,
          "pitch": 0.3301397832574864,
          "rotation": 1.5707963267948966,
          "target": "3-passage-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-dining-2",
      "name": "DINING 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.7060612926213601,
          "pitch": 0.34995061731303423,
          "rotation": 0,
          "target": "7-dining-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-wash-area",
      "name": "WASH AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.111143997399349,
          "pitch": 0.7416328202376192,
          "rotation": 0,
          "target": "7-dining-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10--home-theatre-1",
      "name": " HOME THEATRE 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.3155206139309428,
          "pitch": 0.5369486970008666,
          "rotation": 0,
          "target": "11-home-theatre-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-home-theatre-2",
      "name": "HOME THEATRE 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.7029850541418163,
        "pitch": 0.04826730432602844,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.7165992653876483,
          "pitch": 0.44559657159814847,
          "rotation": 0,
          "target": "12-home-theatre-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-home-theatre-3",
      "name": "HOME THEATRE 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.5358886599137627,
          "pitch": 0.6307502566192014,
          "rotation": 0,
          "target": "3-passage-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-bedroom-1",
      "name": "BEDROOM 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.5498368994448981,
          "pitch": 0.44670697906930634,
          "rotation": 0,
          "target": "14-bedroom-12"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-bedroom-12",
      "name": "BEDROOM 1.2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.641010738102338,
          "pitch": 0.4973221091889357,
          "rotation": 0,
          "target": "15-bedroom-13"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-bedroom-13",
      "name": "BEDROOM 1.3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.6904283423293318,
          "pitch": 0.38250548362138836,
          "rotation": 0,
          "target": "16-bedroom-14"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-bedroom-14",
      "name": "BEDROOM 1.4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -2.804878509679874,
          "pitch": 0.4508877793432333,
          "rotation": 1.5707963267948966,
          "target": "6-lift-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-bedroom-2",
      "name": "BEDROOM 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.2368140330036752,
        "pitch": -0.002610263139057878,
        "fov": 0.9279485459334771
      },
      "linkHotspots": [
        {
          "yaw": 0.3197845480329491,
          "pitch": 0.4250049328951153,
          "rotation": 0,
          "target": "18-bedroom-22"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-bedroom-22",
      "name": "BEDROOM 2.2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.0725128980492027
      },
      "linkHotspots": [
        {
          "yaw": 0.39162301788542564,
          "pitch": 0.45550198813047516,
          "rotation": 0,
          "target": "19-bedroom-23"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-bedroom-23",
      "name": "BEDROOM 2.3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9968108243440602
      },
      "linkHotspots": [
        {
          "yaw": 2.27446329210162,
          "pitch": 0.5273155990952496,
          "rotation": 0,
          "target": "4-passage-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-bedroom-3",
      "name": "BEDROOM 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.26022237560391304,
        "pitch": 0.009698070142746928,
        "fov": 0.8619159839367427
      },
      "linkHotspots": [
        {
          "yaw": -0.7299847563577497,
          "pitch": 0.3481474033480101,
          "rotation": 0,
          "target": "21-bedroom-32"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-bedroom-32",
      "name": "BEDROOM 3.2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -3.031694347004466,
          "pitch": 0.42156792597917025,
          "rotation": 0,
          "target": "22-bedroom-33"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-bedroom-33",
      "name": "BEDROOM 3.3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.49654313125581595,
          "pitch": 0.34833923416527846,
          "rotation": 0,
          "target": "7-dining-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-kitchen-1",
      "name": "KITCHEN 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.09739733053727839,
          "pitch": 0.6081477123720163,
          "rotation": 0,
          "target": "24-kitchen-2"
        },
        {
          "yaw": 1.4521954705297553,
          "pitch": 0.5740934511336953,
          "rotation": 0,
          "target": "7-dining-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-kitchen-2",
      "name": "KITCHEN 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.36095975862869345,
          "pitch": 0.5823686065097036,
          "rotation": 0,
          "target": "25-kitchen-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-kitchen-3",
      "name": "KITCHEN 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.008882112048739899,
          "pitch": 0.44721548370181274,
          "rotation": 0,
          "target": "23-kitchen-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Dr. SABITHA RE EDIT101526",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
