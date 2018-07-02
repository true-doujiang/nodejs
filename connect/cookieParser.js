var connect = require('connect');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

var app = connect()
    .use(logger('dev'))
    .use(cookieParser('secret string'))  //用了我 req才有 cookies熟悉
    .use(function (req, res, next) {
        // req.cookies.website="blog.fens.me";
        
        req.secret = 'secret string';
        // res.cookie('user', 'blue', {signed: true});  //res.cookie()  is not a function

        console.log('签名cookie：', req.signedCookies);  //发现被篡改后  解析为{key: false} 
        console.log('无签名cookie：', req.cookies);

        res.end(JSON.stringify(req.cookies));
    })
    .listen(3000);