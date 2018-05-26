const http = require('http');

/**
 * http://localhost:3000/adfasfa/adfsdf/?n=a
 * 
 */

const server = http.createServer(function(req, res){
    res.write(req.url + '\n');
    res.write('hello world');
    res.end(); // must
});

server.listen(3000);