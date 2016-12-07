var express = require('express');
var fs = require('fs'); //libreria propia de Node.js


var app = express();
var puerto = 5050;
var contador = 3;

//function(path, codificacion, function){
//
//}

fs.readfile('./paginas/pagina.html', 'utf8', (function (error, archivoleido))) {

console.log(error);
console.log(archivoleido);
};

//Abosulte Path
///paginas/pagina.html
//> C://paginas/pagina.html
//
//Relativo XPathResult
//./paginas/pagina.html
//> path/paginas/pagina.html


fs.readfile('./paginas/pagina.html', 'utf8', (err, data)) => {
    if (err) throw err;
    console.log(data);
}