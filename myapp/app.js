var express = require('express');
var app = express();
var puerto = 5050;

//estos son nuestros usuario que se  utilizaran para la entraga de parametros
var usuarios = [
    {
        id: 1,
        nombre: 'Pepelucho',
        cedula: '123409182'
    },
    {
        id: 2,
        nombre: 'Pancho',
        cedula: '981237918'
    },
    {
        id: 3,
        nombre: 'Chio',
        cedula: '011283934'
    }
]


var usuario = {
    "nombre": 'fabri',
    "cedula": '0000000000'
}

//esta es una forma de agregar mas valores a un objeto 
//usuario={
//    nombre: usuario.nombre,
//    cedula: usuario.cedula,
//    apellido: 'holo'    
//}


//otra forma de agregar mas valores en un objeto

usuario.apellido = '';
usuario.mascotas = [];
usuario.casado = false;
//
////Get normal
//app.get('/tec_web_js', function (req, res) {
//  res.send('Hello World! con java script');
//})

//Get para responder todos los usuarios
app.get('/Usuario', function (req, res) {

    res.json(usuarios);

})

//Get para responder un usuario con parametros, los : significa que se va a ingresar un parametro
app.get('/Usuario/:idUsuario', function (req, res) {

    var idActual = req.params.idUsuario;
    for (var i = 0; i < usuarios.length; i++) {
        if (idActual == usuarios[i].id) {

            //si lo encuentra
            res.json(usuarios[i]);
        }
    }

    //si no lo encuentra
    res.send('No existe el Usuario');

})

//app.post('/tec_web_js', function (req, res) {
//    
//        
//    //req => request
//    
//    //res => response
////    console.log('Lo que tengo en el request ');
////    //agregamos una nueva propiedad ala cabecera
////    //req.headers.token = 1234; //no funciona
////        
////    console.log(req.headers);
////    console.log('Lo que tengo en el response ');
////    
//    res.append('toke', '1234');
//    console.log(res.headers);
//    
//  //res.send('POSTTT HEREEEEEE!!!!!!!!!!')
//  // segunda respuesta: esta causa un error pues no es valido enviar
//  //res.send('POSTTT HEREEEEEE!!!!!!!!!!')
//    
//    //ahora enviaremos de respuesta objetos .json
//    res.json(usuario);
//  
//})



app.post('/Usuario', function (req, res) {


    console.log(req.query.nombre);
    console.log(req.query.cedula);

    if (!req.query.nombre){
        res.send('No envio el nombre');
    }
    if (!req.query.cedula){
        res.send('No envio la cedula')
        
    }

    //Deprecated    

    res.json(usuario);


})


app.put('/tec_web_js', function (req, res) {

    res.send('PuuuuuTTT HEREEEEEE!!!!!!!!!!')

})

app.listen(puerto, function () {
    console.log('Example app listening on port ' + puerto + '!')
})