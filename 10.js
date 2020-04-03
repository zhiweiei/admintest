// 模块化  module

// module.exports  和 exports 的区别
// 1.每一个js文件都会自动创建module，同时module会创建一个exports属性，初始值为空
// 2.exports包含module.exports 的值
// 3.module.exports  的值会覆盖 exports 里面的值

var bar = require("./bar")
console.log(bar.b)

// node-module 的作用
// 里面配置的是当前项目的依赖