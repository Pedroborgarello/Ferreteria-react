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
    
    const [validar, setValidar] = useState(0);
    
    const [idCompra, setIdCompra] = useState('')

    const { cartList, deleteCart, deleteList, precioTotal } = useCartContext()
    
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

        if (formData.name !== '') {
            if (formData.surname !== '') {
                if (formData.province !== '') {
                    if (formData.location !== '') {
                        if (formData.address !== '') {
                            if (formData.phone !== '') {
                                if (formData.email !== '') {
                                    if (formData.email.includes('@')) {
                                        const dbQuery = getFirestore()
                                        dbQuery.collection('orders').add(order)
                                        .then(res => {
                                            setIdCompra(res.id)
                                        })
                                        .catch(err => console.log(err))
                                        .finally(() => {
                                            deleteList()
                                        })

                                        const itemsUpdate = dbQuery.collection('productos').where(
                                            firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i => i.producto.id)
                                        )

                                        const batch = dbQuery.batch();

                                        itemsUpdate.get()
                                        .then( collection => {
                                            collection.docs.forEach(docSnapshot => {
                                                batch.update(docSnapshot.ref, {
                                                    stock: docSnapshot.data().stock - cartList.find( producto => producto.producto.id === docSnapshot.id).cantidad
                                                })
                                            })

                                            batch.commit()
                                                
                                            
                                        })

                                    } else {
                                        setValidar(8)
                                    }
                                } else {
                                    setValidar(7)
                                }
                            } else {
                                setValidar(6)
                            }
                        } else {
                            setValidar(5)
                        }
                    } else {
                        setValidar(4)
                    }
                } else {
                    setValidar(3)
                }
            } else {
                setValidar(2)
            }
        } else {
            setValidar(1)
        }
        
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
                <div className="cartContainer endBuy">
                    {(idCompra == '') ?
                        <p className='cartMnsj'>No hay productos en el carrito</p>
                        :
                        <div>
                            <p className='cartMnsj'>Su código de compra es: </p>
                            <p className='cartCodeBuy'>{idCompra}</p>
                        </div>
                    }
                    <Link to={'/'}>    
                        <button className='cartAddItems'>volver a inicio</button>
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
                    <div className='precioTotal'>
                        <p className='precioTitle'>precio total:</p>
                        <p className='precioNum'>${precioTotal()}</p>
                    </div>    
                    <div className='btnsCart'>
                        <button onClick={() => deleteList()}><img src='https://i.ibb.co/RYKxbk8/dump.png' width='18' alt='dump'/>Vaciar Carrito</button>
                        <Link to={'/'}>
                            <button>+ Seguir Comprando</button>
                        </Link>           
                    </div>
                    <form 
                        className='formCart'
                        onChange={handleChange}
                    >
                        <label for='name'>nombre:</label>
                        <div className='inputContainer'>
                            <input type='text' name='name' placeholder='Ingrese su nombre' value={formData.name} /><span className={validar === 1 ? 'inputFalse' : 'inputTrue'}><img src='https://i.ibb.co/Z27Srm6/dialogerror-92823.png' width='25' alt='error' /> campo obligatorio</span>
                        </div>
                        <label for='surname'>apellido:</label>
                        <div className='inputContainer'>
                            <input type='text' name='surname' placeholder='Ingrese su apellido' value={formData.surname} /><span className={validar === 2 ? 'inputFalse' : 'inputTrue'}><img src='https://i.ibb.co/Z27Srm6/dialogerror-92823.png' width='25' alt='error' /> campo obligatorio</span>
                        </div>
                        <label for='province'>provincia:</label>
                        <div className='inputContainer'>
                            <input type='text' name='province' placeholder='Ingrese la provincia' value={formData.province} /><span className={validar === 3 ? 'inputFalse' : 'inputTrue'}><img src='https://i.ibb.co/Z27Srm6/dialogerror-92823.png' width='25' alt='error' /> campo obligatorio</span>
                        </div>
                        <label for='location'>localidad:</label>
                        <div className='inputContainer'>
                            <input type='text' name='location' placeholder='Ingrese la localidad' value={formData.location} /><span className={validar === 4 ? 'inputFalse' : 'inputTrue'}><img src='https://i.ibb.co/Z27Srm6/dialogerror-92823.png' width='25' alt='error' /> campo obligatorio</span>
                        </div>
                        <label for='address'>dirección:</label>
                        <div className='inputContainer'>
                            <input type='text' name='address' placeholder='Ingrese la dirección' value={formData.address} /><span className={validar === 5 ? 'inputFalse' : 'inputTrue'}><img src='https://i.ibb.co/Z27Srm6/dialogerror-92823.png' width='25' alt='error' /> campo obligatorio</span>
                        </div>
                        <label for='phone'>teléfono:</label>
                        <div className='inputContainer'>
                            <input type='text' name='phone' placeholder='Ingrese un número de Tel.' value={formData.phone} /><span className={validar === 6 ? 'inputFalse' : 'inputTrue'}><img src='https://i.ibb.co/Z27Srm6/dialogerror-92823.png' width='25' alt='error' /> campo obligatorio</span>
                        </div>
                        <label for='email'>email:</label>
                        <div className='inputContainer'>
                            <input type='email' name='email' placeholder='Ingrese su email' value={formData.email} /><span className={validar === 7 || 8 ? 'inputFalse' : 'inputTrue'}>{validar === 8 ? <div><img src='https://i.ibb.co/Z27Srm6/dialogerror-92823.png' width='25' alt='error' /><p>debe incluir el @</p></div> : validar === 7 ? <div><img src='https://i.ibb.co/Z27Srm6/dialogerror-92823.png' width='22' alt='error' /><p>campo obligatorio</p></div> : '' }</span>
                        </div>
                        <button onClick={handleSubmit}>Finalizar compra</button>
                    </form>
                </div>
            }

        </>
    )
}
