const jieba = require('nodejieba')
const topN = 1

module.exports = (ctx, xmlData) => {
  
  let me = xmlData.ToUserName[0];
  let fromUser = xmlData.FromUserName[0];
  let CreateTime = xmlData.CreateTime[0];
  let Content = xmlData.Content[0];
  let MsgId = xmlData.MsgId[0] - 1;

  let sendTime = new Date().getTime()
  let response = '你说的是' + Content + '吗?'

  const ask = jieba.extract(Content, topN)
  console.log('接收到的---->', ask)

  let xml = `
    <xml>  
      <ToUserName><![CDATA[${fromUser}]]></ToUserName>  
      <FromUserName><![CDATA[${me}]]></FromUserName>  
      <CreateTime>${sendTime}</CreateTime>  
      <MsgType><![CDATA[text]]></MsgType>  
      <Content><![CDATA[${response}]]></Content>  
      <MsgId>${MsgId}</MsgId>
    </xml>
    `
  // ctx.body = xml
  ctx.body = 'success'
}