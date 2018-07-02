var connect = require('connect');
const logger = require('morgan');
const multipart = require('connect-multiparty');

var app = connect()
    .use(logger('dev')) 
    .use(multipart({ 
        uploadDir: '/Users/huanhuanyou/dianda/vscodeWorkspace/connect/upload' 
    }))
    .use(function (req, res) {
        if(req.method=='POST'){
            console.log(req.files);
            res.end('Upload ==>'+ req.files.file.path);
        }else{
            res.setHeader('Content-Type', 'text/html');
            res.write('<form enctype="multipart/form-data" method="POST">');
            res.write('<input type="file" name="file">');
            res.write('<input type="submit" value="submit"/>');
            res.write('</form>');
            res.end('hello world\n');
        }
    })  
.listen(3000);