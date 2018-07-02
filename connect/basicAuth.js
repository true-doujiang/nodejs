var connect = require('connect');
const logger = require('morgan');


var app = connect();
app.use(logger('dev'));

//  基本用法
//  app.use(connect.basicAuth('fens','fens'))

//  同步验证
app.use(connect.basicAuth(function (user, pass) {
    var isLogin = 'fens' == user && 'fens' == pass;
    console.log("Login:" + isLogin);
    return isLogin;
}));

app.use(function (req, res) {
    res.end('hello world\n');
});
app.listen(3000);