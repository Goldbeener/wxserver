const axios = require('axios')
const config = require('./config.js')

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
  })
  .catch(err => {
    console.log('error', err)
  })
}

getToken()


