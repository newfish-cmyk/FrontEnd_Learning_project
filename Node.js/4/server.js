const Koa = require("koa"); 
const views = require("koa-views");
const router = require("koa-router")();
const nunjucks = require("nunjucks");
const parser = require("koa-parser");
const app = new Koa();

app.use(parser());
router.get("/", async ctx => {
    await ctx.render("index",{title:"HOME"});
});

router.get("/blog", async ctx => {
    await ctx.render("index",{title:"BLOG"})
})

router.post("/login", async ctx => {
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;
    await ctx.render("home",{
        username: username,
        password: password
    })
})

app.use(views(__dirname + "/views",{
    map:{html:"nunjucks"}
}));

app.use(router.routes());

app.listen(3000, () => {
    console.log("server is running");
});