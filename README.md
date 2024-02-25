# UI Test


## Quick start


1.  Asegurarse de tener instalada una versión de Node.js igual o superior a 10.13
2.  Clonar el repositorio ``
3.  En la carpeta raíz corre el comando `npm run install:all` y espera a que se instalen todos los módulos de Node
4.  En la carpeta raíz corre el comando `npm run dev`
5.  La aplicación queda expuesta en http://localhost:3000/
6.  Happy Code


## Decisiones tecnológicas:



### Front End


Para el desarrollo de Front End se decidió utilizar el framework Next JS debido a que facilita la creación de aplicaciones server-side-render utilizando como base React JS. Se escogió esta tecnología principalmente porque ofrece una mejor performance y SEO al estar renderizando el HTML de la aplicación desde el servidor.
La velocidad de renderizado en este caso depende de la capacidad de procesamiento del servidor lo que mejora los tiempos de carga en algunos casos. De este modo, también se podrían crear varias instancias de la aplicación según el crecimiento de las peticiones.
se utilizo para el manejo de estados especificos por componente useState, adicionalmente, se utilizo un context para manejar el estado de si es grid o list y que llegue a diferentes componentes que se quieran de una rama del DOM.


### Back End


Al tener un poco de experiencia para el back, y analizando que la Para el Back End se utilizó Node JS junto Express lo que facilitó la creación del api y las rutas de los diferentes endpoints.

