const querystring = require('querystring');

var json = querystring.parse("user=blue&pass=123456&age=18&age=9");
console.log(json);
console.log(typeof json);
