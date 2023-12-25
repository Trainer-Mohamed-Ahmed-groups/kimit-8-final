import { useEffect, useState } from "react";
import { Spinner, Container, Row } from 'react-bootstrap';
import ProductCard from "../components/products/ProductCard";
import CategoryBtns from "../components/products/CategoryBtns";
import { getProducts } from "../helpers/fetch";

export default function Products() {

    let [products, setProducts] = useState([])

    let handleFilter = (filteredCategory) => {
        console.log(filteredCategory)
        fetch("https://fakestoreapi.com/products/category/" + filteredCategory)
            .then(res => res.json())
            .then(res => setProducts(res))
    }

    useEffect(() => {
        getProducts(setProducts)
    }, [])
    return (
        <div className="text-center p-4">
            <h2>Products : {products.length}</h2>
            <Container className="mt-4">
                <CategoryBtns handleFilter={handleFilter} setProducts={setProducts} />
                <Row>
                    {
                        products.length > 0
                            ? products.map(product =>
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    setProducts={setProducts}
                                />
                            ) :
                            <Spinner animation="border" />
                    }
                </Row>
            </Container>
        </div >
    )
}
