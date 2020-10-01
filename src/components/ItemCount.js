import React, { useState } from 'react';

function ItemCount({ initial, min, max, onChange }) {

  const [ current, setIni ] = useState(initial);

  function restar(){
    setIni(current-1);
  }
  function sumar(){
    setIni(current+1);
  }

  return <>
    <div style={{margin:20, textAlign: "center", fontSize: 25}}>
      <button onClick={restar} disabled={current<=min} className="buttonIconCart"> - </button>
      <p style={{color: 'red', width: 30, textAlign: 'center', display: 'inline'}} onChange={onChange(current)}> {current} </p>
      <button onClick={sumar} disabled={current===max} className="buttonIconCart"> + </button>
    </div>
  </>
}

export default ItemCount;