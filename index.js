const koa = require('koa')
const router = require('koa-router')()
const crypto = require('crypto')

function sha1(str) {
  let md5sum = crypto.createHash('sha1')
  md5sum.update(str)
  str = md5sum.disgest('hex')
  return str
}

const app = new koa()

router.get('/wx', async (ctx, next) => {
  // ctx.url = '/wx?signature=47db7526a702df8d5158190139d803fba98c69e8&echostr=14081195149111064895&timestamp=1529047097&nonce=2846552087'
  console.log('ctx query---->', ctx.query)
  let param = ctx.query
  let {signature, timestamp, nonce, echostr } = param
  let token = 'liduheart'

  let list = [token, timestamp, nonce]
  list.sort()

  const origin = list.join('')

  console.log('Origin str----->', origin)
  console.log('Signature str----->', signature)

  var scyptoString = sha1(origin)

  if(scyptoString == signature){
    ctx.response.body = echostr
  }else{
    ctx.response.body = 'valid false'
  }
})

router.get('/', async (ctx, next) => {
  ctx.response.body = '<h1>wx server</h1>'
})

app.use(router.routes())

app.listen(80)
console.log('server is listening 80')
