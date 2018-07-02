var async = require('async');

var concurrencyCount = 0;

var fetchUrl = function (url, callback) {
  var delay = parseInt((Math.random() * 10000000) % 2000, 10);
  concurrencyCount++;
  console.log('现在的并发数是', concurrencyCount, '，正在抓取的是', url, '，耗时' + delay + '毫秒');
  
  // if(concurrencyCount == 20) {  //抛异常后面的就不执行了  前面的结果也没有了
  //   throw '20 Error';
  // }

  setTimeout(function () {
    // concurrencyCount--;
    callback(null, url + ' html content');
  }, delay);
};

var urls = [];
for(var i = 0; i < 30; i++) {
  urls.push('http://datasource_' + i);
}

async.mapLimit(urls, 5, function (url, callback) {
  fetchUrl(url, callback);
}, function (err, result) {
  if(err) {
    console.error(err);
  } else {
    console.log('final:');
    console.log(result);
  }
});