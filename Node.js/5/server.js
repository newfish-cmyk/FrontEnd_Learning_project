const Koa = require("koa"); 
const views = require("koa-views");
const router = require("koa-router")();
const nunjucks = require("nunjucks");
const session = require("koa-session");
const app = new Koa();
app.keys = ["123456"];
app.use(session({
    maxAge: 30000
}, app));

app.use(views(__dirname + "/views",{
    map:{html:"nunjucks"}
}));

router.get("/", async ctx => {
    ctx.cookies.set("user", "heheer");
    ctx.body = "cookie";
})

router.get("/test", async ctx => {
    let count = ctx.cookies.get("count");
    if (count>0) {
        ++count;
        ctx.cookies.set("count", count,{
            maxAge:1000
        });
    } else {
        count = 1;
        ctx.cookies.set("count", 1);
    }
    ctx.body = count;
})

// 设置 session
router.get("/session", async ctx => {
    ctx.session.user = "heheer";
    ctx.body = "set session"
})

// 获取 session 
router.get("/session_test", async ctx => {
    let user = ctx.session.user;
    ctx.body = user
})

app.use(router.routes());

app.listen(3000, () => {
    console.log("server is running");
});