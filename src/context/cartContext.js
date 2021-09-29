import { useState, createContext, useContext } from "react";

const cartContext = createContext([])

export const useCartContext = () => useContext(cartContext)

export default function CartContextProvider ({children}) {
    const [ cartList, setCartList ] = useState([])

    const addToCart = (data) => {
        let prevCart = [...cartList]

        if (prevCart.some(i => i.producto.id === data.producto.id)) {
            prevCart.find(i => i.producto.id === data.producto.id).cantidad += data.cantidad
            setCartList(prevCart)
        } else {
            setCartList([...cartList, data])
        }
    }

    const deleteCart = (data) => {
        const deleteProducto = cartList.filter((prod) => prod.producto.id !== data.producto.id);

        setCartList([...deleteProducto]);
    }

    const iconCart = () => {
        return cartList.reduce( (acum, producto) => acum + producto.cantidad, 0)
    }

    const precioTotal = () => {
        return cartList.reduce((acum, producto) => (acum + (producto.cantidad * producto.producto.precio)), 0)
    }

    function deleteList() {
        setCartList([])
    }

    // console.log(cartList);
    return (
        <cartContext.Provider value={{
            cartList,
            addToCart,
            deleteCart,
            iconCart,
            precioTotal,
            deleteList
        }}>
            {children}
        </cartContext.Provider>    
    )
}