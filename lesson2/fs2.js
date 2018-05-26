const fs = require('fs');
const log4js = require('log4js');

const logger = log4js.getLogger();
logger.level = 'error';

fs.writeFile(__dirname + '/www/write.txt', '写点data  hello world', function(err){
        // err = 'make error';
        logger.error(err);
    
});