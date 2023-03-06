/*
    express 是node中的服务器软件
        通过express可以快速地在node中搭建一个web服务器
    - 使用步骤：
        1、创建并初始化项目
        2、安装express
        3、创建index.js
*/

const express = require("express");

// 获取服务器的实例（对象）
const app = express();

// 如果希望服务器可以正常访问，则需要为服务器设置路由
//    路由可以根据不同的请求方式和请求地址来处理用户的请求

/*
    中间件
        在express中使用app.use来定义一个中间件
            中间件作用和路由类似
            
*/

app.get("/", (req, res) => {
    console.log("访问成功");
    // 在路由中，要做两件事
    // 读取用户请求
    // req 表示的是用户的请求信息，通过 req 可以获取用户传递数据

    // 根据用户请求返回响应
    // res 表示的服务器发送给可无端的相应信息
    res.status(200)
    res.send("heheer");
})

// 传入端口号，启动服务器
app.listen(3000, () => {
    console.log("服务器启动");
})

/*
    目前，服务器代码修改后必须要重启，

    模块 nodemon 可以监视代码的执行，自动重启服务器
*/

// nginx 做反向代理
// 服务器中的代码，对于外部来说都是不可见的

// 静态资源