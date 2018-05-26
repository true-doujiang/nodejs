const http = require('http');
const fs = require('fs');
const log4js = require('log4js');

const logger = log4js.getLogger();
logger.level = 'info';

const server = http.createServer(function(req, res){
    let url = req.url;
    let file_name = __dirname + '/www' + url;
    logger.info(file_name);
    
    fs.readFile(file_name, function(err, data){
        if(err) {
            res.write('404');
        } else {
            res.write(data);
        }
        res.end();
    });
});

server.listen(3000);