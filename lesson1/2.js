const http = require('http');

const server = http.createServer(function(req, res){
    let url = req.url;
    console.log(url);
    switch(url){
        case '/boy.html':
            res.write('hello boy');
            break;
        case '/girl.html':
            res.write('hello girl');
            break;
        default:
            res.write('hello dog');
            break;
    }
    res.end();
});

server.listen(3000);