var APP_DATA = {
  "scenes": [
    {
      "id": "0-garden",
      "name": "GARDEN",
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
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "yaw": 0.0010239416451920391,
        "pitch": 0.21132024978888886,
        "fov": 1.4083983627516938
      },
      "linkHotspots": [
        {
          "yaw": 0.24922744218824633,
          "pitch": 0.22840566578881116,
          "rotation": 0,
          "target": "1-living-room"
        },
        {
          "yaw": -0.29358565156852734,
          "pitch": 0.08570102567822246,
          "rotation": 0,
          "target": "2-living-room-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-room",
      "name": "LIVING ROOM",
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
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "yaw": 0.003668023732988246,
        "pitch": 0.06019982203455143,
        "fov": 1.4083983627516938
      },
      "linkHotspots": [
        {
          "yaw": 0.6441008802058406,
          "pitch": 0.056624037803491234,
          "rotation": 0,
          "target": "0-garden"
        },
        {
          "yaw": -0.9688767279466841,
          "pitch": 0.07616234792569188,
          "rotation": 0,
          "target": "3-street"
        },
        {
          "yaw": 0.8602421186427875,
          "pitch": -0.39383989496519334,
          "rotation": 0,
          "target": "2-living-room-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living-room-2",
      "name": "LIVING ROOM 2",
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
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "yaw": -0.029890558435898384,
        "pitch": 0.1485329375167801,
        "fov": 1.4083983627516938
      },
      "linkHotspots": [
        {
          "yaw": -0.9892113967337686,
          "pitch": 0.08542661211050628,
          "rotation": 0,
          "target": "0-garden"
        },
        {
          "yaw": 0.9363781130027977,
          "pitch": 0.03731365397901598,
          "rotation": 0,
          "target": "3-street"
        },
        {
          "yaw": -0.7314435454633266,
          "pitch": 0.529997927569239,
          "rotation": 0,
          "target": "1-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-street",
      "name": "STREET",
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
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "yaw": -0.0024626614810419056,
        "pitch": 0.27544637721982923,
        "fov": 1.4083983627516938
      },
      "linkHotspots": [
        {
          "yaw": -0.13614154877413398,
          "pitch": 0.2577782070476662,
          "rotation": 0,
          "target": "1-living-room"
        },
        {
          "yaw": 0.3728021080450077,
          "pitch": 0.14417438247581416,
          "rotation": 0,
          "target": "2-living-room-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "MEYDAN",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
