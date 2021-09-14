import { useEffect, useState } from 'react';
import { getFetch } from '../utils/Mock';
import { ItemCount } from './ItemCount';
import { ItemList } from './ItemList';

export const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const onAdd = (cantidad) => {
        console.log(cantidad);
    }

    useEffect(() => {
        getFetch
        .then(res => {
            setProductos(res)
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))

    }, [])

    return (
        <div>
            <h1>{greeting}</h1>
            { loading ? <h2>Cargando..</h2> : <ItemList productos={productos} />}
            <ItemCount stock={7} initial={1} onAdd={onAdd}/>
        </div>
    );
}