# NPM "Node Package Manager"

### Materia : `Tecnologías Web con JavaScript`
### Tema : `Javascript` 
### Fecha : `2016-11-23`
### Estudiante : `Fabrizio Eloy Ramirez Cutimbo`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `7`

<a name="cabecera"></a>

## Índice de contenidos

- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
    *  <a href="#nodejs">NODEJS</a>
    *  <a href="#npm">NPM</a>    
- <a href="#desarrollo">Desarrollo de la Práctica</a>  
    *  <a href="#crearapp">Creación de una aplicación</a>
    *  <a href="#crearpack">Creacion de un Paquete</a>
    *  <a href="#publicar">Publicación de un Paquete</a>
    *  <a href="#instalar">Instalación de un Paquete</a>
    *  <a href="#generar">Generar nueva versión de un Paquete</a>
    *  <a href="#desinstalar">Desinstalación de un Paquete</a>    
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>

## Tema

El tema de la práctica es: `NPM`.

<a href="#cabecera">A la cabecera</a>
<a name="objetivos"></a>
## Objetivos

- Instalar y utilizar Node JS
- Crear y publicar paquetes NPM
- Versionar parquetes NPM
- Instalar y desintalar Paquetes NPM

<a href="#cabecera">A la cabecera</a>
<a name="marco-teorico"></a>

## Marco Teorico

<a name="nodejs"></a>
### NODEJS

"As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection the callback is fired, but if there is no work to be done Node is sleeping."

