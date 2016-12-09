# NPM "Node Package Manager"

### Materia : `Tecnologías Web con JavaScript`
### Tema : `Javascript` 
### Fecha : `2016-11-23`
### Estudiante : `Fabrizio Eloy Ramirez Cutimbo`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : ``

<a name="cabecera"></a>

## Índice de contenidos

- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
    *  <a href="#nodejs">NODEJS</a>
    *  <a href="#npm">NPM</a>    
- <a href="#desarrollo">Desarrollo de la Práctica</a>    
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>

## Tema

El tema de la práctica es: `NPM`.

<a href="#cabecera">A la cabecera</a>
<a name="objetivos"></a>
## Objetivos

- Instalar y utilizar NPM
- Instalar y utilizar Node JS

<a href="#cabecera">A la cabecera</a>
<a name="marco-teorico"></a>

## Marco Teorico

<a name="nodejs"></a>
### NODEJS

<p align="center">
<img src="http://www.miraclegroup.com/wp-content/uploads/2016/08/node-js-development-Brillmindz.jpg" width="450" height="250">
</p>

<a href="#cabecera">A la cabecera</a>
<a name="npm"></a>
### NPM



<p align="center">
<img src="http://i0.wp.com/qnimate.com/wp-content/uploads/2014/11/npm.jpg?fit=1030%2C9999" width="400" height="250">
</p>


<a href="#cabecera">A la cabecera</a>
<a name="desarrollo"></a>

## Desarrollo del informe

* Se crea una nueva carpeta titulada "NodeJS" aqui abrimos una consola e iniciaremos nodeJs (Node es un compiladore de Javascript) con el siguiente comando: 

>node
<p align="center">
<img src="">
</p>

* Se crea el archivo app.js en la carpeta node: se escriben unas lineas de codigo y finalmente se compila en la consola con el comando:

>node app.js

<p align="center">
<img src="">
</p>

### Creación de un paquete

* Primero debemos crear una cuenta en npm, para ello ingresamos a la pagina web de [NPM](https://www.npmjs.com/signup).

<p align="center">
<img src="">
</p>

* Ahora vamos a crear un nuevo paquete para ello utilizaremos el siguiente comando en el prompt que se inicio antes:

>Npm -init

* Aqui se solicitaran varios campos de informacion para crear un archivo JASON(.json) cuando se finaliza este registro se creara el archivo con el siguiente contenido:

<p align="center">
<img src="">
</p>

### Publicación de una Paquete

* Para realizar este proceso se empleo la guia "Introdución Tema 12 publishing NPM packages" que nos ofrece NPM en su pagina web, la cual es accesible desde el siguiente link: [https://docs.npmjs.com/getting-started/publishing-npm-packages](https://docs.npmjs.com/getting-started/publishing-npm-packages)

<p align="center">
<img src="">
</p>

* Debemos logearnos con el comando:
> npm login
  
* Luego debemos publicar nuestro paquete con el siguiente comando: 
 > npm publish
 
* A continuación se muestra el paquete publicado en la pagina web:

<p align="center">
<img src="">
</p>
 
### Instalación del Paquete

* Se crear una nueva carpeta titulada nodejs2, con la consola nos dirigimos a esta carpeta y dentro de ella instalamos el paquete que creamos anteriormente, con el comando:
 > npm i tecnologiaswebrfabrizio
 
* Ahora inspecionamos la carpeta "NodeJS2":

<p align="center">
<img src="">
</p>

### Generar nueva versión del paquete

* Realizamos modificaciones en el archivo app.js de la carpeta "nodejs", aqui cambiaremos el programa, luego publicamos la nueva version, es necesario cambiar la version en el archivo Package.json:

<p align="center">
<img src="">
</p> 
 
* En la carpeta NodeJS2 volvemos a instalar el paquete con al nueva versión:
> npm i tecnologiaswebrfabrizio

### Desinstalar un paquete
 
* Para desinstalar un paquete usamos el comado:
> npm uninstall tecnologiaswebrfabrizio
 
* Ahora lo volvemos a instalar pero de forma global con el comando (-g = global):
> npm i -g tecnologiaswebrfabrizio
 
* Cuando se instalan los paquetes de forma global, generalmente se guardan en la siguiente dirección de la PC C:\Users\USRGAM\AppData\Roaming\npm\node_modules\tecnologiaswebrfabrizio.
 
* Finalmente volvemos a ejecutar la aplicacion pero con el paquete instalado de forma global: 
 
<p align="center">
<img src="">
</p>
 

######################
File system: paquete nativo de node.
Myysql Conectar base de datos: https://github.com/mysqljs/mysql#install
Xpress httpserver(peticiones y archivos estaticos): http://expressjs.com/
Correos electronico: https://nodemailer.com/


<a href="#cabecera">A la cabecera</a>
<a name="conclusiones"></a>
## Conclusiones y Recomendaciones

- NPM es un gestor de paquetes que viene instalado por defecto con NodeJS
- NodeJS es un compilador de javascript
- Es necesario crear un cuenta en NPM para poderpublicar paquetes.
- A veces la instalacion de paquetes de forma global causan conflicto, como en este caso particular.
- Hay que tener en cuenta que si no se emplea el modificador -g el paquete se instalará de forma local.


<a href="#cabecera">A la cabecera</a>
