var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World! con java script')
})

app.listen(666, function () {
  console.log('Example app listening on port 3000!')
})