import { Link } from "react-router-dom"
import { useCartContext } from "../context/cartContext"


export const Cart = () => {
    
    const { cartList, deleteCart, deleteList, precioTotal } = useCartContext()

    return (
        <>
            {(cartList == false) ?   
                <div>
                    <p>No hay productos en el carrito</p>
                    <Link to={'/'}>    
                        <button>Agregar Productos</button>
                    </Link>
                </div>
                :
                <div>
                    {cartList.map(producto =>
                        <div key={producto.id}>
                            <p>{producto.producto.nombre}</p>
                            <p>{producto.cantidad}</p>
                            <p>{producto.producto.precio * producto.cantidad}</p>
                            <button onClick={() => deleteCart(producto)}>X</button>
                        </div>)}
                    <p>precio total: ${precioTotal()}</p>
                    <div>
                        <button onClick={() => deleteList()}>Vaciar Carrito</button>
                    </div>
                </div>
            }
        </>
    )
}