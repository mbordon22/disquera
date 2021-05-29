# Web app: consulta de discos

## La consigna

Desarrollar una app para poder consultar los discos por título, año o artista. Considerar coincidencias parciales.

## La solución

### Server

Contiene solo 2 endpoints

GET /: entrega la página inicial, index.html (detallada más abajo)

GET /disco: consulta de discos, recibe por query string los filtros. Busca en los datos que estén en el archivo discos.json y retorna los objetos de los discos coincidentes.

### index.html

Tiene que mostrar 3 inputs con los 3 datos para filtar y un botón para disparar la consulta, que se debe hacer via AJAX enviando un request GET a la ruta /discos y pasando por query string los filtros (uno o varios) con las claves "titulo", "artista" o "lanzamiento".
Por ejemplo /disco?lanzamiento=1968&artista=beatles

Esa url va a tener que armarse concatenando los datos de los filtros ingresados.

Cuando se obtiene la respuesta, mostrar los resultados como "tarjetas", con los datos de artista, título y año de lanzamiento y la imagen de la tapa (todas del mismo tamaño)

## Observaciones

1. Lo de considerar coincidencias parciales si quieren déjenlo para el final, así simplifican
2. Para armar la url de la consulta tengan en cuenta que no todos los filtros son obligatorios, lo cual requiere pensar un poco cómo armar ese query string, porque podría quedar, por ejemlpo:
  - /disco?artista=U2
  - /disco?artista=U2&lanzamiento=2004
  - /disco?lanzamiento=2004
  - /disco?titulo=Abbey
  - /disco?lanzamiento=1968&titulo=Abbey
  - /disco?artista=Beatles&lanzamiento=1968&titulo=Abbey
  
  Es decir que pueden tener combinaciones de 1, 2 o 3 filtros. Recomiendo primero probar con un solo filtro, por un solo dato, e ir incoporando los otros después.