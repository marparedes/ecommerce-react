import React from 'react';
import Links from '../components/Links';
import CartIcon from '../components/CartIcon';
import icon from '../assets/shopping-cart.svg'


function Navbar() {
    return <nav className="navbar navbar-fixed-top navbar-expand-md navbar-light light-blue lighten-4" >
        <Links/>
        <CartIcon icon={icon}/>
    </nav>
}

export default Navbar;