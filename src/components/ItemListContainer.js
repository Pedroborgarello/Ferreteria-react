import { ItemCount } from './ItemCount';

export const ItemListContainer = ({greeting}) => {
    
    const onAdd = (cantidad) => {
        console.log(cantidad);
    }

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemCount stock={7} initial={1} onAdd={onAdd}/>
        </div>
    );
}