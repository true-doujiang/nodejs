var connect = require('connect');
const logger = require('morgan');
// const cookieParser = require('cookie-parser'); 
const session = require('express-session');  

var app = connect()
    .use(logger('dev'))
    // .use(cookieParser())
    .use(session({
        key: 'express-sessoinID',
        secret: '123',       //secret option required for sessions
        cookie: {maxAge: 60000 }
    })) 
    .use(function (req, res, next) {
        if(req.session.pv){
            res.write('views: ' + req.session.pv);
            req.session.pv++;
            res.end();
        }else{
            req.session.pv = 1;
            res.end('Refresh');
        }
    })
    .listen(3100);