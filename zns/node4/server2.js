const http=require('http');
const querystring=require('querystring');

http.createServer(function (req, res){
  var GET = {};

  if(req.url.indexOf('?') != -1){
    var arr = req.url.split('?');
    var url = arr[0];
    
    GET = querystring.parse(arr[1]);
  }else{
    var url=req.url;
  }


  console.log(url, GET);

  //req获取前台请求数据
  res.write(JSON.stringify(GET));
  res.end();

}).listen(8080);

//http://localhost:8080/1.html?name=1&age=9&age=0
