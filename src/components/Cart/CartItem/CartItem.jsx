import React from 'react'
import { Typography, Button, Card, CardActions, CreateContent, CardMedia, CardContent } from '@material-ui/core'
import useStyle from './style';

const CartItem = ({ item, handleUpdateCartQty, handleRemoveFromCart }) => {
    const style = useStyle();
    return (
        <Card>
            <CardMedia image={item.image.url} alt={item.name} className={style.media} />
            <CardContent className={style.cardContent}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h6">{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={style.cardActions}>
                <div className={style.buttons}>
                    <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem
