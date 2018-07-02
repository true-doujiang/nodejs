const express = require('express');
const bodyParser2 = require('./libs/my-body-parser');

var server = express();
server.listen(8080);

//使用自定义的body-parser中间件
server.use(bodyParser2.aaa({name : '自定义中间件参数'}));

server.use('/', function (req, res){
  console.log(req.body);
});
