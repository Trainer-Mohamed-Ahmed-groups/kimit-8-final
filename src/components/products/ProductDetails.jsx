import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
export default function ProductDetails() {

    const params = useParams()

    let [product, setProduct] = useState([])

    let getProduct = () => {
        fetch('http://localhost:3000/products/' + params.productID)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error(error));
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <div className="text-center m-4">
            <h1>ProductDetails</h1>
            {console.log(product)}
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <img src={product.image} alt={product.title} />
            <h3>Category : {product.category}</h3>
        </div>
    )
}
