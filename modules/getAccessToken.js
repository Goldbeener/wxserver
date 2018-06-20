const axios = require('axios')
const config = require('../config.js')

const url = 'https://api.weixin.qq.com/cgi-bin/token'

module.exports = () => {
  return axios.get(url, {
    params: {
      grant_type: 'client_credential',
      appid: config.appid,
      secret: appsecret
    }
  })
}

