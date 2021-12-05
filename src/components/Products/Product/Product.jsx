import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyle from './styles';

const Product = ({ product, onAddToCart }) => {
    const style = useStyle();

    return (
        <Card className={style.root}>
            <CardMedia className={style.media} image={product.image.url} title={product.name} />
            <CardContent>
                <div className={style.cardContent}>
                    <Typography variant='h5' gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant='h5'>
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant='body2' color='textSecondary' />
            </CardContent>
            <CardActions disableSpacing className={style.cardActions}>
                <IconButton aria-label='Add to Cart' onClick={() => { onAddToCart(product.id, 1) }}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
