# Proyecto Final CoderHouse-ecommerce
## Ferretería El Chañar

Proyecto realizado con React js en el curso de Coder House, pensado para una tienda basica 
- Duracíon de 7 semanas
- 4hs semalanes

## Características

- Desarrollado con create-react-app.
- Incorporando react-bootstrap v5.1.3, solo en modo aprendizaje, exportando componentes tales como el NavBar.
- Para la parte del backend, se utilizó la librería de Firebase para agilizar el proyecto.
- En la navegación por la página se utilizó react-router-dom.

El proyecto se basa en la tienda de una ferretería. Esta cuenta con un home con un NavBar que contiene las categorías en las que se dividen los productos, y un listado con todos ellos a la venta. Para navegar en ella se usó ract-router-dom linkeando las categorías y mostrando cada producto que pertenece a ellas. Las cards de cada producto contienen la información del mismo con un botón de "detalles". Este, al hacer click, muestra solo el producto deseado con más información para poder comprarlo. Dentro de este se encuentra el componente itemCount, el cual contiene un contador para seleccionar la cantidad deseada a comprar si el stock lo permite. En un principio se empleó un async-mocks que contiene los productos con su información y la promesa. Luego se utilizó useEffect y useState donde se usa la promesa, para así guardarlos y renderizarlos. Sin embargo, despúes fue reemplazado por la librería Firebase. Una vez adquiridos los productos deseados, empleando context se usa esa información en el componente Cart, ahí se encontrarán con los productos a comprar y un formulario a rellenar con los datos del comprador, este cuenta con una validación simple para que ningún campo quede vacío, una vez clickeado en "finalizar compra" los datos del cliente y de los productos son guardados en Firebase.

