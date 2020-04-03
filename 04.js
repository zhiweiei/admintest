var http=require("http")
var fs=require("fs")
http.createServer(function(req,res){
    if (req.url=="/red") {
        fs.readFile("./static/red.html",function(err,data){
            res.end(data.toString())
        })
    } else if(req.url=="/green"){
        fs.readFile("./static/green.html",function(err,data){
            res.end(data.toString())
        })
    }else if(req.url=="/red.css"){
        fs.readFile("./static/red.css",function(err,data){
            res.end(data.toString())
        })
    }else if(req.url=="/2.jpg"){
        fs.readFile("./static/2.jpg",function(err,data){
            res.end(data)
            console.log(err)
        })
    }else{
        res.end("404")
    }
}).listen(3000);
    console.log("服务器");

