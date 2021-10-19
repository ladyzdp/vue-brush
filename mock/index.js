var Mock = require('mockjs');
var content = require('./content');


var home = {
    'GET /api/home/fastNav': Mock.mock({ //快速导航配置
        "code": 1,
        "message": "",
        "data|10": [
            {
                "name": "@ctitle",
                "key": "@id",
                "linkUrl": "@url"
            }
        ]
    }),
   
};
 Object.assign(home,content.default);

export default home;