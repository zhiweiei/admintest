var fs=require("fs")
//读文件  readFile(url,option,callback)
fs.readFile("./static/1.txt",function(err,data){
    //err 报错的信息   data 文件内容
    // console.log(err)
    // console.log(data.toString())
})
fs.writeFile("./static/2.txt","韩淞杉",function(err){
    //若文件不存在则创建文件
    console.log(err)
})