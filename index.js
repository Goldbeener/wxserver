const koa = require('koa')
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
const xmlParser = require('koa-xml-body')

const vertufy = require('./modules/vertifyServer.js')

const app = new koa()

router.all('/wx', async (ctx, next) => {
  if(ctx.request.method == 'GET'){
    vertufy()
  }else{
    console.log('获取到的数据------>', ctx.request.body)
  }
})

app.use(bodyParser())
  .use(xmlParser())
  .use(router.routes())

app.listen(80)
console.log('server is listening 80')
