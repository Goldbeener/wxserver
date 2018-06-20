const axios = require('axios')
const url = 'https://api.weixin.qq.com/cgi-bin/menu/create'
const menu = require('../config').menu

  axios({
    url,
    method: 'POST',
    params: {
      access_token: token,
    },
    data: menu
  })
  .then(res => {
    console.log('success', res)
  })
  .catch(err => {
    console.log('error', err)
  })