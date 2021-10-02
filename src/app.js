import React, { useState, useEffect } from 'react'
import { Products, Navbar } from './components'
import { commerce } from './lib/commerce';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }

    const fetchCart = async () => {
        const cart = await commerce.cart.retrieve();
        setCart(cart);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    console.log(cart);

    return (
        <div>
            <Navbar />
            <Products products={products} />
        </div>
    )
}

export default App
