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
  * <a href="#defPOS">Postman</a>  
  * <a href="#defNPM">NPM (Node Package Manager)</a> 
- <a href="#desarrollo">Desarrollo de la Práctica</a>
  * <a href="#des1">Inspeccionar paginas WEB usando Google Chrome</a>
  * <a href="#des2">Analisis del protocolo HTTP usando Postman</a>
  * <a href="#des3">Creacion de Pagina web basica con HTML y CSS 1</a>
  * <a href="#des4"> Servicio HTTP con NPM</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

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

Por lo tanto, un estilo en línea (dentro de un elemento HTML específica) tiene la prioridad más alta, lo que significa que va a anular un estilo definido dentro de la etiqueta <head>, o en una hoja de estilos externa, o bien un valor por defecto del navegador.

Fuente: [W3Schools](http://www.w3schools.com/css/css_intro.asp)
<br>
<a href="#cabecera">A la cabecera</a>


## Desarrollo del informe



<a href="#cabecera">A la cabecera</a>

## Conclusiones y Recomendaciones

- Se aprendió la sintaxis y los elementos  basicos de un archivo CSS.
- Se pueden incluir librerias CSS externas.
- Los archivos CSS son creados con la finaldiad de estilizar un archivo HTML.
- Se puede insertar codigo CSS dentro de un archivo HTML, sin embargo es recomendable que esten separados.
- CSS genera modularidad dentro de una pagina web.
- El orden de cascada determina que tipo de estilo afectara el contenido visible.
- Se levanto un servicio HTTP para previsualizar una pagina web como localhost.ç
- Se recomienda tomar capturas durante las clases.


<br>
<a href="#cabecera">A la cabecera</a>