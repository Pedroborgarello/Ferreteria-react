import { useState } from 'react';
import { ItemCount } from './ItemCount';

export const ItemDetail = ({productos}) => {
    const [cantidadSelc, setCantidadSelec] = useState(0)

    const onAdd = (cantidad) => {
        console.log(cantidad + productos.nombre);
    }

    return (
        <div key={productos.id} className='cardProducto'>
            <img className='cardImage' src={productos.image} alt='imagen' />
            <div className='cardFooter'>
                <p>{productos.nombre}</p>
                <p>${productos.precio}</p>
                <ItemCount stock={productos.stock} initial={1} onAdd={onAdd} />
            </div>
        </div>
    )
}