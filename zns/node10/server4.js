const express = require('express');
const bodyParser = require('body-parser');


var server = express();
server.listen(8080);

/*
server.use(function (req, res, next){
  var str='';
  req.on('data', function (data){
    str += data;
  });
  req.on('end', function (){
    req.body = querystring.parse(str);
    next(); //数据收集完了才能往下走，不然就出事了
  });
});
*/
//没加映射路径默认拦截所有请求    上面的事交给body-parser解决就行了
server.use(bodyParser.urlencoded({}));

server.use('/', function (req, res){
  console.log(req.body);
});
