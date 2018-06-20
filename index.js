const koa = require("koa");
const router = require("koa-router")();
const bodyParser = require("koa-bodyparser");
const xmlParser = require("koa-xml-body");

const vertify = require("./modules/vertifyServer.js");
const replyText = require('./modules/replyText.js')

const app = new koa();

router.all("/wx", async (ctx, next) => {
  if (ctx.request.method == "GET") {
    vertify(ctx, next);
  } else if (ctx.request.method == "POST") {
    replyText(ctx, next)
  }
});

app.use(xmlParser()).use(router.routes());

app.listen(80);
console.log("server is listening 80");

