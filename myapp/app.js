var express = require('express')
var app = express()
var puerto=5050;

app.get('/tec_web_js', function (req, res) {
  res.send('Hello World! con java script')
})

app.post('/tec_web_js', function (req, res) {
    
    //req => request
    
    //res => response
    console.log('Lo que tengo en el request ');    
    console.log(req.headers);
    console.log('Lo que tengo en el response ');
    console.log(res.headers);
    
  res.send('POSTTT HEREEEEEE!!!!!!!!!!')
})

app.put('/tec_web_js', function (req, res) {
  res.send('PuuuuuTTT HEREEEEEE!!!!!!!!!!')
})

app.listen(puerto, function () {
  console.log('Example app listening on port '+puerto+'!')
})