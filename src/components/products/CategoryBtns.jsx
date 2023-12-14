import { useEffect, useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

export default function CategoryBtns() {

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
            {categories.map(category =>
                <Button
                    key={Math.random()}
                    variant="secondary"
                    name={category}
                    onClick={(ev) => setFilterValue(ev.target.name)}
                >{category}</Button>)}
        </ButtonGroup>
    )
}
