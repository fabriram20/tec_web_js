# SAILS.JS

### Materia : `Tecnologías Web con JavaScript`
### Tema : `SAILS.JS` 
### Fecha : `2016-12-20`
### Estudiante : `Fabrizio Eloy Ramirez Cutimbo`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `10`

<a name="cabecera"></a>
## Índice de contenidos

- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#Sails">SAILS</a>
  * <a href="#Asse">Assets</a> 
  * <a href="#View">Views</a> 
  * <a href="#Pipe">Pipeline</a> 
  * <a href="#Cont">Controllers</a> 
- <a href="#desarrollo">Desarrollo de la Práctica</a>
  * <a href="#Assets">Assets</a>
  * <a href="#Pipeline">Pipeline</a> 
  * <a href="#Views">Views</a>
  * <a href="#Controllers">Controllers</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema

El tema de la práctica es: `Sails.js Assets-Pipeline-Views-Controller`
<a href="#cabecera">A la cabecera</a>
<a name="objetivos"></a>

## Objetivos

- Conocer como funciona el framework Sails.js
- Aprender a utilizar los principales comandos de Sails.js.
- Levantar un servidor http con Sails.
- Crear una API REST
- Estudiar la arquitectura Modelo-Vista-Controlador.

<a href="#cabecera">A la cabecera</a>

<a name="marco-teorico"></a>
## Marco Teorico

<a name="Sails"></a>
### Sails

Sails es un framework web. Pero da un paso atrás. Es decir a veces, cuando nos referimos a la "web", nos referimos a la "web front-end". Pensamos en conceptos como estándares web, o HTML 5, o CSS 3; Y frameworks como Backbone, o Angular, o jQuery.

Sils no es "ese tipo" de Framework web. Sails funciona muy bien con Angular y Backbone, pero nunca usarías Sails en lugar de esas bibliotecas.

Por otro lado, a veces cuando hablamos de "frameworks web", nos referimos a la "web de back-end". Esto evoca conceptos como REST, o HTTP, o WebSockets; Y tecnologías como Java, o Ruby, o Node.js. Un "back-end web" marco le ayuda a hacer cosas como construir API, servir archivos HTML, y manejar cientos de miles de usuarios simultáneos. Sails es "ese tipo" de framework web.

