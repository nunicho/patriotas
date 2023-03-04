# Archivo readme
Información útil para analizar este repositorio.


# Proyecto final integrador - Primeros pasos en el desarrollo front-end - Argentina Programa 4.0

Tarea a realizar: Primeros pasos en el desarrollo front-end.
En tu primera tarea en la empresa, te solicitan que realices una página web que posea un currículum vitae. La creación de este cv online te permitirá llevar a la práctica todo lo que fuimos trabajando a lo largo de los módulos. El CV comprende información personal, experiencia y habilidades.

## Autor

- Alonso Mauricio Javier

## 1 - Comentarios previos

En este trabajo, traté de aplicar todo lo visto en el cursado de Desarrollo de Front End., más algunas herramientas que aprendí investigando, probando y siguiendo tutoriales en la web. 
Me esforcé mucho para este trabajo porque descubrí que la programación web me apasiona y quería aplicar al máximo lo que aprendí. 
No quise hacer un trabajo sin un marco, un entorno, sin alma. Le quise conceder una temática, no quería que el CV estuviese desprovisto de un contexto. 
Al principio, intenté utilizar la API recomendada ("https://randomuser.me/api/"), pero no me satisfizo en cuanto a los datos aportados, ya que no brindaba información aleatoria sobre experiencias ni habilidades, aspectos centrales en un currículum. 
Aunque a la API sí le dí un uso, como explicaré más adelante, no fue para completar el currículum; para ello pensé en elegir un tema a desarrollar donde tuviese información de personas y/o situaciones reales.
Después de varias alternativas elegí la temática del Congreso de Tucumán, evento más que relevante en la historia Argentina del cual es abundante la información recopilada. También son vastos los datos personales de las personas que intervinieron en la Declaración de la Independencia.
Además, este trabajo, al contar con un hilo conductor, es un sitio que, perfeccionado, puede servir para ser publicado en un portfolio. 
En los puntos siguientes haré un resumen de lo más relevante desarrollado en cada sección del código empleado. 

## 2 - Las Bases de Datos
La bases de datos que alimentan al sitio están en "datos.js". 

1. La primera base de datos es "datos", la cual tiene tabulados, de cada diputado del congreso, los campos nombre, nacimiento, fallecimiento, profesión, distrito, un resumen, habilidades, experiencia, educación, aficiones, una imagen, un video relacionado de Youtube y su referencia en Wikipedia.  
2. La segunda base es "datosMauricio", que conta de dos items, uno en castellano y otro en inglés, y los siguientes campos: nombre, nacimiento, nacionalidad, profesión, mail, resumen, habilidades, experiencia, educación, aficiones, una imagen, un link a mi perfil de Linkedin. A los datos los puse en castellano y en inglés, ya que dentro del sitio, está la posibilidad de cambiar de idioma mi CV. 
3. La tercera base es una de frases históricas, alegóricas a la libertada. Estas frases son tomada, mediante una función de JS, de forma aleatoria y añadidas al DOM como se explicará más adelante. 

## 3 - La estructura del Index
1. Head, donde están las etiquetas "meta" y los links a bootstrap, sweetAlert, los archivos locales de css y el favicon.
1. Navbar, el cual tiene su base en Bootstrap. El navbar tiene, entre otras cosas, links a distintas páginas locales en etiquetas "li"  agrupadas en una lista desordenada "ul". 
2. H1 con el nombre del sitio.
3. Article con un section - Donde el DOM se completa con los datos que surgen de la API Random User, mediante la aplicación de la función js seguidoresAleatorio.js. También en esta sección se lo saluda al usuario que se loguea tomando el registro de su nombre que figura en el localStorage.
3. Article con un section - En esta section hay un carousel de Bootstrap, en el cual incluí links a otras páginas, con la etiquetas "a", un "div" donde se permite descargar un archivo (el Acta de la Independencia) con los atributos href y download y otro div donde se genera aleatoriamente, mediante una función de js, un patriota al azar. 
4. Article con un subtitulo "h3".
5. Article con in "id" específico. En este article, una función js corre un "map" y renderiza toda la base de datos, generando una card por cada patriota.
6. Un div apartado, que es el código HTML para una ventana modal de login. Esta ventana modal tiene un "form", con un "input", con validaciones en html y js,. La mecánica de login está implementada por una función js. También tiene una función JS que genera frases aleatorias de patriotas (las cuales están almacenadas en la base de datos).
7. El footer, donde está mediante el uso de "row" y "col" agrupo mi nombre, una leyenda ilustrativa de "todos los derechos reservados" y un link a la página de Argentina Programa. Mediante col, col-md y col-lg hice el footer responsive. 
8. Los "script" de todas las funciones js que utilizo en la página


## 4 - El resto de los archivos HTML
El resto de las páginas html se localizan en el directorio "pages"
1. cv.html
En esta página se toman los parámetros de cada uno de los patriotas, según lo establecido en la base de datos, y se lo renderiza. Los datos del patriota no están en HTML, sino que son agregados al DOM por la función cargarDatosEnCV.js
2. cvMauricio.html
En esta página se toman mis datos de la base de datos, y se renderizan. Mis datos no están en HTML, sino que son agregados al DOM por la función cargarDatosEnCVMauricio.js
3. cvMauricioEng.html
En esta página se toman mis datos en inglés de la base de datos, y se renderizan. Mis datos no están en HTML, sino que son agregados al DOM por la función cargarDatosEnCVMauricioEng.js


