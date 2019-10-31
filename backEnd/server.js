const express = require('express')
const app = express()
const path = require('path')
const essence = require('./router/essence')

// 路由
app.use('/vue-js', essence)

// 静态资源路径
app.use('/static',express.static(path.join(__dirname, 'public')))

// 监听端口
app.listen(9000, () => console.log('listening on port 9000!'))