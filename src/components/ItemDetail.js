
import { ItemCount } from './ItemCount';

export const ItemDetail = ({productos}) => {

    const onAdd = (cantidad) => {
        console.log(cantidad);
    }

    return (
        <div key={productos.id} className='cardProducto'>
            <img className='cardImage' src={productos.image} alt='imagen' />
            <div className='cardFooter'>
                <p>{productos.nombre}</p>
                <p>${productos.precio}</p>
                <ItemCount stock={7} initial={1} onAdd={onAdd} />
            </div>
        </div>
    )
}