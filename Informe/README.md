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
  * <a href="#Assets">Assets</a> 
  * <a href="#Views">Views</a> 
  * <a href="#Pipeline">Pipeline</a> 
  * <a href="#Controllers">Controllers</a> 
- <a href="#desarrollo">Desarrollo de la Práctica</a>
  * <a href="#"></a>
  * <a href="#"></a> 
  * <a href="#"></a> 
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema

El tema de la práctica es: `Bootstrap`
<a href="#cabecera">A la cabecera</a>
<a name="objetivos"></a>

## Objetivos

- Conocer como funciona el sistema CDN
- Aprender a utilizar el CDN de bootstrap.
- Levantar un servidor http
- Crear una pagina web utilizando los estilos de Bootstrap

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

<p align="center">
<img src="">
</p>

<a href="#cabecera">A la cabecera</a>

<br>

<a name=""></a>
## Comandos Importantes

### Instalar sailsjs

Sailsjs es un servidor web que se conecta a bases de datos y puede funcionar con aplicaciones en tiempo real, ayudandonos a crear REST APIs.

´´´
> npm install -g sails
´´´

El -g nos deja utilizarlo globalmente.

### Crear un proyecto en Sailsjs

´´´
> sails new NombreProyecto
´´´

### Levantar el servidor

´´´
> sails lift
´´´


´´´
> node app.js
´´´

El sails les pide opciones si no estan definidas, las opciones son:

- 1: SAFE MODE no se va a alterar la base de datos
- 2: ALTER MODE se va a alterar la base de datos si nosotros hicimos cambios en los modelos por ejemplo
- 3: DELETE MODE borra todos los datos de la base y vuelve a crear los modelos

## Servidor Web de Sailsjs

El servidor web de sails se encuentra localizado en la carpeta **assets**



Revisar el "grunt" e instalar


## Generar controladores en sailsjs
'''
>sails generate controller NombreControlador
'''


sailsjs req params buscar en google

Deber escribir un controlladore llamado correo que contenga un metodo llamado enviar  el metodo evniar acepta parametro
