# Bootstrap

### Materia : `Tecnologías Web con JavaScript`
### Tema : `Bootstrap` 
### Fecha : `2016-11-02`
### Estudiante : `Fabrizio Eloy Ramirez Cutimbo`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `3`

<a name="cabecera"></a>
## Índice de contenidos

- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema

El tema de la práctica es: `Bootstrap`
<a href="#cabecera">A la cabecera</a>
<a name="objetivos"></a>
## Objetivos

- Desarrollar 
- Conocer
- Aprender 
- Levantar un servidor http
- Crear
<a href="#cabecera">A la cabecera</a>
<a name="marco-teorico"></a>
## Marco Teorico

### Bootstrap

Bootstrap es un framework de web front-end gratuito y de código abierto para diseñar sitios web y aplicaciones web. Contiene plantillas de diseño basadas en HTML y CSS para tipografía, formularios, botones, navegación y otros componentes de interfaz, así como extensiones de JavaScript opcionales. A diferencia de muchos marcos web, se ocupa solo del desarrollo front-end.
Bootstrap es el segundo proyecto más visto en GitHub, con más de 100.000 estrellas y 45.000 bifurcaciones. Fuente[Wikipedia](https://en.wikipedia.org/wiki/Bootstrap_front-end_framework)

<p align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Boostrap_logo.svg/200px-Boostrap_logo.svg.png">
</p>


<a href="#cabecera">A la cabecera</a>
<br>

### Content Delivery Network CDN

Una red de entrega de contenidos (CDN, content delivery network en inglés) es una red superpuesta de computadoras que contienen copias de datos, colocados en varios puntos de una red con el fin de maximizar el ancho de banda para el acceso a los datos de clientes por la red. Un cliente accede a una copia de la información cerca del cliente, en contraposición a todos los clientes que acceden al mismo servidor central, a fin de evitar embudos cerca de ese servidor.
Los tipos de contenido incluyen objetos web, objetos para descargar (archivos multimedia, software, documentos), aplicaciones, medios de comunicación en tiempo real y otros componentes de entrega de Internet (DNS, rutas y consultas de base de datos). Fuente [Wikipedia](https://volumeoftech.files.wordpress.com/2015/01/hosting-41.png?w=640)

<p align="center">
<img src="https://volumeoftech.files.wordpress.com/2015/01/hosting-41.png?w=640">
</p>

<a href="#cabecera">A la cabecera</a>
<a name="desarrollo"></a>

## Desarrollo del informe

Para comenzar esta clase se creo una nueva rama titulada "03-bootstrap", dentro de esta editaremos el texto `index.html`.
Primero comenzaremos editando la referencia hacia los estilos bootstrap CDN.

### Mobile First

Bootstrap 3 ha añadido a su framework caracteristicas para que las web desarrolladas sean orientas en un principio hacia dispostivos móviles, lo cual permite escalar el tamaño de una pagina web tanto para ocmputadoras de escritorio como para dispositivos moviles. Para agregar esta opcion anuestra pagina web se agergara los isguietes fragmentos de codigo dentro de la cabecera `<head>`.
<p align="center">
<img src="">
</p>
<a href="#cabecera">A la cabecera</a>

### Código con Bootstrap

#### Inline
Para utilizar esta opcion debemos usar el tag <code>&lt;code&gt;</code> el cual debe encerra el código a etiquetar.
<p align="center">
<img src="">
</p>
<code>&lt;Ejemplo-Texto&gt;</code>

#### User Input
Esta opcion nos permite resaltar las entradas e usuario con el fin de resaltar `comandos` de utilidad.
<p align="center">
<img src="">
</p>
    
#### Basic Block
Esta opcion nos permite ingresar un bloque de codigo, para ello necesitamos insertar el tag <code>&lt;pre&gt;</code>.
<p align="center">
<img src="">
</p>
<a href="#cabecera">A la cabecera</a>

### Tablas con Bootstrap
Para crear tablas podemos utilizar el tag <code>&lt;table&gt;</code>, o la abreviación <code>.table</code>, se procedio a copiar una tabla de la w3school.  Como utilizamos el cdn de Bootstrap el estilo de tabla se vio alterado, ademas nos brinda la opción de agregar clases a dicha tabla, los cual permite dar otras caracteristicas visuales a nuestra tabla, A continuacion un ejemplo:
<p align="center">
<img src="">
</p>
<a href="#cabecera">A la cabecera</a>

### Forms con Bootstrap

La pagina de bootstrap nos ofrece formularios hecho los cuales copiamos para nuestra pagina web, basicamente para crear un formulario utilizamos el tag <code>&lt;form&gt;</code>.
<p align="center">
<img src="">
</p>

Sin embargo el formulario es muy grande y no se ve estéticamente bien, por este motivo, emplearemos `contenedores` los cuales se crear con el tag <code>&lt;div class='container'&gt;</code>. Luego, dentro del contenedor crearemos una tabla en la cual ubicaremos nuestro formulario, dentro de una de las celadas, esto brindara mayor orden para nuestra pagina web. A continuacion el fragmenteo de codigo y la vista en un navegador.

<p align="center">
<img src="">
</p>
<p align="center">
<img src="">
</p>

<a href="#cabecera">A la cabecera</a>
<a name="conclusiones"></a>
## Conclusiones y Recomendaciones

- Bootstrap provee una libreria de estilos muy utiles.
- La pagina web de Bootstrap provee una documentación muy util para aprender a utilizar dicho CDN.
- Bootstrap provee estilos muy visuales cuando deseamos resaltar codigo en la pagina web.
- Los contenedores permiten mejorar la organizacion visual de una pagina web.
- Se recomienda tomar capturas de pantalla durante la clase.



<a href="#cabecera">A la cabecera</a>