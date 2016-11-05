# Bootstrap

### Materia : `Tecnologías Web con JavaScript`
### Tema : `Javascript` 
### Fecha : `2016-11-01`
### Estudiante : `Fabrizio Eloy Ramirez Cutimbo`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `4`

<a name="cabecera"></a>

## Índice de contenidos

- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
    *  <a href="#javascript">JAVASCRIPT</a>
    *  <a href="#ecma">ECMAScript</a>
    *  <a href="#jquery">JQUERY</a>
    *  <a href="#jsbin">JSBIN</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
    *  <a href="#primero">Introducción a JSBIN</a>
    *  <a href="#segundo">Introducción a Javascript</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema

El tema de la práctica es: `Javascript`.

<a href="#cabecera">A la cabecera</a>
<a name="objetivos"></a>
## Objetivos

- Estudiar los conceptos basicos de Javascript.
- Estudiar la libreria JQUERY.
- Aprender a desarrollar paginas web en JSBIN.
- Levantar un servidor http.

<a href="#cabecera">A la cabecera</a>
<a name="marco-teorico"></a>

## Marco Teorico

<a name="javascript"></a>
### JAVASCRIPT
JavaScript (abreviado comúnmente JS) es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico.

Se utiliza principalmente en su forma del lado del cliente (client-side), implementado como parte de un navegador web permitiendo mejoras en la interfaz de usuario y páginas web dinámicas aunque existe una forma de JavaScript del lado del servidor(Server-side JavaScrip o SSJS). Su uso en aplicaciones externas a la web, por ejemplo en documentos PDF, aplicaciones de escritorio (mayoritariamente widgets) es también significativo. [Fuentes Wikipedia](https://es.wikipedia.org/wiki/JavaScript)

<p align="center">
<img src="https://wp-andypiapps.rhcloud.com/wp-content/uploads/2016/08/js4560_450.png" width="300" height="300">
</p>

<a href="#cabecera">A la cabecera</a>
<a name="ecma"></a>
### ECMAScript

ECMAScript es una especificación de lenguaje de programación publicada por ECMA International. Define un lenguaje de tipos dinámicos ligeramente inspirado en Java y otros lenguajes del estilo de C. Soporta algunas características de la programación orientada a objetos mediante objetos basados en prototipos y pseudoclases. La mayoría de navegadores de Internet incluyen una implementación del estándar ECMAScript, al igual que un acceso al Document Object Model para manipular páginas web. 

<p align="center">
<img src="https://cms-assets.tutsplus.com/uploads/users/15/posts/24117/preview_image/ecmascript.png" width="200" height="150">
</p>

<a href="#cabecera">A la cabecera</a>
<a name="jquery"></a>
### JQUERY
jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.
[Fuente jsbin.com](http://jsbin.com/help/getting-started)

<a href="#cabecera">A la cabecera</a>
<a name="jsbin"></a>
### JSBIN

JS Bin is a tool for experimenting with web languages. In particular HTML, CSS and JavaScript, but JS Bin also supports other languages too (like Markdown, Jade and Sass).

JS Bin is ultimately a code sharing site. Along with the code, the complete output of the code is also shared with other developers, colleagues and/or students. As you type into one of the editor "panels", you and anyone watching your bin will see the output being generated in real-time in the output panel. [Fuente jsbin.com](http://jsbin.com/help/getting-started)

<a href="#cabecera">A la cabecera</a>
<a name="desarrollo"></a>

## Desarrollo del informe

<a name="primero"></a>
### Primera Parte: Introducción a JSBIN

* Utilizaremos la apliacion web  [JSBIN](https://jsbin.com), Donde tenemos  un ambiente de desarrollo, con previsualizacion y consola.

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/04-javascript-parte2/Informe/Imagenes/JS1x1.png?raw=true">
</p>

* Luego ingresamos al pagina [bootstrap](https://www.bootstrapcdn.com/) para sacar los CDN de CSS yJavaScript, ambos se deben referenciar a nuestro archivo html de la siguiente manera:

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/04-javascript-parte2/Informe/Imagenes/JS1x2.png?raw=true">
</p>
 
* Sin embargo esto nos da un error en la consola, porque es necesario emplear la libreria JQUERY, para solucionar este problema nos dirigimos a la pagina [JQUERY](https://code.jquery.com/).

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/04-javascript-parte2/Informe/Imagenes/JS1x3.png?raw=true">
</p>

* Copiamos el fragmento de código en nuestro archivo html, con esto ya no tenemos el problema de falta de librerias. Recordar que HTMl es como un árbol, de modo que el orden en el cual referenciamos las librerías si importa, entonces el orden seria el siguiente:
Primero la librería JQUERY, luego el cdn de javascript y finalmente el cdn de css.

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/04-javascript-parte2/Informe/Imagenes/JS1x4.png?raw=true">
</p>
    
* A continuación nos dirigimos ala pagina de bootstrap, para poder exrtraer fragmentos de código que copiaremos en nuestro proyecto de JSBIN. En la pestaña javascript de bootstrap, en la sección de “dropdown” podemos copiar un fragmento de código y el resultado es el siguiente:

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/04-javascript-parte2/Informe/Imagenes/JS1x5.png?raw=true">
</p>

* Finalmente podemos ubicar el apartado Navbar donde copiaremos un fragmento de código y el resultado es el siguiente:

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/04-javascript-parte2/Informe/Imagenes/JS1x6.png?raw=true">
</p>

Nota: el link de la pagina generada es  el siguinte: [https://jsbin.com/loyuqezawi/edit?html,output](https://jsbin.com/loyuqezawi/edit?html,output).

<a href="#cabecera">A la cabecera</a>
<a name="segundo"></a>
### Segunda Parte: Introducción a Javascript
Para ejecutar codigo de java script dentro de un archivo html, es necesario ubicarlo entre las etiquetas `<script>`.

* Enla interfaz de JSBIn creamos un boton y le asignamos un evento cuando se de doble click:

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/04-javascript-parte2/Informe/Imagenes/JS2x1.png?raw=true">
</p>

* Creamos un archivo `index.html`, levantamos un servicio http y crearemos un mensaje de alerta con javascript:

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/04-javascript-parte2/Informe/Imagenes/JS2x2.png?raw=true">
</p>

* Para definir variables en java script, basta con escribir `var`, en este lenguaje no existe distincion entre, enteros, decimales, caracteres o booleanos, simplemente existen varibles. Se realizo un ejercio para transformar numeros enteros, a caracteres, booleanos, etc demostrando la versatilidad de este lenguaje:

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/04-javascript-parte2/Informe/Imagenes/JS2x3.png?raw=true">
</p>

* Los arreglos se definen como un conjunto de variables agrupadas entre corchetes. Se pueden almacenar variables dediferente tipo en un mismo arreglo, este es un punto fuerte de javascript:

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/04-javascript-parte2/Informe/Imagenes/JS2x4.png?raw=true">
</p>

* Los objetos en javascript, se definene como variables que contienen atributos y estas a su vez pueden contener otros atributos:

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/04-javascript-parte2/Informe/Imagenes/JS2x5.png?raw=true">
</p>

Las funciones en javascript pueden definirse de forma global o propias de algun objeto:

* Para definirlas de forma global acontinuación se muestra como definir e invocarla una funcion;

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/04-javascript-parte2/Informe/Imagenes/JS2x6.png?raw=true">
</p>

* O pueden ser propias de un objeto, como se muestra acontinuación, donde se define el metodo get y set dentro del objeto fabrizio y luego se lo invoca:

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/04-javascript-parte2/Informe/Imagenes/JS2x7.png?raw=true">
</p>

<a href="#cabecera">A la cabecera</a>
<a name="conclusiones"></a>
## Conclusiones y Recomendaciones

* HTML es como el esqueleto de una pagina web, CSS es la parte visible, mientras que javascript permite mover los componentes que están dentro de html.
* Javascript se usa tanto para la web, como para aplicaciones móviles hibridas. Se pueden creara juegos, interfaces decentes, consultas en base de datos no relacionales, también puede funcionar como servidor.
* Javascript es considerado el ingles de los lenguajes de programación.
* Javascript permite aumentar clases.
* Es recomendable colocar los estilos en la cabecera. Y ubicaremos los javascript al final del Body
* JSBIN viene predeterminado para ejecutar automáticamente con JavaScript, es mejor tenerlo siempre activo.


<a href="#cabecera">A la cabecera</a>