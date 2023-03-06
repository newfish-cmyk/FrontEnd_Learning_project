const express = require("express");
const app = express();
const path = require("path");

// 创建一个数组来存储用户信息
const USERS = [
    {
        username: "admin",
        password: "123456"
    }
];

// app.use(express.static(path.resolve(__dirname,public)))

// 引入解析请求体的中间件
// app.use(express.urlencoded());

// get 查询字符串

// 添加一个路由，可以读取get请求的参数
// hello/:id 表示当用户访问 /hello/xxx 时就会被触发

// app.post("/login", (req, res) => {
//     // 通过 req.body 来获取post请求的参数（请求体中的参数）
//     // 默认情况下express不会自动解析请求体，需要通过中间件来为其增加功能
//     console.log(req.body);
//     res.send("<h1>post请求已经收到</h1>")
// })

