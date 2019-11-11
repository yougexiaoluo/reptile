const fs = require('fs')
const cheerio = require('cheerio')

// 将数据写入到指定文件
let writeFile = async (body) => {
  fs.writeFile('../data/tab.json', '{"data": "写入数据"}', 'utf8', (err) => {
    if (err) throw err
    console.log('writerFile success!')
  })
}

// 将数据追加到后面的 fs.appendFile()
writeFile()

module.exports.writeFile = writeFile