Fuente[Sailsjs.com](http://sailsjs.com/whats-that)

<p align="center">
<img src="http://sailsjs.com/images/hero_squid.png">
</p>

<a href="#cabecera">A la cabecera</a>

<br>

<a name=""></a>

<a href="#cabecera">A la cabecera</a>

<br>

<a name="asse"></a>
### Assets

Los activos se refieren a archivos estáticos (js, css, imágenes, etc) en el servidor que desea mostrar al mundo exterior. En Sails, estos archivos se colocan en la carpeta Assets/. Cuando levante su aplicación, se puede agregar archivos a la carpeta assets/, o cambiar los assets existentes. Sails procesos y sincroniza esos archivos en una carpeta oculta (.tmp / public /).

Fuente[Sailsjs.com](http://sailsjs.com/documentation/concepts/assets)

<a href="#cabecera">A la cabecera</a>

<br>

<a name="view"></a>
### Views

En Sails, las vistas son plantillas markup que se compilan en el servidor en páginas HTML. En la mayoría de los casos, las vistas se utilizan como respuesta a una solicitud HTTP entrante, por ejemplo para servir la página de inicio.

Alternativamente, una vista puede ser compilada directamente en una cadena HTML para usarla en el código del backend. Por ejemplo, puede usar este enfoque para enviar correos electrónicos HTML o para construir grandes cadenas XML para usar con un API heredada.

Fuente[Sailsjs.com](http://sailsjs.com/documentation/concepts/views)


<a href="#cabecera">A la cabecera</a>

<br>

<a name="pipe"></a>
### Pipeline

El archivo pipeline.js en la aplicación Sails determina el orden en que sus hojas de estilo(css), JavaScript y los archivos de plantilla del lado del cliente deben ser compilados y enlazados como etiquetas `script` o `link`.

Fuente[Sailsjs.com](http://sailsjs.com/documentation/concepts/views)

<a href="#cabecera">A la cabecera</a>
<br>

<a name="cont"></a>
### Controllers

Este es el directorio que contiene sus controladores. En Sails, los controladores son archivos javascript que contienen lógica para interactuar con los modelos y renderizar vistas apropiadas para el cliente.

Cuando se llama a sails se genera un API a través de la línea de comandos desde dentro del directorio raíz de su proyecto, Sails generará el archivo api / controllers / CatsController.js junto con un modelo de emparejamiento.

Fuente[Sailsjs.com](http://sailsjs.com/documentation/concepts/views)

<a href="#cabecera">A la cabecera</a>
<br>

<a name="desarrollo"></a>
## Desarrollo de la Práctica

* Instalar Sails.j utilizando el gestor de paquetes mpn para ello ejecutamos el siguiente comando:

> npm install -g sails

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/10-Sails/Informe/Graficos/Instalar%20sails.png?raw=true">
</p>

* Se debe abrir una consola de comando en la carpeta donde crearemos un nuevo proyecto con sails, para ellos emplearemos el comando (el titulo del proyecto sera "Proyecto"):

> sails new NombreProyecto

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/10-Sails/Informe/Graficos/Crear%20proyecto%20sails.png?raw=true">
</p>

* Cuando sails crea el proyecto generara automaticamente los siguientes archivos, los cuales nos permitiran configurar el servidor web:

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/10-Sails/Informe/Graficos/Carpeta%20Proyecto.png?raw=true">
</p>

* Para levantar el servidor web debemos ubicarnos en la carpeta donde se creó el proyecto y ejecutaremos el siguiente comando:

> sails lift

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/10-Sails/Informe/Graficos/lift.png?raw=true">
</p>

* Como se pudo observar en la imagen anterior sails levante el servidor web automaticamente en el puerto 1337 por ello para acceder a la pagina web lo haremos a traves de un navegador ingresando la URL http://localhost:1337 :

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/10-Sails/Informe/Graficos/pagina%20principal.png?raw=true">
</p>

<a name="Assets"></a>
### Assets

* Dentro de la carpeta Proyecto/assets creamos una nueva otra carpeta titulada App, ademas crearemos los siguientes archivos dentro de esta misma:
- index.html
- estilos.css
- app.js

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/10-Sails/Informe/Graficos/carpeta%20App.png?raw=true">
</p>

* Los archivos que se crearon anteriormente contendran la siguiente informacion:

- index.html

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/10-Sails/Informe/Graficos/index.png?raw=true">
</p>

- estilos.css

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/10-Sails/Informe/Graficos/estilos.png?raw=true">
</p>

- app.js

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/10-Sails/Informe/Graficos/app.png?raw=true">
</p>

* Comprobaremos el correcto funcionamiento de los archivos que acabamos de crear para ello accedemos al siguiente enlace `http://localhost:1337/App/index.html`, donde observaremos el texto "Hola Mundo", el color de fondo, y el mensaje de alerta.

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/10-Sails/Informe/Graficos/APP%20Index.png?raw=true">
</p>

* Tambien podemos crear otra carpeta dentro de App y guardar archivos para usarlos en nuestra página web. En este caso crearemos la carpeta `Fotos` donde guardaremos una imagen, a continuacion accederemos a ella usando el siguiente enlace http://localhost:1337/App/fotos/sol.jpg:

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/10-Sails/Informe/Graficos/carpeta%20fotos.png?raw=true">
</p>

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/10-Sails/Informe/Graficos/Luffy%20en%20el%20navegador.png?raw=true">
</p>

<a name="Pipeline"></a>
### Pipeline

* Ahora vamos a modficiar el archivo `pipeline.js` el cual se encuentra dentro de la carpeta `Tasks` este archivo entre sus muchas funciones determina que archivos css se utilizarán en el proyecto:

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/10-Sails/Informe/Graficos/pipeline%20sin%20modificar.png?raw=true">
</p>

Como se observa en la imagen el proyecto utilizar todos los archivs .css que se encuetran dentro de la carpeta assets/styles, por ellos modificaremos la ruta empleando el archivo "estilos.css" que creamos anteriormente:

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/10-Sails/Informe/Graficos/pipeline%20modificado.png?raw=true">
</p>

El resultando sera el siguiente al solicitar la pagina principal:

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/10-Sails/Informe/Graficos/pagina%20principal%20modificada.png?raw=true">
</p>

<a name="Views"></a>
### Views
* La carpeta Vistas(`views`) se encuentra dentro del Proyecto, aqui prodremos modificar las diferentes pantallas que se mostraran al cliente, esta carpeta contiene los siguientes archivos:

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/10-Sails/Informe/Graficos/carpeta%20Views.png?raw=true">
</p>

- El archivo homepage.ejs es la página de inicio de nuestro proyecto. Procederemos a modificar a modo de ejemplo:

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/10-Sails/Informe/Graficos/nueva%20pagina%20de%20inicio.png?raw=true">
</p>

- Los archivos 403, 404 y 500 hacen referencia a las pantallas de error que mostrara el navegador en caso se sucitara alguno:

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/10-Sails/Informe/Graficos/error%20404.png?raw=true">
</p>

* Ahora crearemos 3 nuevas vistas: Quito, Guayaquil y Cuenca, para ello simplemente debemos crear 3 archivos dentro de la carpeta `Views` y colocar un pequeño mensaje:

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/10-Sails/Informe/Graficos/3%20vistas%20nuevas.png?raw=true">
</p>

* Para poder acceder a nuestras nuevas vistas primero debemos configurar el archivo
 `config/routes.js` el cual contiene las rutas para acceder a nuestras vistas, por defecto se enceuntra de la siguiente manera:

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/10-Sails/Informe/Graficos/routes%20sin%20modificar.png?raw=true">
</p>

 Ahora debemos modificarlo para que luzca de la siguiente manera:

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/10-Sails/Informe/Graficos/routes%20modificado.png?raw=true">
</p>

 Es importante reiniciar nuestro servidor web para que hagan efecto los cambios:
 Con esta nueva configuracion podremos acceder a nuestras vistas utilizando los siguientes URL:
 - http://localhost:1337/Quito

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/10-Sails/Informe/Graficos/vista%20quito.png?raw=true">
</p>

 - http://localhost:1337/Guayaquil

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/10-Sails/Informe/Graficos/vista%20guayaquil.png?raw=true">
</p> 

- http://localhost:1337/Cuenca

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/10-Sails/Informe/Graficos/vista%20cuenca.png?raw=true">
</p>

* Tambien cambiaremos el archivo layout.ejs el cual esta encargado de construir la pagina de inicio:

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/10-Sails/Informe/Graficos/layout.png?raw=true">
</p>

El resultado es el siguiente:

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/10-Sails/Informe/Graficos/pagina%20principal%20modificada%20layout.png?raw=true">
</p>

<a name="Controllers"></a>
### Controllers
 
* Para a crear un controlador utilizamos el siguiente comando:

> sails generate controller Nombre

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/10-Sails/Informe/Graficos/crear%20controller.png?raw=true">
</p>

* Cuando se crea un controlador automaticamente se genera el archivo archivo SaludarController.js dentro de la carpeta /api/controllers:

* Modificaremos el archivo SaludarController.js e introduciremos el siguiente código:

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/10-Sails/Informe/Graficos/codigo%20controller.png?raw=true">
</p>

* Finalmente probaremos que todas las funciones implementadas funcionan:

- Metodo GET (http://localhost:1337/Saludar/hola)

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/10-Sails/Informe/Graficos/GET.png?raw=true">
</p>

- Metodo Hora (http://localhost:1337/Saludar/hora)

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/10-Sails/Informe/Graficos/hora.png?raw=true">
</p>

- Metodo POST (http://localhost:1337/Saludar/hola)

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/10-Sails/Informe/Graficos/POST.png?raw=true">
</p>

<a href="#cabecera">A la cabecera</a>

<a name="conrec"></a>
## Conclusiones y Recomendaciones

- Sailsjs es un servidor web que se conecta a bases de datos y puede funcionar con aplicaciones en tiempo real, ayudandonos a crear REST APIs.
- Cuando se crea un proyecto con sails se genera un arbol de archivos para administrar correctamente nuestra API REST
- Sails emplea la arquitectura modelo-vista-controlador
- Cuando se realizan algunos cambios en el servidor es necesario detener y levanar el servicio web.
- Sails es un framework disponible en npm.
- Aprendimos a modificar ciertos archivos para cambiar la presentacion y funcionamiento de las paginas web.


<a href="#cabecera">A la cabecera</a>
