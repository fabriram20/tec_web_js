# Introducción a la Web

### Materia : `Tecnologías Web con JavaScript`
### Tema : `Introducción a la Web` 
### Fecha : `2016-10-27`
### Estudiante : `Fabrizio Eloy Ramirez Cutimbo`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `1`

<a name="cabecera"></a>

## Índice de contenidos

- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#hist">Historia y Facts</a>
  * <a href="#defhtml">Definicion HTML</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>

## Tema
El tema de la práctica es: `Introduccion a la Web`

<a name="objetivos"></a>
## Objetivos

- Desarrollar el conocimiento Web
- Conocer herramientas de desarrolladores web como: postman, inspetor web
- Aprender el uso de lenguaje HTML CSS
- Levantar un servidor http
- Creacion de una pagina web con Html

<a name="marco-teorico"></a>
## Marco Teorico
<a name="defhtml"></a>


### Definición WWW 
El Consorcio WWW, en inglés: World Wide Web Consortium (W3C), es un consorcio internacional que genera recomendaciones y estándares que aseguran el crecimiento de la World Wide Web a largo plazo. Este consorcio fue creado en octubre de 1994, y está dirigido por Tim Berners-Lee, el creador original del URL (Uniform Resource Locator, Localizador Uniforme de Recursos), del HTTP (HyperText Transfer Protocol, Protocolo de Transferencia de HiperTexto) y del HTML (Hyper Text Markup Language, Lenguaje de Marcado de HiperTexto), que son las principales tecnologías sobre las que se basa la Web.(fuente: [Wikipedia](https://es.wikipedia.org/wiki/World_Wide_Web_Consortium)).
<p align="center">
<img src="http://www.dataversity.net/wp-content/uploads/sites/2/2013/12/w3c.jpg">
</p>

### W3Schools
Es un sitio web popular para el aprendizaje de las tecnologías web en línea. El contenido incluye tutoriales y referencias relacionadas con HTML, CSS, JavaScript, PHP, SQL, Bootstrap, y jQuery. Que recibe más de 10 millones de visitantes únicos mensuales. Creado en 1998, su nombre se deriva de la World Wide Web, pero no está afiliado con el W3C (World Wide Web Consortium). Está dirigido por Refsnes datos en Noruega. W3Schools presenta miles de ejemplos de código. Mediante el uso de un editor en línea, los lectores pueden editar ejemplos y ejecutar el código en una SandBox. (fuente: [Wikipedia](https://en.wikipedia.org/wiki/W3Schools)).

### Hypertext Transfer Protocol

Hypertext Transfer Protocol o HTTP (en español protocolo de transferencia de hipertexto) es el protocolo de comunicación que permite las transferencias de información en la World Wide Web. HTTP fue desarrollado por el World Wide Web Consortium y la Internet Engineering Task Force. Es un protocolo orientado a transacciones y sigue el esquema petición-respuesta entre un cliente y un servidor. El cliente (se le suele llamar "agente de usuario", en inglés user agent) realiza una petición enviando un mensaje, con cierto formato al servidor, El servidor (se le suele llamar un servidor web) le envía un mensaje de respuesta. Ejemplos de cliente son los navegadores web y los spider. (fuente: [Wikipedia](https://es.wikipedia.org/wiki/Hypertext_Transfer_Protocol)).

### Versiones

* 0.9 (lanzada en 1991)
* HTTP/1.0 (mayo de 1996)
* HTTP/1.1 (junio de 1999)
* HTTP/1.2 (febrero de 2000)
* HTTP/2 (mayo de 2015)

### Mensajes

Número | Tipo
--- | --- 
1xx | Informational
2xx | Success
3xx | Redirection
4xx | Client Error
5xx | Server Error

Fuente: [W3Schools](http://www.w3schools.com/tags/ref_httpmessages.asp)

#### Métodos

Method | Description
--- | --- 
GET | The GET method requests a representation of the specified resource.
POST | The POST method requests that the server accept the entity enclosed in the request. 
HEAD | Same as GET but returns only HTTP headers and no document body.
PUT | Uploads a representation of the specified URI.
DELETE | Deletes the specified resource.
OPTIONS	| Returns the HTTP methods that the server supports.
CONNECT | Converts the request connection to a transparent TCP/IP tunnel.

Fuente: [W3Schools](http://www.w3schools.com/tags/ref_httpmethods.asp)
<a href="#cabecera">A la cabecera</a>
<br><br>

### Definición HTML

* HTML significa Hyper Text Markup Language.
* HTML describe la estructura de las páginas Web usando Markup.
* Los elementos HTML son los bloques de construcción de páginas HTML.
* Los elementos HTML están representados por etiquetas.
* HTML Tags etiquetan piezas de contenido, tales como "heading", "paragraph", "table", y así sucesivamente. Los navegadores no muestran las etiquetas HTML, pero los utilizan para representar el contenido de la página.

<p align="center">
<img src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" width="250" height="190">
</p>

Fuente: [W3Schools](http://www.w3schools.com/html/html_intro.asp)
<a href="#cabecera">A la cabecera</a>
<br><br>
#### Estructura Básica
<p align="center">
<img src="https://fjph32html.files.wordpress.com/2015/03/estructurabasica.png">
</p>

#### HTML5

Es la quinta revisión importante del lenguaje básico de la World Wide Web, HTML. HTML5 especifica dos variantes de sintaxis para HTML: una «clásica», HTML (text/html), conocida como HTML5, y una variante XHTML conocida como sintaxis XHTML5 que deberá servirse con sintaxis XML.

### Definición CSS

* CSS significa Cascading Style Sheets.
* CSS se describe cómo son elementos HTML que se mostrará en la pantalla, papel, o en otros medios.
* CSS ahorra mucho trabajo. Se puede controlar el diseño de varias páginas web a la vez.
* Permite almacenar estilos externos en archivos CSS.

<p align="center">
<img src="http://desarrollolibre.net/public/download/empty/empty-con-otras-pseudo-class/css3.jpg">
</p>

Fuente: [W3Schools](http://www.w3schools.com/css/css_intro.asp)
<br>
<a href="#cabecera">A la cabecera</a>

### Postman

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/01-HTML/Informe/Imagenes/PostmanDefinition.png?raw=true">
</p>

<a href="#cabecera">A la cabecera</a>

<a name="desarrollo"></a>

### NPM (Node Package Manager)
NPM es el manejador de paquetes por defecto para Node.js, un entorno de ejecución para JavaScript. Utilice la NGP para instalar, compartir y distribuir el código; administrar dependencias en sus proyectos; y compartir y recibir información con los demás. (Fuente: [NPM](https://www.npmjs.com/)).


## Desarrollo del informe

### Inspeccionar paginas WEB usando Google Chrome
1. Iniciamos el navegador Google Chrome, aunque se puede emplear cualquier otro navegador.
2. Accedemos ala pagina principal de [Google](google.com.ec). 
3. Damos Click derecho en cualquier parte de la pantalla y nos dirigimos ala opcion Inspeccionar elemento, nos mostrará la siguiente informacion:
<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/01-HTML/Informe/Imagenes/Google.png?raw=true">
</p>
4. Por defecto nos ubicamos en la pestaña `Elements`. Donde podemos visualizar el codigo html de la pagina web a la que acabamos de acceder. en la parte inferior se muestran los estilos e informacion adicional.
<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/01-HTML/Informe/Imagenes/GoogleInspeccionarElements.png?raw=true">
</p>
5. En esta seccion podemos realizar cambios temporales a la pagina web. por ejemplo cambiar los colores.
<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/01-HTML/Informe/Imagenes/GoogleInspeccionarElementsBackground.png?raw=true">
</p>
6. A continuacion nos dirigimos ala pestaña `Networks` donde sera ncesario presionar`F5` para recargar la pagina, en esta seccion podremos apreciar todos los elementos recibidos desde el servidor de google.
<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/01-HTML/Informe/Imagenes/GoogleInspeccionarNetwork.png?raw=true">
</p>
7. Si seleccionamos cualquier archivo, se tendra acceso a informacion tal como, las cabeceras, vista previa, respuestas y tiempo.
<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/01-HTML/Informe/Imagenes/GoogleInspeccionarNetworkStatus.png?raw=true">
</p>

### Analisis de protocolo HTTP usando Postman

1.Primero es necesario instalar la aplicacion [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop).
<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/01-HTML/Informe/Imagenes/Instalar%20Postman.png?raw=true">
</p>
2.Procedemos a ejecutar Postman a traves de nuestro navegador web. El entorno de la aplicacion se presenta acontinuación:
<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/01-HTML/Informe/Imagenes/EntornoPostman.png?raw=true">
</p>
3.Realizmos una peticion a la siguiente URL [PokeAPI](http://pokeapi.co/api/v2/pokemon/1/)con el metodo `GET` y observamos los resultado:
<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/01-HTML/Informe/Imagenes/PostmanGET1.png?raw=true">
</p>
Como se puede apreciar nos devuelve toda l ainformacion del primer Pokemos.
4.Realizamos una segunda peticion a la misma URL pero con el metodo `POST`:
<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/01-HTML/Informe/Imagenes/PostmanPOST.png?raw=true">
</p>
Como podemos observar la pagina rechaza nuestra peticion, afirmando que es una request no permitida.


### Creacion de Pagina web basica con HTML y CSS
1. Para crear un archivo HTML, se procede a crear un archivo con la extencion `.html`
<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/01-HTML/Informe/Imagenes/index.png?raw=true">
</p>
2. A continuacion con ayuda de nuestro editor Brackets procederemos a codificar nuestra pagina web, como se menciono en el marco teorico, es necesario tener una estructura básica.

3. Imagenes en HTML: Para insertar una imagen se emplearà la etiqueta `<img>`.

<a href="https://es.wikipedia.org/wiki/Saint_Seiya" target="_blank">
    
    <img src="https://ugc.kn3.net/i/origin/http://www.ssiceplanet.net/personajes/s_oro/afrodita1.jpg" alt="Caballero del Zodiaco posando">
        
</a>
<br>
4.Listas No Ordenadas: se utiliza el tag `<ul></ul>` y dentro el tag `<li></li>`, a continuacion un fragmento del código:
<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/01-HTML/Informe/Imagenes/listaNoOrdenadaCodigo.png?raw=true">
</p>

5.Tambien se puede utilizar EMMET para crear de forma rapida un numero determinado de elementos de una lista, acontinuacion un fragmento del código.
<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/01-HTML/Informe/Imagenes/listaNoOrdenadaCodigoEMMET.png?raw=true">
</p>
6. Listas Ordenadas: se utiliza el tag `<ul></ul>` y dentro el tag `<ol></ol>`, a continuacion un fragmento del código:
<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/01-HTML/Informe/Imagenes/listaOrdenadaCodigo.png?raw=true">
</p>
7.Esta es una captura de las listas anteriores visualizadas en un navegador.
<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/01-HTML/Informe/Imagenes/ListasPaginaWeb.png?raw=true">
</p>
8.El código completo de la pagina web se encuentra disponible [aquí]().

### Servicio HTTP con NPM

1. Se accede ala carpeta donde se encuentra el archivo index.html
<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/01-HTML/Informe/Imagenes/NPMinstalacion.png?raw=true">
</p>

2. En dicho directorio se presion la tecla Shift + click derecho y se seleccion la opcion "abrir vetana de comando Aqui".
3. Se escribe el comando, para instalar el servicio HTTP de forma global en el sistema:
> npm install -g http-server

4. Se levanta el servicio HTTP con el siguiente comando:
> http-server -c10 
<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/01-HTML/Informe/Imagenes/Levantar%20servicio%20HTTP.png?raw=true">
</p>

5. Finalmente podemos acceder a nuestra pagina web a traves de cualquier navedador digitando la siguiente dirección:
> localhost:8080
<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/01-HTML/Informe/Imagenes/PaginaWeb.png?raw=true">
</p>


<a href="#cabecera">A la cabecera</a>

## Conclusiones y Recomendaciones

- Se aprendió la sintaxis y los elementos  basicos de un archivo HTML.
- Se empleo Postman para analizar los paquetes enviados entre el servidor y el cliente.
- Se emplearon los tutoriales disponibles en W3School.
- Se levanto un servicio HTTP para previsualizar una pagina web como localhost.
- Se realizo una documentacion aducada, para retener los conceptos recibidos en clase.
- Se recomienda tomar capturas durante el desarrollo de la clase.


<br>
<a href="#cabecera">A la cabecera</a>