Referencia [NodeJS](https://nodejs.org/en/about/)

<p align="center">
<img src="http://www.miraclegroup.com/wp-content/uploads/2016/08/node-js-development-Brillmindz.jpg" width="450" height="250">
</p>

<a href="#cabecera">A la cabecera</a>
<a name="npm"></a>
### NPM


Npm facilita que los desarrolladores de Javascript compartan el código que han creado para resolver problemas particulares y que otros desarrolladores vuelvan a usar ese código en sus propias aplicaciones. Una vez que dependas de este código de otros desarrolladores, npm hace que sea muy fácil comprobar si han realizado actualizaciones y descargar esas actualizaciones cuando se realizan.

Un paquete es un directorio con uno o más archivos en él, que también tiene un archivo llamado "package.json" con algunos metadatos sobre este paquete. Una aplicación típica, como un sitio web, dependerá de decenas o cientos de paquetes. Estos paquetes son a menudo pequeños. La idea general es que se crea un pequeño bloque de construcción que resuelve un problema y lo resuelve bien. Esto hace posible que usted componga soluciones más grandes y personalizadas de estos bloques de construcción pequeños y compartidos.

Referencias [NPM](https://docs.npmjs.com/getting-started/what-is-npm)

<p align="center">
<img src="http://i0.wp.com/qnimate.com/wp-content/uploads/2014/11/npm.jpg?fit=1030%2C9999" width="400" height="250">
</p>


<a href="#cabecera">A la cabecera</a>
<a name="desarrollo"></a>

## Desarrollo del informe

<a name="crearapp"></a>
### Creación de la aplicación
* Se crea una nueva carpeta titulada "NodeJS" aqui abrimos una consola e iniciaremos nodeJs (Node es un compiladore de Javascript) con el siguiente comando: 

>node
<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/07-nodeJS/Informe/Graficos/prompt%20node.png?raw=true">
</p>

* Se crea el archivo app.js en la carpeta node: se escriben unas lineas de codigo y finalmente se compila en la consola con el comando:

>node app.js

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/07-nodeJS/Informe/Graficos/app.js%20v1.png?raw=true">
</p>

<a name="crearpack"></a>
### Creación de un paquete

* Primero debemos crear una cuenta en npm, para ello ingresamos a la pagina web de [NPM](https://www.npmjs.com/signup).

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/07-nodeJS/Informe/Graficos/Registro%20npm.png?raw=true">
</p>

* Ahora vamos a crear un nuevo paquete para ello utilizaremos el siguiente comando en el prompt que se inicio antes:

>Npm -init

* Aqui se solicitaran varios campos de informacion para crear un archivo JASON(.json) cuando se finaliza este registro se creara el archivo con el siguiente contenido:

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/07-nodeJS/Informe/Graficos/package%20json%201.png?raw=true">
</p>

<a name="publicar"></a>
### Publicación de un Paquete

* Para realizar este proceso se empleó la guia "Introdución Tema 12 publishing NPM packages" que nos ofrece NPM en su pagina web, la cual es accesible desde el siguiente link: [https://docs.npmjs.com/getting-started/publishing-npm-packages](https://docs.npmjs.com/getting-started/publishing-npm-packages)

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/07-nodeJS/Informe/Graficos/Guia%20Tema%2012.png?raw=true">
</p>

* Debemos logearnos con el comando:
> npm login
  
* Luego debemos publicar nuestro paquete con el siguiente comando: 
 > npm publish
 
* A continuación se muestra el paquete publicado en la pagina web:

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/07-nodeJS/Informe/Graficos/Paquete%20publicado%20en%20NPM.png?raw=true">
</p>

<a name="instalar"></a>
### Instalación del Paquete

* Se crear una nueva carpeta titulada nodejs2, con la consola nos dirigimos a esta carpeta y dentro de ella instalamos el paquete que creamos anteriormente, con el comando:
 > npm i tecnologiaswebrfabrizio
 
* Ahora inspecionamos la carpeta "NodeJS2":

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/07-nodeJS/Informe/Graficos/CarpetaNodeJS2.png?raw=true">
</p>

<a name="generar"></a>
### Generar nueva versión del paquete

* Realizamos modificaciones en el archivo app.js de la carpeta "nodejs", aqui cambiaremos el programa, luego publicamos la nueva version, es necesario cambiar la version en el archivo Package.json:

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/07-nodeJS/Informe/Graficos/app%20version%202.png?raw=true">
</p> 
 
* En la carpeta NodeJS2 volvemos a instalar el paquete con al nueva versión:
> npm i tecnologiaswebrfabrizio

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/07-nodeJS/Informe/Graficos/instalar.png?raw=true">
</p> 

* Creamos un archivo app.js dentro de la carpeta NODEJS2 con  el siguiente contenido:

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/07-nodeJS/Informe/Graficos/Aplicacion%20Principal.png?raw=true">
</p> 

* Ejecutamos el programa con el comando:
> node app.js

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/07-nodeJS/Informe/Graficos/Ejecucion%20Programa.png?raw=true">
</p> 

<a name="desinstalar"></a>
### Desinstalar un paquete
 
* Para desinstalar un paquete usamos el comado:
> npm uninstall tecnologiaswebrfabrizio

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/07-nodeJS/Informe/Graficos/Desinstalar.png?raw=true">
</p> 
 
* Ahora lo volvemos a instalar pero de forma global con el comando (-g = global):
> npm i -g tecnologiaswebrfabrizio
 
* Cuando se instalan los paquetes de forma global, generalmente se guardan en la siguiente dirección de la PC C:\Users\USRGAM\AppData\Roaming\npm\node_modules\tecnologiaswebrfabrizio.
 
* Finalmente volvemos a ejecutar la aplicacion pero con el paquete instalado de forma global: 
 
<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/07-nodeJS/Informe/Graficos/Ejecucion%20Programa.png?raw=true">
</p> 




<a href="#cabecera">A la cabecera</a>
<a name="conclusiones"></a>
## Conclusiones y Recomendaciones

- NodeJS es un compilador de javascript
- NPM es un gestor de paquetes que viene instalado por defecto con NodeJS
- Es necesario crear un cuenta en NPM para poder publicar paquetes.
- A veces la instalación de paquetes de forma global causa conflictos, como en este caso particular.
- Hay que tener en cuenta que si no se emplea el modificador -g el paquete se instalará de forma local.


<a href="#cabecera">A la cabecera</a>
