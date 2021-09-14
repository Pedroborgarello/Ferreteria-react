
export const Item = ({producto}) => {
    return (
        
        <div key={producto.id} className='cardProducto'>
            <img className='cardImage' src={producto.image} alt='imagen' />
            <div className='cardFooter'>
                <p>{producto.nombre}</p>
                <p>${producto.precio}</p>
                <button>detalles</button>
            </div>
        </div>
    )
}