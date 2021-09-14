const productos = [
    { id: 1, image: 'assets/images/amoladora-makita.jpg', nombre: 'Amoladora', precio: 4000 },
    { id: 2, image: 'assets/images/taladro-makita.jpg', nombre: 'Taladro', precio: 3000 },
    { id: 3, image: 'assets/images/sierra-makita.jpg', nombre: 'Sierra', precio: 6000 },
    { id: 4, image: 'assets/images/fresadora-makita.jpg', nombre: 'Fresadora', precio: 15000 },
    { id: 5, image: 'assets/images/caladora-makita.jpg', nombre: 'Caladora', precio: 5000 },
];

export const getFetch = new Promise ((res) => {


    setTimeout( () => {
        res(productos)
    }, 3000)

})

