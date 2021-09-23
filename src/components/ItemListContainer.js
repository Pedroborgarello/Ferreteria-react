import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFetch } from '../utils/Mock';
// import { ItemCount } from './ItemCount';
import { ItemList } from './ItemList';

export const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategoria } = useParams()

    useEffect(() => {
        
        if (idCategoria) {
            getFetch
                .then(res => {
                    setProductos(res.filter(producto => producto.categoria === idCategoria ))
                })
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        } else {
            getFetch
            .then(res => {
                setProductos(res)
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