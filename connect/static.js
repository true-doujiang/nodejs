const connect = require('connect');
const logger = require('morgan');


var app = connect()
    .use(logger('dev'))
    .use(static(__dirname+'/static',{maxAge:60*60*1000,hidden:false}))
    .use(function (req, res) {
        res.setHeader('Content-Type', 'text/html');
        res.write('static:');
        res.write('');
        res.write('hidden:');
        res.end('');
    })
    .listen(3000);