import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/overkart2.png';
import { Link, useLocation } from 'react-router-dom';
import useStyle from './styles';

const Navbar = ({ totalItems }) => {
    const style = useStyle();
    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={style.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/  " variant="h6" className={style.title} color="inherit">
                        <img src={logo} alt="Overkart" height="45px" className={style.image} />
                        Overkart
                    </Typography>
                    <div className={style.grow} />
                    {location.pathname === '/' && (
                        <div className={style.button}>
                            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                                <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>)}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
