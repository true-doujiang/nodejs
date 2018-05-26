const http = require('http');
const urlLib = require('url');
const querystring = require('querystring');
const log4js = require('log4js');

const logger = log4js.getLogger();
logger.level = 'INFO';

const server = http.createServer(function(req, res) {
    let GET = {};
    let url = req.url;
    logger.info(url);

    if(url.indexOf('?') != -1){
        let arr = url.split('?');
        let params = arr[1];
        // 一
        // let maps = params.split('&');
        // for(let map of maps) {
        //     let p = map.split('=');
        //     GET[p[0]] = p[1];
        // }
        
        // 二
        // GET = querystring.parse(params);        
    } 

    // 三
    let obj = urlLib.parse(req.url, true);
    GET = obj.query;

    logger.warn(GET);
    res.write(JSON.stringify(GET));
    res.end();
});

server.listen(3000);

