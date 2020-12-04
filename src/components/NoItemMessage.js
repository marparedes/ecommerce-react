import React from 'react';
import {Link} from 'react-router-dom';

export default function NoItemMessage({message}) {
    return <div style={{margin: 80}}>
        <div style={{textAlign: "center", margin: 50, fontSize:25, fontFamily: "Alata"}}> No hay productos en el {message} </div>
        <div style={{textAlign:"center"}}>
            <Link to={'/'}>
                <button type="button" className="btn btn-info">Ir a comprar</button>    
            </Link>
        </div>
    </div>
}