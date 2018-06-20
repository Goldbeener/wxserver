const axios = require('axios')
const url = 'https://api.weixin.qq.com/cgi-bin/menu/create'

module.exports = (token) => {
  axios.post(url, {
    params: {
      access_token: token
    }
  })
}