## 5 - Los archivos CSS
1. style-portada.css
Este archivo es el que le otorga pautas de estilo al index. Como punto a descatar, tiene dos mediaqueries, para pantalla, máximo 768 px y mínimo 768. En la de máximo 768, pensada para dispositivos móviles, se quita el efecto hoover que sí está disponible para dispositivos medios y grandes. 
2. Style-CV (1, 2 y 3) Estos tres archivos le dan el estilo a las páginas cv, cvMauricio y cvMauricioEng. Son tres, porque en el html hay tres botones, donde se llama a una función js que cambia el archivo "link" de css. Por lo tanto, la información del CV se puede cambiar entre estos tres estilos. Tiene tres mediaqueries: una para screen (min-width 768px) la cual agrupa los datos del currículum en una sola columna y otra para print, los cuales acomoda la hoja para la generación de un pdf. 
3. spinner.css
Este archivo css contiene el apartado de estilo del spinner, el cual es aplicado en la sección de seguidores Aleatorio, para que sea la carga de la información de la API esté cubierta por el spinner mientras es realizada.

## 6 - Los archivos JS
1. index.js
Esta función se aplica en el index. Tiene como objetivo mapear la base de datos en lo relativo a los patriotas y generar una card por cada patriota, la cual es agregada al DOM. También se utiliza el comando window.location.origin, el cual, combinado con el código del patriota, permite cargar sus datos precisos en la página cv.html
2. datos.js
Es la base de datos, la cual se explicó en el punto 1. 
3. cargarDatosEnCV.js
Carga los datos del patriota en el CV, seleccionando el patriota correcto mediante el comando URLSearchParams. Cada dato correspondiente a la base de datos de cada patriota se agrega al DOM mediante getElementById e innerHTML. 
4. cargarDatosEnCVMauricio.js
Carga mis datos en cvMauricio. Cada dato se agrega al DOM mediante getElementById e innerHTML. 
5. cargarDatosEnCVMauricioEng.js
Carga mis datos en inglés en cvMauricio. Cada dato se agrega al DOM mediante getElementById e innerHTML. 
6. mecanicaEstiloCV.js
Es la función encargada de cambiar el "href" dentro de la etiqueta "link" en el head de las páginas de CV. Así se puede alternar entre los archivos css style1-CV, el style2-CV y el style3-CV
7. login.js
La función de login se encarga de lo atinente a generar un usuario simple, el cual se guarda en el localStorage. La función carga el dato en el localStorage traído de la input en la ventana modal. También hay una función que graba en el localStorage, otra que borra el registro. En este archivo también hay una función que genera un saludo aleatorio al usuario logueado. Si no hay ningún usuario logueado, aparece la palabra genérica "Visitante". 
8. patriotaAleatorio.js
Esta función, mediante Math random, aplicado al length de los datos, genera una card aleatoria de un patriota. Es un detalle que le da un contenido que varía a la página. En la card hay un botón que permite navegar hasta el CV del patriota, mediante la aplicación de window.location.origin. 
9. seguidoresAleatorio.js
Aquí apliqué la api "randomuser". Mediante fetch traigo los datos que quiero de la api (name.first; name.last; location) y los agrego al DOM en en una sección seguidores del index. 

## 7 - Los recursos
1. La carpeta img
Están todas las imágenes utilizadas en este sitio web: los patriotas del index, los logos de navbar y footer, mi foto en mi currículum, las imágenes en el carrousel, la imagen para el cambio de idioma en mi cv, entre otras. 
2. La carpeta archivoDescargable



## 8 - Librerías y herramientas web utilizadas

1. Bootstrap
Utilicé la librería bootstrap porque principalmente tiene categorías que facilitan hacer el sitio responsive (container, container-fluid, por ejemplo), que ayudan a que no exista un scroll horizontal en los dispositivos móviles. Además facilita la creación de botones, márgenes, padding, entre otras herramientas. 
2. Bootstrap Icons
Incialmente usé esta librería, para adornar de íconos los CV. Después la reemplacé por FontAwesome. 
3. SweetAlert 2
Usé esta librería para que mejorar el alert que puse cuando no carga correctamente al API de randomuser.
4. FontAwesome
Usé esta librería para agregar los íconos que están en las páginas de cv, cvMauricio y cvMauricioEng.
5. https://randomuser.me/api/"
Si bien se sugería esta api para obtener datos, yo la utilicé para generar información de seguidores ficticios.
6. Spinner - https://tobiasahlin.com/spinkit/
En esta web se encuentran recursos para hacer spinners, tanto desde el código html como el css.
7. BG-Gradient- https://cssgradient.io/
Página más que interesante para generar fondos de dos o más colores, con degradado, para aplicar en los archivos css, en background-color. 
8. Para elegir colores - https://imagecolorpicker.com/
Sitio web que permite subir una foto e identificar la paleta de colores que la componen.
9. Edición de imágenes 
https://www.iloveimg.com/es  
https://www.remove.bg/es
Los utilicé para editar las imágenes y que sean aceptables para mis propósitos. 









