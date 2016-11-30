# SEGUNDA PARTE CLASE NODE JS

# fecha 30/11/2016


En esta clase instalaremos un servidor http dinamico con express para esto nos dirigimos al siguietne enlace y seguimos los pasos:

[http://expressjs.com/en/starter/installing.html](http://expressjs.com/en/starter/installing.html)

Seguimos este tutorial

se instala npm con 

> $ npm install express --save

> $ npm install express




* luego de terminar el tutorial instalacion y hola mundo 

* agregamos respuestas para el metodo post y put

* Verificamos que los metodos funcionan para ello utilizamos postman para enviar peticiones tanto post como put, se despliega lo que se programo


* luego agregamos codigo en el metodo post para poder visualizar por consola la informacion de las cabeceras

* intentamos poner una segunda respuesta, el navegador nos dice q es imposible, nos da un error probar:


* ahora cambios las respuesta que enviamos, usaremos json para esto

sen.json(usuario)


* Como se observo antes las cabeceras esta indefinidas


* ahora vamos agergar una nueva propiedad ala cabecera del metodo post y revisamos que funciono con postman
res.append('toke','1234')


*ahora enviamos parametros

enviar esto para recibir parametros usando postman o por la misma pagina web
http://localhost:5050/Usuario/2

tambien podemos consultar todos los usarios con el url
http://localhost:5050/Usuario







