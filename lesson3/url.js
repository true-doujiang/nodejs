const urlLib = require('url');

let obj = urlLib.parse('http://localhost:3000/index.html?name=aaa&age=bb', true);
console.log(obj);
console.log(obj.pathname);
console.log(obj.query);