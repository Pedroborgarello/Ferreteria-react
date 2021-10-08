import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getFirestore } from "../services/getFirebase"
// import { getFetch } from "../utils/Mock"
import { ItemDetail } from "./ItemDetail"
 


export const ItemDetailContainer = () => {
    const [productos, setProductos] = useState({})
    const { idProducto } = useParams();

    useEffect(() => {
        
        const dbQuery = getFirestore()
        dbQuery.collection('productos').doc(idProducto).get()
        .then(res => {
            if (res.exists) {
                setProductos({ id: res.id, ...res.data() })
            }

        })
        .catch(err => console.log(err))
    }, [idProducto])

    return (
        <>
            <ItemDetail productos={productos} />
        </>
    )
}