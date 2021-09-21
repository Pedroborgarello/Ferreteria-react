import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getFetch } from "../utils/Mock"
import { ItemDetail } from "./ItemDetail"
 


export const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([])
    const { idProducto } = useParams();

    useEffect(() => {
        
        if (idProducto) {
            getFetch
                .then(res => {
                    setProductos(res.filter((producto) => producto.id === idProducto))
                })
                .catch(err => console.log(err))
        } else {
            getFetch
                .then(res => {
                    setProductos(res)
                })
                .catch(err => console.log(err))
        }
    }, [idProducto])

    return (
        <>
            <ItemDetail productos={productos} />
        </>
    )
}