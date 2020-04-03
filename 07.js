var url=require("url")
// {
//     Url: [Function: Url],
//     parse: [Function: urlParse],
//     resolve: [Function: urlResolve],
//     resolveObject: [Function: urlResolveObject],
//     format: [Function: urlFormat],
//     URL: [Function: URL],
//     URLSearchParams: [Function: URLSearchParams],
//     domainToASCII: [Function: domainToASCII],
//     domainToUnicode: [Function: domainToUnicode],
//     pathToFileURL: [Function: pathToFileURL],
//     fileURLToPath: [Function: fileURLToPath]
//   }
/**
 * url模块的作用：
 * node.js遗留特有的api
 */ 

// parse 解析url  返回一份url属性对象  把对象转换成字符串
// var data=url.parse("http://localhost:3000/red?username=tom&password=123")
// Url {
//     protocol: 'http:',  协议
//     slashes: true,      
//     auth: null,         用户名和密码
//     host: 'localhost:3000',    主机名
//     port: '3000',      端口号
//     hostname: 'localhost',   主机名不带端口号
//     hash: null,  
//     search: '?username=tom&password=123',   查询字符串
//     query: 'username=tom&password=123',     请求参数  针对get
//     pathname: '/red',               路径名称 
//     path: '/red?username=tom&password=123',    带查询的路径
//     href: 'http://localhost:3000/red?username=tom&password=123'  原字符本身      
//   }
// console.log(data)

//resolve  解析浏览器超链接   转换成基本的url
//参数：from解析时对应的url  to要解析的超链接
var data=url.resolve("/aa/bb/cc","dd")
var datatwo=url.resolve("http://localhost:3000/","fff")
var datathree=url.resolve("http://localhost:3000/aa","vv")
console.log(data,datatwo,datathree)
//fotmat 返回一个格式化的url字符串

var objurl={
    protocol:'http:',
    slashes:true,
    auth:null,
    host:'localhost:3000',
    port:'3000',
    hostname:'localhost',
    hash:null,
    search:'?username=tom&password=123',
    query:'username=tom&password=123',
    pathname:'/red',
    path:'red?username=tom&password=123',
    href:'http://localhost:3000/red?username=tom&password=123'
}
var mat = url.format(objurl)
console.log(mat)
  