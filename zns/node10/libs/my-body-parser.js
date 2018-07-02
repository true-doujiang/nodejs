const querystring=require('querystring');

module.exports={

  aaa: function (params){
    console.log('自定义中间件执行! 参数如下:');
    console.log(params);
    
    return function (req, res, next){
      var str='';
      req.on('data', function (data){
        str+=data;
      });
      req.on('end', function (){
        req.body=querystring.parse(str);

        next();
      });
    };
  }
}
