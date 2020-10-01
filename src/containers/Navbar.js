import React from 'react';
import Links from '../components/Links';
import CartIcon from '../components/CartIcon';
import icon from '../assets/shopping-cart.svg';
import { useCartContext } from '../components/CartContext';
import logo from '../assets/logo1.png';
import { Link } from 'react-router-dom';


function Navbar() {

    const { cant } = useCartContext();

    return <nav className="navbar navbar-fixed-top navbar-expand-md navbar-light light-blue lighten-4 backgroundNavbar" >
        <Link to={'/'}>
            <img id="logo" src={logo} width="120px" alt="" className="backgroundNavbar" style={{margin:"0px 15vh", position:"relative"}}/>
        </Link>
        <Links/>
        <CartIcon icon={icon} cant={cant}/>
    </nav>
}

export default Navbar;