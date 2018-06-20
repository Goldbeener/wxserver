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
    let xmlData = ctx.request.body.xml;
    console.log("获取到的数据------>", JSON.stringify(xmlData, null, 2));
    let MsgType = xmlData.MsgType[0];

    if (MsgType == 'text') replyText(xmlData)
    if (MsgType == 'image') replyImg(xmlData)
  }
});

app.use(xmlParser()).use(router.routes());

app.listen(80);
console.log("server is listening 80");

