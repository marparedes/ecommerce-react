import React, {useEffect, useState} from 'react';
import products from '../components/mocks/productsMock';
import ItemDetail from '../components/ItemDetail';

function ItemDetailContainer() {

    const [item, setItem] = useState([]);

    const [loading, setLoading] = useState('');

    

    useEffect(() => {
        setLoading('Loading...')
        const prods = new Promise(resolve => {
            setTimeout(() => {
                resolve(products)
            }, 3000);
        });
        prods.then( result => {
            // envio solo el primer prod
            setItem(result[0]);
            setLoading('');
        }, err => {
            console.log('Error: ' + err);
         }).catch( err => {
           console.log('Error.');
            });
    }, [])
    

   

    return <div style={{margin: "50px 0"}}>
        {/* con UseEffect llama a una PROMISE que en 3 seg devuelva un ITEM y lo guarde en un estado propio  */}
        {/* dar feedback de estado como LOADING... */}
        {/* este ITEM se lo pasaria a itemDetail  */}
        
        
        {loading ? <p style={{color: 'black', fontSize: 50, fontFamily: 'Alata'}}> {loading} </p> : <ItemDetail item={item} /> }
    </div>
}

export default ItemDetailContainer;