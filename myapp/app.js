var express = require('express')
var app = express()
var puerto=5050;

app.get('/', function (req, res) {
  res.send('Hello World! con java script')
})

app.post('/', function (req, res) {
  res.send('POSTTT HEREEEEEE!!!!!!!!!!')
})

app.listen(puerto, function () {
  console.log('Example app listening on port '+puerto+'!')
})