import { useParams } from "react-router-dom"

const ProductDetail = () => {
    const { id } = useParams()

    return <h1>ID : {id}</h1>
}

export default ProductDetail