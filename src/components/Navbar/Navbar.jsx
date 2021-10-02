import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/overkart2.png';
import useStyle from './styles';

const Navbar = () => {
    const style = useStyle();
    return (
        <>
            <AppBar position="fixed" className={style.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={style.title} color="inherit">
                        <img src={logo} alt="Overkart" height="45px" className={style.image} />
                        Overkart
                    </Typography>
                    <div className={style.grow} />
                    <div className={style.button}>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
