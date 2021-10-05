import { useState } from 'react';
import { useCartContext } from '../context/cartContext';
import { ItemCount } from './ItemCount';

export const ItemDetail = ({productos}) => {
    const [cantidadSelc, setCantidadSelec] = useState(0)

    const {addToCart} = useCartContext()

    const onAdd = (cantidad) => {
        console.log(cantidad + productos.nombre);
        addToCart({producto: productos, cantidad: cantidad})
    }

    return (
        <div key={productos.id} className='cardProducto'>
            <img className='cardImage' src={productos.image} alt='imagen' />
            <div className='cardFooter'>
                <p>{productos.nombre}</p>
                <p>${productos.precio}</p>
                <p>descripcion:</p>
                <p>{productos.descripcion}</p>
                <ItemCount stock={productos.stock} initial={1} onAdd={onAdd} />
            </div>
        </div>
    )
}