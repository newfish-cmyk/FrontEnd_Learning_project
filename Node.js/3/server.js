const Koa = require("koa"); // 引入Koa构造函数
const router = require("koa-router")(); // 引入并执行koa-router
const static = require("koa-static");
const app = new Koa();  // 创建应用

app.use(static(__dirname + "/public"));

// 引入一个中间件，中间件即是一个函数
// app.use(async (ctx) => {
//     ctx.body = "hello koa!"
// })

router.get("/", async (ctx) => {
    ctx.body = `
        <h1> Title </h1>
        <img src="images/1.jpg" width="100px"/>
    `;
})

router.get("/blog", async (ctx) => {
    ctx.body = "blog page"
})

app.use(router.routes());   // 在koa项目中引入router

app.listen(3000, () => {
    console.log("server is running");
})  // 设置监听端口


