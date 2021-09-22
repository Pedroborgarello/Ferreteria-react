const productos = [
    { id: 1, categoria: 'electricas', image: 'https://i.ibb.co/YjSyxgq/amoladora-makita.jpg', nombre: 'Amoladora', precio: 4000 },
    { id: 2, categoria: 'electricas', image: 'https://i.ibb.co/GVfQwk7/taladro-makita.jpg', nombre: 'Taladro', precio: 3000 },
    { id: 3, categoria: 'electricas', image: 'https://i.ibb.co/GvvBsJD/sierra-makita.jpg', nombre: 'Sierra', precio: 6000 },
    { id: 4, categoria: 'electricas', image: 'https://i.ibb.co/BtH27LM/fresadora-makita.jpg', nombre: 'Fresadora', precio: 15000 },
    { id: 5, categoria: 'electricas', image: 'https://i.ibb.co/BGbLmwy/caladora-makita.jpg', nombre: 'Caladora', precio: 5000 },
    { id: 6, categoria: 'manuales', image: 'https://i.ibb.co/DQ0HkHw/limas-bahco.jpg', nombre: 'Set Limas', precio: 4000 },
    { id: 7, categoria: 'manuales', image: 'https://i.ibb.co/swHvCZg/serrucho-bahco.jpg', nombre: 'Serrucho', precio: 3000 },
];

export const getFetch = new Promise ((res) => {


    setTimeout( () => {
        res(productos)
    }, 3000)

})

// const producto = productos.find(item => item.id === idProducto)

// export const getFetchProducto = new Promise ((res) => {

//     setTimeout(() => {
//         res(producto)
//     }, 2000)
// })