
import { useCartContext } from '../context/cartContext';
import { ItemCount } from './ItemCount';

export const ItemDetail = ({productos}) => {

    const {addToCart} = useCartContext()

    const onAdd = (cantidad) => {
        addToCart({producto: productos, cantidad: cantidad})

    }

    return (
        <div className='containerDetail'>
            <div key={productos.id} className='cardDetailProducto'>
                <div className='containerDetailImage'>
                    <img className='cardDetailImage' src={productos.image} alt='imagen' />
                </div>
                <div className='cardDetailFooter'>
                    <h2>{productos.nombre}</h2>
                    <p className='detailPrice'>${productos.precio}</p>
                    <div className='detailDescription'>
                        <h3 style={{ fontSize: 30 }}>descripción: </h3>
                        <p style={{fontSize: 20}}>{productos.descripcion}</p>
                    </div>
                    <ItemCount stock={productos.stock} initial={productos.stock !== 0 ? 1 : 0} onAdd={onAdd} />
                </div>
            </div>
        </div>
    )
}