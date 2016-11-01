# Introducción a la Web

### Materia : `Tecnologías Web con JavaScript`
### Tema : `Introducción a CSS` 
### Fecha : `2016-10-27`
### Estudiante : `Fabrizio Eloy Ramirez Cutimbo`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `2`

<a name="cabecera"></a>

## Índice de contenidos

- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#defCSS">Definición CSS</a>
  * <a href="#sintaxis">Sintaxis CSS</a>  
  * <a href="#cascada">Cascading Order</a> 
  * <a href="#bootstrap">Bootstrap</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conclusiones">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>

## Tema
El tema de la práctica es: `Introduccion a CSS`

<a name="objetivos"></a>
## Objetivos

- Estudiar el lenguaje CSS (Cascading Style Sheets)
- Crear un archivo de estilos CSS
- Crear una pagina web con Html y CSS

<a name="marco-teorico"></a>
## Marco Teorico

<a name="defCSS"></a>
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

### Sintaxis CSS

Una regla CSS consta de un selector y un bloque de declaración:

<p align="center">
<img src="http://www.w3schools.com/css/selector.gif">
</p>

* Selector CSS indica el elemento HTML que desea estilizar.
* El bloque de declaración contiene una o más declaraciones separadas por punto y coma.
* Cada declaración incluye un nombre de propiedad CSS y un valor, separados por dos puntos.
* Una declaración CSS siempre termina con un punto y coma, y los bloques de declaraciones están rodeados por llaves.

Fuente: [W3Schools](http://www.w3schools.com/css/css_intro.asp)
<br>
<a href="#cabecera">A la cabecera</a>

### Cascading Order

¿Qué estilo se utilizará cuando haya más de un estilo especificado para un elemento HTML?

En términos generales, podemos decir que todos los estilos se "conectarán" en una nueva hoja de estilo "virtual" mediante las siguientes reglas, donde el número uno tiene la máxima prioridad:

1. Estilo en línea (dentro de un elemento HTML)
2. Hojas de estilo externas e internas (en la sección de cabezal)
3. Predeterminado del navegador

Por lo tanto, un estilo en línea (dentro de un elemento HTML específica) tiene la prioridad más alta, lo que significa que va a anular un estilo definido dentro de la etiqueta `<head>`, o en una hoja de estilos externa, o bien un valor por defecto del navegador.

Fuente: [W3Schools](http://www.w3schools.com/css/css_intro.asp)
<br>
<a href="#cabecera">A la cabecera</a>

<a name="bootstrap"></a>
### Bootstrap

Es un framework de web front-end gratuito y de código abierto para diseñar sitios web y aplicaciones web. Contiene plantillas de diseño basadas en HTML y CSS para tipografía, formularios, botones, navegación y otros componentes de interfaz, así como extensiones de JavaScript opcionales. A diferencia de muchos marcos web, se ocupa solo del desarrollo front-end. Bootstrap es el segundo proyecto más visto en GitHub, con más de 100.000 estrellas y 45.000 bifurcaciones.
<p align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Boostrap_logo.svg/220px-Boostrap_logo.svg.png">
</p>

Fuente: [Wikipedia](https://en.wikipedia.org/wiki/Bootstrap) 

Fuente: [Bootstrap](http://getbootstrap.com/css/#overview)

<a href="#cabecera">A la cabecera</a>



<a name="desarrollo"></a>
## Desarrollo del informe
*NOTA: Para el desarrollo de esta practica es necesario levantar el sevicio HTTP, que ya ha sido explicado en el informe 01.

### Creación de Estilos dentro de HTML
* Primero procedemos a crear el tag `<Style>` dentro de la cabecera, lo cual nos permitira agregar lenguaje CSS dentro de un archivo HTML.
* A continuacion un fragmento del codigo y el resultado visualizado en un navegador:

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/02-html/Informe/Graficos/CSSD01.png?raw=true">
</p>

### Creación de clases con CSS
* Dentro del tag `<Style>` se pueden crear clasea aplicando el siguiente formato
> .nombreClase{}

* Para poder invocar una clase dentro del archivo HTML se utilizara el siguiente formato:
> < tag class="nombreClase">Contenido</ tag >

* A continuacion un fragmento del codigo y el resultado visualizado en un navegador:
<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/02-html/Informe/Graficos/CSSD02.png?raw=true">
</p>

### Agregando estilos desde un directorio local
* Para tener un mejor control de los estilos es recomendable crear un archivo css dentro de la carpeta local y referenciarla desde el archivo html empleado el siguiente tag:
<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/02-html/Informe/Graficos/CSSD03.png?raw=true">
</p>
* Tambien pueden existir ams de un archivo css de estilos, ubicados en difrentes carpeta, todos ellos pueden ser referenciables, sin embargo solo uno afectara al archivo HTML debido a la propiedad Cascading order:
<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/02-html/Informe/Graficos/CSSD04.png?raw=true">
</p>

### Referencia a Estilos Externos con Bootstrap

* Podemos referencias estilos almacenados en distintas partes de la web para ello usaremos bootstrap como ejemplo:
<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/02-html/Informe/Graficos/CSSD05.png?raw=true">
</p>

### Creacion de tablas

* Para la creacion de tablas emplearemos contenedores los cuales se crean usando la etiqueta `<div>`, ademas emplearemos la clase `row` (fila) y `col`(columna).

<p align="center">
<img src="https://github.com/fabriram20/tec_web_js/blob/02-html/Informe/Graficos/CSSD06.png?raw=true">
</p>
<a href="#cabecera">A la cabecera</a>
<a name="conclusiones"></a>
## Conclusiones y Recomendaciones

- Se aprendió la sintaxis y los elementos  basicos de un archivo CSS.
- Se pueden incluir librerias CSS externas.
- Los archivos CSS son creados con la finaldiad de estilizar un archivo HTML.
- Se puede insertar codigo CSS dentro de un archivo HTML, sin embargo es recomendable que esten separados.
- CSS genera modularidad dentro de una pagina web.
- El orden de cascada determina que tipo de estilo afectara el contenido visible.
- Se levanto un servicio HTTP para previsualizar una pagina web como localhost.
- Se recomienda tomar capturas durante las clases.


<br>
<a href="#cabecera">A la cabecera</a>