var Mock = require('mockjs');

export default {
    'GET /api/content/detail': Mock.mock({ //快速导航配置
        "code": 1,
        "message": "",
        "data": {
            "id": "@id",
            "title": "@ctitle",
            "content": "",
            "source": null,
            "viewTimes": 0,
            "publishTime": "2021-04-17 11:20:45",
            "navPath": "content"

        }
    }),
};