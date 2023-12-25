export let getProduct = (setProduct, params) => {
    fetch('http://localhost:3000/products/' + params.productID)
        .then(response => response.json())
        .then(data => setProduct(data))
        .catch(error => console.error(error));
}


export let deleteProduct = (id) => {
    fetch(`http://localhost:3000/products/${id}`,
        { method: 'DELETE' }).then(() => console.log("OK"))
}

export let getSingleProduct = (setProduct, params) => {
    fetch('http://localhost:3000/products/' + params.productID)
        .then(response => response.json())
        .then(data => setProduct(data))
        .catch(error => console.error(error));
}



export let getProducts = (setProducts) => {
    fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error(error));
}