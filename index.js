const koa = require('koa')
const router = require('koa-router')()
const crypto = require('crypto')

function sha1(str) {
  let md5sum = crypto.createHash('sha1')
  md5sum.update(str)
  str = md5sum.digest('hex')
  return str
}

const app = new koa()

router.get('/wx', async (ctx, next) => {
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

app.use(async (ctx, next) => {
  console.log('获取到的数据------>', 123)
  next()
})

app.use(router.routes())

app.listen(80)
console.log('server is listening 80')