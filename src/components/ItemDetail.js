

export const ItemDetail = ({producto}) => {

    return (
        <>
            <p>{producto.id}</p>
            <p>{producto.nombre}</p>
            <p>{producto.precio}</p>
        </>
    )
}