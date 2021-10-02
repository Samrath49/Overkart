import React from 'react'
import Grid from "@material-ui/core";
import Product from './Product/Product';

const products = [
    { id: 1, name: "Jacket", price: '$800', description: "Leather jacket" },
    { id: 2, name: "Shirt", price: '$350', description: "Lwo Shirt" }
]

const Products = () => {
    return (
        <main>
            <Grid container justify='center' spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.key} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products
