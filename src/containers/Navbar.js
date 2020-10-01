import React from 'react';
import Links from '../components/Links';
import CartIcon from '../components/CartIcon';
import icon from '../assets/shopping-cart.svg';
import { useCartContext } from '../components/CartContext';



function Navbar() {

    const { cant } = useCartContext();

    return <nav className="navbar navbar-fixed-top navbar-expand-md navbar-light light-blue lighten-4 backgroundNavbar" >
        <Links/>
        <CartIcon icon={icon} cant={cant}/>
    </nav>
}

export default Navbar;