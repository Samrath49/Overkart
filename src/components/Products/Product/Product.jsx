import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyle from './styles';

const Product = ({ product }) => {
    const style = useStyle();
    return (
        <Card className={style.root}>
            <CardMedia className={style.media} image={product.image} title={product.name} />
            <CardContent>
                <div className={style.CardContent}>
                    <Typography variant='h5' gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant='h5'>
                        {product.price}
                    </Typography>
                </div>
                <Typography variant='body2' color='textSecondary'>{product.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={style.cardActions}>
                <IconButton aria-label='Add to Cart'>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
