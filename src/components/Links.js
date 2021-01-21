import React from 'react';
import {Link} from 'react-router-dom';

const menuPrincipal = {
    display: 'inline',
    textAlign: 'center',
    marginRight: 30,
    fontFamily: 'Raleway',
    fontSize: 18
}

const Links = () => {
    return  <>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div  id="navbarSupportedContent1" className="collapse navbar-collapse flex-grow-1 text-right menu backgroundNavbar">
        <ul className="navbar-nav ml-auto flex-nowrap backgroundNavbar">
            <li className="nav-item backgroundNavbar" style={menuPrincipal}>
                <Link className="nav-link linksMenu" to={'/'}>INICIO</Link>
            </li>
            <li className="nav-item dropdown backgroundNavbar" style={menuPrincipal}>
                <Link className="nav-link linksMenu dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to={'/'}>PRODUCTOS</Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to={'/categories/textil'}>Textil</Link>
                    <Link className="dropdown-item" to={'/categories/carteras'}>Carteras</Link>
                    <Link className="dropdown-item" to={'/categories/accesorios'}>Accesorios</Link>
                    <Link className="dropdown-item" to={'/categories/papeleria'}>Papeleria</Link>
                    <Link className="dropdown-item" to={'/'}>Todos</Link>
                </div>
            </li>
            {/* <li className="nav-item backgroundNavbar" style={menuPrincipal}>
                <Link className="nav-link linksMenu" to={'/'}>FAQ</Link>
            </li> */}
            <li className="nav-item backgroundNavbar" style={menuPrincipal}>
                <Link className="nav-link linksMenu" to={'/'}>CONTACTO</Link>
            </li>
        </ul>
    </div>
</>
}

export default Links;
