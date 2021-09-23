const productos = [
    { id: 1, categoria: 'electricas', image: 'https://i.ibb.co/YjSyxgq/amoladora-makita.jpg', nombre: 'Amoladora', precio: 4000, stock: 5 },
    { id: 2, categoria: 'electricas', image: 'https://i.ibb.co/GVfQwk7/taladro-makita.jpg', nombre: 'Taladro', precio: 3000, stock: 7 },
    { id: 3, categoria: 'electricas', image: 'https://i.ibb.co/GvvBsJD/sierra-makita.jpg', nombre: 'Sierra', precio: 6000, stock: 15 },
    { id: 4, categoria: 'electricas', image: 'https://i.ibb.co/BtH27LM/fresadora-makita.jpg', nombre: 'Fresadora', precio: 15000, stock: 2 },
    { id: 5, categoria: 'electricas', image: 'https://i.ibb.co/BGbLmwy/caladora-makita.jpg', nombre: 'Caladora', precio: 5000, stock: 11 },
    { id: 6, categoria: 'manuales', image: 'https://i.ibb.co/DQ0HkHw/limas-bahco.jpg', nombre: 'Set Limas', precio: 4000, stock: 20 },
    { id: 7, categoria: 'manuales', image: 'https://i.ibb.co/swHvCZg/serrucho-bahco.jpg', nombre: 'Serrucho', precio: 3000, stock: 17 },
];

export const getFetch = new Promise ((res) => {


    setTimeout( () => {
        res(productos)
    }, 3000)

})
