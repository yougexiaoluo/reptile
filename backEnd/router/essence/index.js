const express = require('express')
const router = express.Router()
const https = require('https')

let BaseUrl = 'https://www.vue-js.com/'

router.get('/', (req, res) => {
  let query = req.url.split('?')[1]

  // 存在query的时候在拼接
  if (query) {
    BaseUrl = `BaseUrl/?${query}`
  }

})

module.exports = router
