import React, { useState } from 'react';

function ItemCount({ initial, min, max, onAdd }) {
  // const current = initial;

  const [ current, setIni ] = useState(initial);

  function restar(){
    setIni(current-1);
  }
  function sumar(){
    setIni(current+1);
  }

  function agregar(){
    if(current === 1){
        alert('Se agregó un producto');
    } else {
        alert('Se agregaron ' + current + ' productos');
    }
  }

  return <>
  <div style={{margin:50, display: 'flex'}}>
    <button onClick={restar} disabled={current<=min} className="buttonIconCart"> - </button>
    <p style={{color: 'red', width: 30, textAlign: 'center'}}> {current} </p>
    <button onClick={sumar} disabled={current===max} className="buttonIconCart"> + </button>
  </div>
  <div>
    <button onClick={agregar} style={{display: 'inline', fontFamily: 'Raleway', fontSize: 20}} className="buttonCartAdd">Agregar al carrito</button>
  </div>
  </>
}

export default ItemCount;