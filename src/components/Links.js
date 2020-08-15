// import { render } from 'react-dom';
import React from 'react';

const menuPrincipal = {
    display: 'inline',
    textAlign: 'center',
    marginRight: 30,
    fontFamily: 'Raleway'
}

const Links = () => {
    return  <div  id="navbarSupportedContent1" className="collapse navbar-collapse flex-grow-1 text-right menu">
                <ul className="navbar-nav ml-auto flex-nowrap">
                    <li className="nav-item" style={menuPrincipal}>
                        <a className="nav-link linksMenu" href="#" >INICIO</a>
                    </li>
                    <li className="nav-item " style={menuPrincipal}>
                        <a className="nav-link linksMenu" href="#" >PRODUCTOS</a>
                    </li>
                    <li className="nav-item " style={menuPrincipal}>
                        <a className="nav-link linksMenu" href="#" >FAQ</a>
                    </li>
                    <li className="nav-item " style={menuPrincipal}>
                        <a className="nav-link linksMenu" href="#" >CONTACTO</a>
                    </li>
                </ul>
        </div>

}

export default Links;
