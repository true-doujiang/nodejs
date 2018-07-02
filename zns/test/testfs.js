const fs = require('fs');
const http = require('http');


var stream = fs.createReadStream('./resource.json');
stream.on('data', function (chunk) {
	console.log(chunk);

	console.log('=================================');
});

stream.on('end', function () {
	console.log('finished');
});

console.log('over');
