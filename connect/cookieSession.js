var connect = require('connect');
const logger = require('morgan');
// const cookieParser = require('cookie-parser');
/**
 * 基于cookies的会话中间件 
 */
const cookieSession = require('cookie-session'); 


var app = connect()
    .use(logger('dev'))
    // .use(cookieParser())
    .use(cookieSession({ 
        name: 'JESSION',
        keys: ['adddaa', 'shdakfhasj'],
        //secret: 'adddaa!',            // secret和keys必须要用一个  否则报错
        cookie: { maxAge: 60 * 60 * 1000 }
    }))
    .use(function (req, res, next) {
        // console.log('aa:' + req.session.pv);
        if(req.session.pv){
            res.write('views: ' + req.session.pv );
            req.session.pv++;
            // console.log('bb:' + req.session.pv);
            res.end();
        }else{
            req.session.pv = 1;
            res.end('Refresh');
        }
        
    })
    .listen(3000);