
var http=require("http")
var server=http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    console.log(req.url)
    //获取地址栏路径
    // switch(req.url){
    //     case "/red":
    //         res.write("red")
    //         bredk;
    //     default:
    //         res.write("我是默认的")
    // }
    //是red的话
    if (req.url=="/red") {
        //在网页返回
        res.write("red")
    } else {
        //不是red 写入默认的
        res.write("我是默认的")
    }
    res.end()

})
server.listen(3000)