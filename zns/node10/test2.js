const fs = require('fs');


// 异步读取
fs.readFile('input.txt', 'utf-8', function (err, data) {
   if (err) {
        console.error(err);
        return;
   }
   console.log("异步读取: " + data.toString());
});

// 同步读取
// var data = fs.readFileSync('input.txt');
// console.log("同步读取: " + data.toString());

// console.log("程序执行完毕。");

// fs.stat('input.txt', function (err, stats) {
//     console.log(stats);         //true
// });



// var buf = new Buffer(1024);

// console.log("准备打开已存在的文件！");

// fs.open('input.txt', 'r+', function(err, fd) {
//    if (err) {
//        return console.error(err);
//    }

//    console.log("文件打开成功！");
//    console.log("准备读取文件：");

//    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
//       if (err){
//          console.log(err);
//       }
//       console.log(bytes + "  字节被读取");
      
//       // 仅输出读取的字节
//       if(bytes > 0){
//          console.log(buf.slice(0, bytes).toString());
//       }
//    });

// });