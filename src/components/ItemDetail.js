import React from 'react';
import ItemCount from './ItemCount';
import imagen from '../assets/collar.jpg';

function ItemDetail({item}) {

    function addCount(){
        console.log('Se agregaron los productos al carrito');
    }

    const marginDesc = {
        margin: "50px 20px"
    }
    const title= {
        textAlign: "center",
        fontSize: "2rem",
        color: "darkcyan",
        margin:30
    }

    return <div  style={{color: 'black', fontFamily: "Raleway"}}>
        <p style={title}>{item.name} </p>
        <div className="detailContainer">
            <div style={{textAlign: "center"}}>
                <img src={imagen} alt=""></img>
            </div>

        
            <div>
                <p style={marginDesc}> Descripción: {item.description} </p>
                <p style={marginDesc}> Precio: ${item.precio} </p>
                <ItemCount initial={1} min={1} max={item.stock} onAdd={addCount} />
            </div>
        </div>
        
    </div>
}

export default ItemDetail;