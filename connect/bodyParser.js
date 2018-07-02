var connect = require('connect');
const logger = require('morgan');
const bodyParser = require('body-parser');

var app = connect()
    .use(logger('dev'))
    .use(bodyParser())
    .use(function(req, res) {
        res.end('req.body=>' + JSON.stringify(req.body));
    })
    .listen(3000);