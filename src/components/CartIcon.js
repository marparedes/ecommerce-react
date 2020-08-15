import React from 'react';


function CartIcon({ icon }){

    return <img  onClick={() => alert('Soy un carrito :)')} src={icon} 
            style={{width: '1.5rem', marginTop: '2rem', marginRight: '2rem', paddingBottom: 15, cursor:'pointer'}}
            alt="shopping-cart"/>

}

export default CartIcon;