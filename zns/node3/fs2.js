const fs=require('fs');

//writeFile(文件名, 内容, 回调)
fs.writeFile("bbb.txt", "写入数据写入数据写入数据写入数据", function (err){
  console.log(err);
});
