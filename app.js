// app.js
const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
  let reqTime = new Date()
  let reqTimeStr = `${reqTime.getFullYear()}-${
    reqTime.getMonth() + 1
    }-${reqTime.getDate()} ${reqTime.getHours()}:${reqTime.getMinutes()}:${reqTime.getSeconds()}`

  res.on('finish', function () {
    console.log(
      `${reqTimeStr} | ${req.method} from ${req.url} | total time: ${
      new Date().getTime() - reqTime.getTime()
      } ms`
    )
  })

  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
