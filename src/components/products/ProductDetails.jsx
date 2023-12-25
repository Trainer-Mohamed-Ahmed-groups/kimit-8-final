import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getSingleProduct } from "../../helpers/fetch"
export default function ProductDetails() {

    const params = useParams()

    let [product, setProduct] = useState([])

    useEffect(() => {
        getSingleProduct(setProduct, params)
    }, [])

    return (
        <div className="text-center m-4">
            <h1>ProductDetails</h1>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <img src={product.image} alt={product.title} width="200" />
            <h3>Category : {product.category}</h3>
            <Link to={`/edit/${product.id}`} className='btn btn-warning w-75 mx-auto'>Edit</Link>
        </div>
    )
}
