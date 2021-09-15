import { useEffect, useState } from "react"
import { getFetchProducto } from "../utils/Mock"
import { ItemDetail } from "./ItemDetail"


export const ItemDetailContainer = () => {
    const [producto, setProdcuto] = useState({})

    useEffect(() => {
        getFetchProducto
        .then(res => setProdcuto(res))
    }, [])

    return (
        <>
            <ItemDetail producto={producto} />
        </>
    )
}