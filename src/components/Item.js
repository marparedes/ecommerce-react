import React from 'react';
import { Link } from 'react-router-dom';

function Item({ id, categ, nombre, imagen, precio }) {
    

    return <div className="itemHome">
        <p style={{fontSize: 20}}> {categ.toUpperCase()} </p>
        
        <div>
            <Link to={`/item/${id}`} >
                <div className="itemHomeImg">
                    <img src={`/${imagen}`} style={{width:'100%'}} alt="productImg"></img>
                </div>
            </Link>
            <p> {nombre} </p>
            {/* <p> {desc} </p> */}
            <span style={{fontFamily: "Raleway", fontSize: 15}}>ARS ${precio}</span> 
        </div>
    </div>
}

export default Item;