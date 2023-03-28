import { useEffect, useState } from "react"
import { getData } from "../../helpers/getData"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'



const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()
    
    useEffect(() => {
        setLoading(true)

        getData()
            .then((res) => {
                setItem( res.find((prod) => prod.id === Number(itemId)) )
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    return (
        <div className="container my-5">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemDetail item={item}/>
            }
        </div>
    )
}

export default ItemDetailContainer