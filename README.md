# Ejercicios independiens
## 30 Etiquetas de HTML
1. **```<nav></nav>```** Usadas para definir el contenido que será la sección de navegación de la web
2. **```<section> </section>```** Define una sección del documento
3. **```<title> </title>```** Etiqueta usada para definir el título de la página.
4. **```<link>```** Se usa para enlazar recursos externos al documento HTML. El ejemplo más común son las hojas de estilos CSS
5. **```<!DOCTYPE html>```** Indica al navegador que el documento está basado en el estándar HTML5
6. **```<html> </html>```** Representa la raíz de un documento HTML. Todos los demás elementos de la estructura HTML deben ser recogidos dentro de estas etiquetas
7. **```<style> </style>```** Etiquetas usadas para introducir código CSS en línea, es decir, en el propio documento HTML
8. **```<body> </body>```** Al contrario que la etiqueta de metadatos <head>, todo lo que quieras mostrar en la página web debe ir recogido dentro de las etiquetas de apertura y cierre de <body>. Este contenido será el que se muestre en la web
9. **```<main> </main>```** Se usa para definir el contenido principal del documento. Solamente puede existir uno por documento
10. **```<article> </article>```** Define contenido independiente de la web
11. **```<aside> </aside>```** Dentro de estas etiquetas suele alojarse el contenido adicional de la web. Suele ser contenido relacionado con la web pero de poca importancia
12. **``` <h1>,<h2>,<h3>,<h4>,<h5>,<h6>```** Son etiquetas HTML muy importantes, ya que son usadas para jerarquizar el contenido de la web. Las etiquetas se usan para explicar brevemente el contenido que irá a continuación
13. **``` <footer> </footer>```** Usadas para definir el pie de página
14. **```<header> </header>```** Se usan para definir la cabecera la página web. Suele contener el logotipo, menú de navegación, etc
15. **```<p> </p>```** Etiqueta usada para escribir párrafos de texto
16. **```<blockquote> </blockquote>```** Se usan para indicar que el contenido es texto citado
17. **```<hr>```** Etiqueta utilizada para «romper» entre dos secciones de una web. Usada comúnmente como separador
18. **```<textarea> </textarea>```** Añade un campo al usuario para que pueda introducir texto en unas líneas máximas de texto que el desarrollador puede definir
19. **```<label> </label>```** Se usa para definir el nombre o título de un control del formulario
20. **```<select> </select>```** Input que permite una selección entre un conjunto de opciones
21. **```<option> </option>```** Etiqueta ligada a <select>. Permite añadir diferentes opciones al <select>
22. **```<input>```** Pinta un campo de introducción de datos para el usuario. Es de las principales etiquetas de un formulario
23. **```<img>```** Etiqueta para «pintar» una imagen en la página web
24. **```<iframe> </iframe>```** Es una etiqueta que sirve para anidar otro documento HTML dentro del documento principal
25. **```<video> </video>```** Se usa para reproducir video en la página web junto a sus archivos de audio y capciones asociadas
26. **```<audio> </audio>```** Usada para cargar en una web un archivo de audio o stream de audio
27. **```<object> </object>```**Utilizada llamar a un recurso externo de la web. Este recurso será tratado como una imagen, o un recurso externo para ser procesado por un plugin
28. **```<div> </div>```** Etiqueta común utilizada para crear un contenedor genérico
29. **```<figure> </figure>```** Indica una figura ilustrada como parte del documento HTML5
30. **```<a> </a>```** Etiqueta utilizada para crear hiperenlaces en el documento HTML
## 30 Selectores de CSS
1. **```*```** El asterisco se centrará en cada uno de los elementos en la página.
2. **```#X```** Prefijar el símbolo numérico a un selector nos permite seleccionar por id.
3. **```.X```** Éste es un selector de clase class La diferencia entre ids y class es que, con el último, puedes seleccionar varios elementos.
4. **```X Y```** El siguiente selector más común es el selector descendiente.
5. **```X```** ¿Qué pasa si quieres seleccionar todos los elementos en una página, de acuerdo a su tipo ( type), en vez de un nombre de id o clase. Mantenlo simple, y usa un selector de tipo.
6. **```X:visited and X:link```** Usamos la pseudo clase :link para seleccionar todas las etiquetas anchor a las que aún no se les ha dado click.
7. **``` X + Y```** Este se conoce como un selector adyacente. Seleccionará solamente el elemento que es inmediatamente precedido por el primer elemento.
8. **```X > Y```** La diferencia entre el estándar X Y y X > Y es que el último sólo seleccionará hijos directos.
9. **```X ~ Y```** Este elemento “hermano” es similar a X + Y, sin embargo, es menos estricto.
10. **```X[title]```** Denominado como un selector de atributos, en nuestro ejemplo de arriba, esto sólo seleccionará las etiquetas anchor que tengan un atributo title.
11. **```X[href="foo"]```** El fragmento de arriba dará estilo a todas las etiquetas anchor que enlacen a http://net.tutsplus.com; estas recibirán nuestro característico color verde. Las demás etiquetas anchor permanecerán sin cambio.
12. **```X[href*="nettuts"]```** El asterisco designa que el valor a continuación debe aparecer en algún lugar del valor del atributo. De esa manera, esto cubre nettuts.com, net.tutsplus.com, e incluso tutsplus.com.
13. **```X[href^="http"]```** Si queremos afectar todas las etiquetas anchor que tienen un href que comienza con http, podríamos usar un selector similar al fragmento.
14. **```X[href$=".jpg"]```** En éste caso, estamos buscando todos los anchor que enlacen a una imagen – o por lo menos a una url que termine con .jpg. Ten en mente que esto seguramente no funcionará para gifs ni pngs.
15. **```X[data-*="foo"]```** podemos usar un selector de atributos estándar para afectar sólo a esos anchors.
16. **```X[foo~="bar"]```** El símbolo tilde (~) nos permite afectar un atributo que tenga una lista de valores separados por espacios.
17. **```X:checked```** Ésta pseudo clase sólo afectará a un elemento de interfaz de usuario que haya sido seleccionado - como un botón de opción (radio button) o casilla de selección (checkbox).
18. **```X:after```** Éstas simplemente generan contenido alrededor del elemento seleccionado.
19. **```X:hover```** Usarás más seguido éste selector cuando apliques, por ejemplo, un border-bottom a etiquetas anchor, cuando se pase por encima.
20. **```X:not(selector)```** La pseudo clase negación es particularmente útil. Digamos que quiero seleccionar todos los divs, excepto por los que tienen un id de container. El fragmento de arriba manejará la tarea perfectamente.
21. **```X::pseudoElement```** Podemos usar pseudo elementos (designados por ::) para estilizar fragmentos de un elemento, como la primera línea, o la primera letra.
22. **```X:nth-child(n)```** Podemos incluso usar esto para seleccionar un conjunto variable de hijos. Por ejemplo, podríamos usar li:nth-child(4n) para seleccionar todos los cuartos elementos de una lista.
23. **```X:nth-last-child(n)```** ¿Y si tuvieras una inmensa lista de elementos en un ul, y solo necesitaras accesar, digamos, del tercer al último elemento? En vez de usar li:nth-child(397), en su lugar podrías usar la pseudo clase nth-last-child.
24. **```X:nth-of-type(n)```** Si quisieras estilizar sólo la tercera ul, y no tuvieras un id único al cual engancharla, podrías usar la pseudo clase nth-of-type(n).
25. **```X:nth-last-of-type(n)```** También podemos usar nth-last-of-type para comenzar al final de la lista del selector y partir hacia atrás para afectar al elemento deseado.
26. **```X:first-child```** Esta pseudo clase estructural nos permite afectar sólo al primer hijo del padre del elemento. Usarás esto frecuentemente para remover bordes de los primeros y últimos elementos de una lista.
27. **```X:last-child```** Al contrario de first-child, last-child afectará el último elemento del padre el elemento.
28. **```X:only-child```** Te permite afectar elementos que sean los únicos hijos de su padre. 
29. **```X:only-of-type```** Esta pseudo clase estructural puede ser usada en maneras inteligentes. Afectará elementos que no tienen hermanos dentro de su contenedor padre. Como ejemplo, afectemos a todos los uls, que tengan sólo un elemento de lista.
30. **```X:first-of-type```** La pseudo clase first-of-type te permite seleccionar los primeros hermanos de su tipo.
