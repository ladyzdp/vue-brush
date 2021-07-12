var Mock = require('mockjs');
var content = require('./content');


var home = {
    'GET /api/home/fastNav': Mock.mock({ //快速导航配置
        "code": 1,
        "message": "",
        "data": [
            {
                "name": "就医指南",
                "key": "jyzn",
                "linkUrl": "content?id=222222"
            },
            {
                "name": "门诊排班",
                "key": "mzpb",
                "linkUrl": "content?id=1233444"
            },
            {
                "name": "预约挂号",
                "key": "yygh",
                "linkUrl": "content?id=123344444555"
            },
            {
                "name": "院士预约",
                "key": "ysyy",
                "linkUrl": "content?id=1233444887"
            },
            {
                "name": "联系我们",
                "key": "lxwm",
                "linkUrl": "content?id=1233444939939"
            },
            {
                "name": "意见反馈",
                "key": "yjfk",
                "linkUrl": "content?id=1233444"
            }
        ]
    }),
   
};
 Object.assign(home,content.default);

export default home;