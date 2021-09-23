import React, { useState } from "react";
import { Link } from "react-router-dom";

export const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);
    const [cambiarButton, setCambiarbutton] = useState(true);
    
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
        setCambiarbutton(false);
    }

    return (
        <div className="itemCount">
            <div className="divCantidad">
                <span onClick={disminuirCount} className="disminuirItem">-</span><span className="cantidadItem">{count}</span><span onClick={aumentarCount} className="aumentarItem">+</span>
            </div>
            { cambiarButton ?
                <button className='btAgregar' onClick={agregarCarrito}>Agregar al Carrito</button>
                :
                <Link to={'/cart'}>
                    <button className='btTerminar'>Terminar Compra</button>
                </Link>     
            }
            <div className='stock'>
                <p>{stock} unidades disponibles</p>
            </div>
        </div>
    );
}