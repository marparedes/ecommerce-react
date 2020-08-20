import React, {useEffect, useState} from 'react';
import Item from './Item';
import products from './mocks/productsMock';

function ItemList() {

    const [productos, setProductos] = useState([]);

    const task = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000);
    })

    useEffect(() => {
        task.then( result => {
            setProductos(result);
            console.log(result);
        }, err => {
            console.log('Error: ' + err);
         }).catch( err => {
           console.log('Error.');
            });
    })

    return <div className="productsCont">
        
        {productos.map(product => <Item key={product.id} nombre={product.name} desc={product.description} stock={product.stock}/>)}
        
    </div>
}

export default ItemList;