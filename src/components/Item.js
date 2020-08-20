import React from 'react';

function Item({ categ, nombre, desc, precio }) {
    return <div className="itemHome">
        {/* traer datos como parametro y darle estilo para que se muestre */}
        <p style={{fontSize: 20}}> {categ} </p>
        
        <div>
            <p> {nombre} </p>
            <p> {desc} </p>
            <span style={{fontFamily: "Raleway", fontSize: 15}}>Precio: {precio}</span> 
        </div>
       
      
    </div>
}

export default Item;