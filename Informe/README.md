# Introducción a la Web

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="200" height="100">
</p>

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
### Definición HTML

En informática, la World Wide Web (WWW) o red informática mundial1 es un sistema de distribución de documentos de hipertexto o hipermedios interconectados y accesibles vía Internet. Con un navegador web, un usuario visualiza sitios web compuestos de páginas web que pueden contener texto, imágenes, vídeos u otros contenidos multimedia, y navega a través de esas páginas usando hiperenlaces. (Fuente: [Wikipedia](https://es.wikipedia.org/wiki/World_Wide_Web))
<br>
<a href="#cabecera">A la cabecera</a>

<br><br>
<p align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/WWW_logo_by_Robert_Cailliau.svg/240px-WWW_logo_by_Robert_Cailliau.svg.png" width="300" height="200">
</p>
<br><br>
<a name="hist"></a>



### Definición WWW 
El Consorcio WWW, en inglés: World Wide Web Consortium (W3C), es un consorcio internacional que genera recomendaciones y estándares que aseguran el crecimiento de la World Wide Web a largo plazo. Este consorcio fue creado en octubre de 1994, y está dirigido por Tim Berners-Lee, el creador original del URL (Uniform Resource Locator, Localizador Uniforme de Recursos), del HTTP (HyperText Transfer Protocol, Protocolo de Transferencia de HiperTexto) y del HTML (Hyper Text Markup Language, Lenguaje de Marcado de HiperTexto), que son las principales tecnologías sobre las que se basa la Web.(fuente: [Wikipedia](https://es.wikipedia.org/wiki/World_Wide_Web_Consortium)).
<p align="center">
<img src="http://www.dataversity.net/wp-content/uploads/sites/2/2013/12/w3c.jpg">
</p>

### Hypertext Transfer Protocol

Hypertext Transfer Protocol o HTTP (en español protocolo de transferencia de hipertexto) es el protocolo de comunicación que permite las transferencias de información en la World Wide Web. HTTP fue desarrollado por el World Wide Web Consortium y la Internet Engineering Task Force. Es un protocolo orientado a transacciones y sigue el esquema petición-respuesta entre un cliente y un servidor. El cliente (se le suele llamar "agente de usuario", en inglés user agent) realiza una petición enviando un mensaje, con cierto formato al servidor, El servidor (se le suele llamar un servidor web) le envía un mensaje de respuesta. Ejemplos de cliente son los navegadores web y los spider. (fuente: [Wikipedia](https://es.wikipedia.org/wiki/Hypertext_Transfer_Protocol)).

#### Versiones

* 0.9 (lanzada en 1991)
* HTTP/1.0 (mayo de 1996)
* HTTP/1.1 (junio de 1999)
* HTTP/1.2 (febrero de 2000)
* HTTP/2 (mayo de 2015)

#### Mensajes

Número | Tipo
--- | --- 
1xx | Informational
2xx | Success
3xx | Redirection
4xx | Client Error
5xx | Server Error

#### Métodos

Method | Description
--- | --- 
GET | The GET method requests a representation of the specified resource.
POST | The POST method requests that the server accept the entity enclosed in the request. 
HEAD | Same as GET but returns only HTTP headers and no document body
PUT | Uploads a representation of the specified URI
DELETE | Deletes the specified resource
OPTIONS	| Returns the HTTP methods that the server supports
CONNECT | Converts the request connection to a transparent TCP/IP tunnel

### Definición CSS


### Postman


<a href="#cabecera">A la cabecera</a>


<a name="desarrollo"></a>
## Desarrollo del informe

### Imagenes desde Github **IMPORTANTE**

Se pueden usar imágenes desde nuestros archivos en github que constan de la siguiente URL:

- Github
  * La url de github que es `https://github.com` 
- Usuario
  * La url de usuario de github que en este caso es: `/adrianeguez` 
- Repositorio
  * El repositorio de Github que estamos usando, en este caso es `/Tec_Web_Js_2016_B`
- Rama o  Branch
  * La rama de nuestro repositorio en este formato: `/blob/master`
- El PATH
  * La direccíon de nuesto archivo por ejemplo `/carpeta/subcarpeta/subsubcarpeta/archivo.png` en este ejemplo es `/Ejemplo%20de%20un%20Informe/Imagenes/Flujograma.png` 
- RAW
  * Por ultimo mandamos un Query String Parameter de la con la variable `raw` y valor `true` de la siguiente manera: `?raw=true`
  
**Al final** nuestro url queda de la siguiente manera:

#### `https://github.com/adrianeguez/Tec_Web_Js_2016_B/blob/master/Ejemplo%20de%20un%20Informe/Imagenes/Flujograma.png?raw=true`

<p align="center">
<img src="https://github.com/adrianeguez/Tec_Web_Js_2016_B/blob/master/Ejemplo%20de%20un%20Informe/Imagenes/Flujograma.png?raw=true" width="500" height="800">
</p>

Por ultimo podemos centrar las imagenes de la siguiente manera:


```
<p align="center">

<img src="https://github.com/adrianeguez/Tec_Web_Js_2016_B/blob/master/Ejemplo%20de%20un%20Informe/Imagenes/Flujograma.png?raw=true" width="500" height="800">

</p>
```

### Links dentro de github

Para nosotros utilizar los Links dentro de Github debemos de hacer dos cosas:

1. Definir un anchor name donde nosotros queramos mover cuando demos clic de la siguiente manera y formate (**NOTESE QUE ESTAN JUNTAS**):

  ```
  <a name="nombre"></a>
  ## titulo2
  ```
2. Después de esto debemos de linkear mediante un texto por ejemplo en una lista de la siguiente manera (**NO ELVIDAR EL `#`**):
 
  ```
  - <a href="#nombre">Dale clic aqui para ir al titulo 2</a>
  ```
  <a name="conrec"></a>

<br>
<a href="#cabecera">A la cabecera</a>

## Conclusiones y Recomendaciones

- Se recomienda mejorar la presentacion
- Se recomienda usar el ir a cabecera despues de terminar una seccion
- Se aprendio el uso de HTML con Markdown
- Conocimos herramientas de desarrollo web como postman e inspector web
- Desarrollamos conocimientos de introducción Web

<br>
<a href="#cabecera">A la cabecera</a>


# ¡Gracias por su atención!

Author: [Adrian Eguez](https://github.com/adrianeguez)