const http=require('http');
const fs = require('fs');



var server=http.createServer(function (request, response){
  var readStream = fs.createReadStream('./resoruddddddrce.json');
  readStream.on('error', function (err) {
  	response.statusCode = 500;
  	response.end('服务器内部错误');
  	return;
  })
  var writeStream = fs.createWriteStream('./copy.txt');
  readStream.pipe(writeStream);
  response.end('ok');
});

//监听——等着
//端口-数字
server.listen(8080);
