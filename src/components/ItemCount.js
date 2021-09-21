import React, { useState } from "react";

export const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);
    
    const disminuirCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const aumentarCount = () => {
        if (count < stock) {
            setCount(count + 1);
        }
        
    }

    const agregarCarrito = () => {
        onAdd(count);
    }

    return (
        <div className="itemCount">
            <div className="divCantidad">
                <span onClick={disminuirCount} className="disminuirItem">-</span><span className="cantidadItem">{count}</span><span onClick={aumentarCount} className="aumentarItem">+</span>
            </div>
            <button onClick={agregarCarrito}>Agregar al Carrito</button>
        </div>
    );
}