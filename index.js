const koa = require("koa");
const router = require("koa-router")();
const bodyParser = require("koa-bodyparser");
const xmlParser = require("koa-xml-body");

const vertufy = require("./modules/vertifyServer.js");

const app = new koa();

router.all("/wx", async (ctx, next) => {
  if (ctx.request.method == "GET") {
    vertufy(ctx, next);
  } else if (ctx.request.method == "POST") {
    // let xmlData = ctx.request.body.xml;
    // console.log("获取到的数据------>", JSON.stringify(xmlData, null, 2));


    // let me = xmlData.ToUserName[0];
    // let fromUser = xmlData.FromUserName[0];
    // let CreateTime = xmlData.CreateTime[0];
    // let MsgType = xmlData.MsgType[0];
    // let Content = xmlData.Content[0];
    // let MsgId = xmlData.MsgId[0] - 1;

    // let sendTime = new Date().getTime()
    // let response = '你说的是' + Content + '吗?'
    // let xml = `
    //   <xml>  
    //     <ToUserName>< ![CDATA[${fromUser}]]></ToUserName>  
    //     <FromUserName>< ![CDATA[${me}]]></FromUserName>  
    //     <CreateTime>${sendTime}</CreateTime>  
    //     <MsgType>< ![CDATA[text]]></MsgType>  
    //     <Content>< ![CDATA[${response}]]></Content>  
    //     <MsgId>${MsgId}</MsgId>
    //   </xml>
    //   `
    // ctx.response.type = 'application/xml'
    // ctx.body = xml;
  }
});

app.use(xmlParser()).use(router.routes());

app.listen(80);
console.log("server is listening 80");

// {
//   xml:{
//     ToUserName: [ 'gh_cb030bbcf306' ],
//     FromUserName: [ 'oYUKQ0RPQrlEgFRkEDWXbz7fepXs' ],
//     CreateTime: [ '1529412043' ],
//     MsgType: [ 'text' ],
//     Content: [ '后' ],
//     MsgId: [ '6568774707266261985' ]
//   }
// }
