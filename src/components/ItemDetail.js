import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from './CartContext';

function ButtonDetail({cant , item}){
    const { addItem } = useCartContext();
    return <button className="buttonCartAdd" onClick={()=>addItem({...item, quantity: cant})}>Comprar {cant} </button>
}

function ItemDetail({item}) {

    const [ cant, setCant ] = useState();


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
        <p style={title}>{item.title} </p>
        <div className="detailContainer">
            <div className="alignText">
                <img src={`/${item.imageId}`} alt="" className="itemDetailImg"></img>
            </div>

        
            <div>
                <p style={marginDesc}> Descripción: {item.description} </p>
                <p style={{...marginDesc, fontSize: 20}}> Precio: ${item.price} </p>
                <div>
                    <ItemCount initial={1} min={1} max={item.stock} onChange={value => setCant(value)}/>
                    <div className="alignText">
                        
                            <ButtonDetail cant={cant} item={item}/>
                      
                    </div>
                    
                </div>
            </div>
            
        </div>
        <div style={{textAlign: "center", margin: 30}}>
            <Link to={'/'}>
                <button className="btn btn-info"> Volver a Inicio</button>
            </Link>
        </div>
        
    </div>
}

export default ItemDetail;