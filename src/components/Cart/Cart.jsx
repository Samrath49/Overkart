import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyle from './styles';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {

    const style = useStyle();

    const EmptyCart = () => {
        <Typography variant="subtitle1">You don't have any items currently in your cart,
            <Link className={style.link} to='/'>start adding some items</Link>!
        </Typography>
    };

    const FilledCart = () => {
        return (
            <>
                <Grid container spacing={3}>
                    {cart.line_items.map((item) => (
                        <Grid item xs={12} sm={4} key={item.id}>
                            <CartItem item={item} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} />
                        </Grid>
                    ))}
                </Grid>
                <div className={style.cardDetails}>
                    <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                    <div>
                        <Button className={style.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
                        <Button className={style.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                    </div>
                </div>
            </>
        )
    };

    if (!cart.line_items) return 'Loading...';
    return (
        <Container>
            <div className={style.toolbar} />
            <Typography className={style.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
