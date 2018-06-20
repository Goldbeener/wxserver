const axios = require('axios')
const config = require('./config.js')
const fs = require('fs')

const url = 'https://api.weixin.qq.com/cgi-bin/token'

function getToken () {
  axios.get(url, {
    params: {
      grant_type: 'client_credential',
      appid: config.appid,
      secret: config.appsecret
    }
  })
  .then(res => {
    console.log('success', res.data)
    fs.writeFile('./token.json', JSON.stringify(res.data), function (err) {
      if (err) {
        console.log('token写入文件失败')
        return 
      }
    })
  })
  .catch(err => {
    console.log('error', err)
  })
}

getToken()


