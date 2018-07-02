const connect = require('connect');
const logger = require('morgan');
const query = require('connect-query');


var app = connect()
    .use(query())
    .use(logger('dev'))
    .use(function (req, res) {
        res.end(JSON.stringify(req.query));
    })
    .listen(3000);