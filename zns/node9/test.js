const express = require('express');

var app = express();

app.use('/', function (req, res, next) {
	console.log('/');
	res.send('/');
	next();
});

/*app.use('/index', function (req, res) {
	console.log('/index');
	res.send('/index');
});*/

app.listen(8080, function () {
 
  var host = app.address().address;
  var port = app.address().port;
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
});