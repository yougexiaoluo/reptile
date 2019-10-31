const express = require('express')
const router = express.Router()
const request = require('request')

let BaseUrl = 'https://www.vue-js.com'

router.get('/', (req, res) => {
  let tab = req.query && req.query.tab
  let queryNames = ['good', 'weex', 'share', 'ask', 'job']

  if (queryNames.indexOf(tab) == -1) {
    return res.send({ code: 404, msg: '页面不存在', success: false })
  }

  // 存在query的时候在拼接
  if (tab) {
    BaseUrl = `${BaseUrl}/?tab=${tab}`
  }

  request.get(BaseUrl, function (error, response, body) {
    if (response.statusCode == 200) {
      console.log('body:', body); // Print the HTML for the Google homepage.
      res.send({ code: 1, msg: '请求成功', success: true })
    }
  })


})

module.exports = router
