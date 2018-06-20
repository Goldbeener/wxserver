const axios = require('axios')
const url = 'https://api.weixin.qq.com/cgi-bin/menu/create'
const token = require('../token.json').access_token
const menu = require('../config').menu

function createMenu () {
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
}

createMenu()