const crypto = require('crypto')

function sha1(str) {
  let md5sum = crypto.createHash('sha1')
  md5sum.update(str)
  str = md5sum.digest('hex')
  return str
}

module.exports = (ctx, next) => {
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
}