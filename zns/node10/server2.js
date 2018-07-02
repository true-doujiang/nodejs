const express = require('express');
const bodyParser = require('body-parser');

var server = express();
server.listen(8080);

//   '/index', 也可以加路径的
server.use( bodyParser.urlencoded({
  extended: false,                 //扩展模式
  limit:    2*1024*1024           //限制-2M   默认100k
}));

//POST需要中间件支持
server.use('/', function (req, res){
  console.log(req.body); //POST
});

//req.query   GET
//req.body    POST
