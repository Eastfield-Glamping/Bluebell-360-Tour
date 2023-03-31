var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "Living Room",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.044215214582619566,
        "pitch": 0.16990277378936014,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": -1.250376527335959,
          "pitch": 0.5040599972338367,
          "rotation": 0,
          "target": "1-additional-sleeping"
        },
        {
          "yaw": 0.5556809312373154,
          "pitch": 0.040189714596289505,
          "rotation": 0,
          "target": "4-bedroom"
        },
        {
          "yaw": 0.7661941327143467,
          "pitch": 0.2854296183010252,
          "rotation": 7.0685834705770345,
          "target": "3-bathroom"
        },
        {
          "yaw": 0.40748415789853,
          "pitch": 0.47459439498509326,
          "rotation": 0,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-additional-sleeping",
      "name": "Additional Sleeping",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.010740487704580914,
        "pitch": 0.25575182636862337,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": -0.0013425609630726143,
          "pitch": 0.27815336802819957,
          "rotation": 0,
          "target": "0-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "Kitchen",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.09666442766391548,
        "pitch": 0.06720462497872859,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": -0.012089837437324391,
          "pitch": 0.08446777264694205,
          "rotation": 0,
          "target": "4-bedroom"
        },
        {
          "yaw": 2.6608713947561906,
          "pitch": 0.33963984675266445,
          "rotation": 5.497787143782138,
          "target": "3-bathroom"
        },
        {
          "yaw": 3.016231325625032,
          "pitch": 0.7690426781365964,
          "rotation": 11.780972450961727,
          "target": "0-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bathroom",
      "name": "Bathroom",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.5825589180829596,
        "pitch": 0.2380744396839134,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": -0.0697810847969027,
          "pitch": 0.06617628372130646,
          "rotation": 0,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bedroom",
      "name": "Bedroom",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.236293428812008,
        "pitch": 0.048536673595748425,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": 1.5009469518555436,
          "pitch": 0.27711275365587795,
          "rotation": 0,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
