module.exports = (ctx, xmlData) => {
  let fromUser = xmlData.FromUserName[0];
  let me = xmlData.ToUserName[0];
  let sendTime = new Date().getTime()
  let PicUrl = xmlData.PicUrl[0];
  let MediaId = xmlData.MediaId[0];
  let MsgId = xmlData.MsgId[0];

  let xml = `
    <xml>  
      <ToUserName><![CDATA[${fromUser}]]></ToUserName>  
      <FromUserName><![CDATA[${me}]]></FromUserName>  
      <CreateTime>${sendTime}</CreateTime>  
      <MsgType><![CDATA[image]]></MsgType>
      <Image>
        <MediaId><![CDATA[${MediaId}]]></MediaId>
      </Image>
    </xml>
    `    
  ctx.body = xml
}