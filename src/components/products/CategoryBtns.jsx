/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { getProducts } from '../../helpers/fetch';
export default function CategoryBtns({ handleFilter, setProducts }) {

    let [categories, setCategories] = useState([])
    let [filterValue, setFilterValue] = useState("")

    let getCategories = () => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error));
    }

    useEffect(() => {
        getCategories()
    }, [])
    return (
        <ButtonGroup aria-label="Basic example">
            <Button
                key={Math.random()}
                variant="secondary"
                onClick={() => getProducts(setProducts)}
            >All</Button>
            {categories.map(category =>
                <Button
                    key={Math.random()}
                    variant="secondary"
                    // onClick={(ev) => setFilterValue(ev.target.name)}
                    onClick={() => handleFilter(category)}
                >{category}</Button>)}
        </ButtonGroup>
    )
}
