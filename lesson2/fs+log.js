const fs = require('fs');
const path = require('path');
const log4js = require('log4js');

//https://www.cnblogs.com/unuai/p/7923118.html
log4js.configure({
    appenders: { 
        cheese: { 
            type: 'file', 
            filename: 'logs/access.log' 
        },
        stdout: {//控制台输出
            type: 'stdout'
        },
        req: {//请求日志
            type: 'dateFile',
            filename: 'logs/reqlog/',
            pattern: 'req-yyyy-MM-dd.log',
            alwaysIncludePattern: true
        },
        err: {//错误日志
            type: 'dateFile',
            filename: 'logs/errlog/',
            pattern: 'err-yyyy-MM-dd.log',
            alwaysIncludePattern: true
        },
        oth: {//其他日志
            type: 'dateFile',
            filename: 'logs/othlog/',
            pattern: 'oth-yyyy-MM-dd.log',
            alwaysIncludePattern: true
        } 
    },
    categories: { 
        //appenders:采用的appender,取appenders项,level:设置级别
        default: { appenders: ['stdout', 'cheese'], level: 'info' }, //不加 stdout控制台就看不到输出了,还是加一下吧
        req: { appenders: ['stdout', 'req'], level: 'debug' },
        err: { appenders: ['stdout', 'err'], level: 'error' },
        oth: { appenders: ['stdout', 'oth'], level: 'info' } 
    }
});

// logger.level = 'debug'; 
// logger.setLevel('INFO');//设置输出级别，具体输出级别有6个，见下方说明

const logger = log4js.getLogger(); // 可以选一个categories 'req'、 'err' ...
//log4js的输出级别6个: 从低到高：trace, debug, info, warn, error, fatal
// 输出日志时，高于等于我们自己设置的等级的信息都会输出，比如我设置的是info，到时候info, warn,error,fatal的信息都会输出到文件中

logger.trace('trace trace trace');
logger.debug('debug debug debug');
logger.info('info info info');
logger.warn('warn warn warn');
logger.error('error error error');
logger.fatal('fatal fatal fatal');



fs.readFile('./www/aa.txt', function(err, data){
    if(err){
        console.log(err);
        logger.error(err);
    }else{
        logger.info(data.toString());
    }
});