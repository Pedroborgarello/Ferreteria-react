import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../context/cartContext"
import firebase from "firebase"
import 'firebase/firestore'
import { getFirestore } from "../services/getFirebase"


export const Cart = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        province: '',
        location: '',
        address: '',
        phone: '',
        email: ''
    })

    const [idCompra, setIdCompra] = useState('')

    const { cartList, deleteCart, deleteList, precioTotal } = useCartContext()
    
    let validarId = true
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        let order = {}
        order.date = firebase.firestore.Timestamp.fromDate(new Date());
        
        order.buyer =  formData;
        
        order.total = precioTotal()
        
        order.items = cartList.map(producto => {
            const id = producto.producto.id;
            const title = producto.producto.nombre;
            const count = producto.cantidad;
            const price = producto.producto.precio * producto.cantidad;
            
            return {id, title, count, price}
        })
        
        const dbQuery = getFirestore()
        dbQuery.collection('orders').add(order)
        .then(res => {
            setIdCompra(res.id)
        })
        .catch(err => console.log(err))
        .finally(() => {
            deleteList()
        })
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            {(cartList == false) ?   
                <div className="cartContainer">
                    {(idCompra == '') ?
                        <p>No hay productos en el carrito</p>
                        :
                        <p>Su código de compra es: {idCompra}</p>
                    }
                    <Link to={'/'}>    
                        <button>Agregar Productos</button>
                    </Link>
                </div>
                :
                <div className="cartContainer">
                    {cartList.map(producto =>
                        <div className="itemCart" key={producto.producto.id}>
                            <Link to={`/detalle/${producto.producto.id}`}>
                                <img src={producto.producto.image} width="100" alt={producto.producto.nombre}/>
                            </Link>
                            <p className="itemNombre">{producto.producto.nombre}</p>
                            <p>{producto.cantidad}</p>
                            <p >total: ${producto.producto.precio * producto.cantidad}</p>
                            <button onClick={() => deleteCart(producto)}>X</button>
                        </div>)}
                    <p>precio total: ${precioTotal()}</p>
                    <div>
                        <button onClick={() => deleteList()}>Vaciar Carrito</button>
                        <Link to={'/'}>
                            <button>Seguir Comprando</button>
                        </Link>           
                    </div>
                    <form 
                        // onSumbit={handleSubmit}
                        onChange={handleChange}
                    >
                        <input type='text' name='name' placeholder='Ingrese su nombre' value={formData.name}/>
                        <input type='text' name='surname' placeholder='Ingrese su apellido' value={formData.surname}/>
                        <input type='text' name='province' placeholder='Ingrese la provincia' value={formData.province}/>
                        <input type='text' name='location' placeholder='Ingrese la localidad' value={formData.location}/>
                        <input type='text' name='address' placeholder='Ingrese la dirección' value={formData.address}/>
                        <input type='text' name='phone' placeholder='Ingrese un número de Tel.' value={formData.phone}/>
                        <input type='email' name='email' placeholder='Ingrese su email' value={formData.email}/>
                        <button onClick={handleSubmit}>Finalizar compra</button>
                    </form>
                </div>
            }
        </>
    )
}

const initialState = {
    name: '',
    surname: '',
    province: '',
    location: '',
    address: '',
    phone: '',
    email: ''
}