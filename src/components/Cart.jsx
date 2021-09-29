import { useCartContext } from "../context/cartContext"


export const Cart = () => {
    
    const { cartList, deleteCart, deleteList, precioTotal } = useCartContext()

    return (
        <>
            {cartList.map(producto => 
            <div key={producto.id}>
                <p>{producto.producto.nombre}</p>
                <p>{producto.cantidad}</p>
                <p>{producto.producto.precio * producto.cantidad}</p>
                <button onClick={ () => deleteCart(producto) }>X</button>
            </div>)}
            {precioTotal()}
            <div>
                <button onClick={() => deleteList() }>Vaciar Carrito</button>
            </div>
        </>
    )
}