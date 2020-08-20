import React from 'react';

function Item({ nombre, desc, stock }) {
    return <div style={{color:"black", margin: 35}}>
        {/* traer datos como parametro y darle estilo para que se muestre */}
        {nombre} {desc} {stock} 
      
    </div>
}

export default Item;