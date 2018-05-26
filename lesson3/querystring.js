const querystring = require('querystring');

let json = querystring.parse('user=blue&pass=123&age=18&age=19');
console.log(json);
console.log(typeof json); 