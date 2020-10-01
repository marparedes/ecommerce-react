import React from 'react';
import { Link } from 'react-router-dom';


function CartIcon({ icon, cant }){

    return <>
    <Link to="/cart">
        <img  src={icon} className="backgroundNavbar"
            style={{width: '1.5rem', marginTop: '2rem', paddingBottom: 15, cursor:'pointer'}}
            alt="shopping-cart"/>
        <div style={{display: "inline", backgroundColor:"#61a69b"}}><span style={{color: "black", padding: "0px 6px", borderRadius: 8, backgroundColor: "#4ef2c0", }}>{cant} </span></div>
    </Link>
    
    </>
}

export default CartIcon;