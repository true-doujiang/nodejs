var connect = require('connect');
const logger = require('morgan');

;
var app = connect()
    .use(logger('dev'))
    // .use(logger('short'))
    // .use(logger('tiny'))
    // .use(logger(function(tokens, req, res) { 
        // console.warn(tokens);
        // console.warn(req);
        // console.warn(res);
        return `some format string` 
    // }))
    .use(function (req, res) {
        res.end('hello world\n');
    })
    .listen(3000);