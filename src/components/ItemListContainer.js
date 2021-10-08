import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../services/getFirebase';
// import { getFetch } from '../utils/Mock';
import { ItemList } from './ItemList';

export const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategoria } = useParams()

    useEffect(() => {
        
        if (idCategoria) {
            const dbQuery = getFirestore()
            dbQuery.collection('productos').where('categoria', '==', idCategoria).get()
            .then(res => {
                setProductos( res.docs.map( productos => ( { id: productos.id, ...productos.data() } ))) 
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        } else {
            const dbQuery = getFirestore()
            dbQuery.collection('productos').get()
            .then(res => {
                setProductos(res.docs.map(productos => ({ id: productos.id, ...productos.data() })))
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }
        
    }, [idCategoria])

    return (
        <div>
            <h1 className='greeting'>{greeting}</h1>
            <div className='productosContainer'>
                { loading ? <h2>Cargando..</h2> : <ItemList productos={productos} />}
            </div>
        </div>
    );
}