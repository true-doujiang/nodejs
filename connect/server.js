
const http = require('http');
const connect = require('connect');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

// store session state in browser cookie
const cookieSession = require('cookie-session');
// parse urlencoded request bodies into req.body
var bodyParser = require('body-parser');


const app = connect();

app.use(logger());
app.use(cookieSession({
    keys: ['secret1', 'secret2']
}));

app.use(cookieParser('secret string'));
app.use(bodyParser.urlencoded(
    {
        extended: false
    }
));

app.use(function (req, res, next) {
    req.cookies.website="blog.fens.me";
    res.end(JSON.stringify(req.cookies));
    // next();
});

 
// respond to all requests
app.use(function(req, res){
    res.end('Hello from Connect!\n');
});
 
//create node.js http server and listen on port
http.createServer(app).listen(3000);

// app.listen(3000);