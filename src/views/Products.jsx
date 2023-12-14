import { useEffect, useState } from "react";
import { Spinner, Container, Row } from 'react-bootstrap';
import ProductCard from "../components/products/ProductCard";
import CategoryBtns from "../components/products/CategoryBtns";

export default function Products() {

    let [products, setProducts] = useState([])
    let getProducts = () => {
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error(error));
    }

    useEffect(() => {
        getProducts()
    }, [])
    return (
        <div className="text-center p-4">
            <h2>Products</h2>
            <Container className="mt-4">
                <CategoryBtns />
                <Row>
                    {
                        products.length > 0
                            ? products.map(product =>
                                <ProductCard key={product.id} product={product} />
                            ) :
                            <Spinner animation="border" />
                    }
                </Row>
            </Container>
        </div >
    )
}
