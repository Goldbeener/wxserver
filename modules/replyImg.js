module.exports = (ctx, xmlData) => {
  let me = xmlData.ToUserName[0];
  let fromUser = xmlData.FromUserName[0];
  let CreateTime = xmlData.CreateTime[0];
  let MsgId = xmlData.MsgId[0] - 1;
  let PicUrl = xmlData.PicUrl[0];
  let MediaId = xmlData.MediaId[0];

  let sendTime = new Date().getTime()
  let xml = `
    <xml>  
      <ToUserName><![CDATA[${fromUser}]]></ToUserName>  
      <FromUserName><![CDATA[${me}]]></FromUserName>  
      <CreateTime>${sendTime}</CreateTime>  
      <MsgType><![CDATA[image]]></MsgType>
      <MsgId>${MsgId}</MsgId>
      <PicUrl><![CDATA[${PicUrl}]]></PicUrl>
      <MediaId><![CDATA[${MediaId}]]></MediaId>
    </xml>
    `

    
  ctx.body = xml
}