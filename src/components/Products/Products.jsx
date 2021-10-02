import React from 'react'
import { Grid } from "@material-ui/core";
import Product from './Product/Product';
import useStyles from './styles';

const products = [
    { id: 1, name: "Jacket", price: '$800', description: "Leather jacket", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80" },
    { id: 2, name: "Shirt", price: '$350', description: "Lwo Shirt", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80" }
]

const Products = () => {
    const style = useStyles();
    return (
        <main className={style.content}>
            <div className={style.toolbar} />
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
