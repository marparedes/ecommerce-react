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
        }, err => {
            console.log('Error: ' + err);
         }).catch( err => {
           console.log('Error.');
            });
    })

    return <div className="productsCont">
        
        {productos.map(product => <Item key={product.id} categ={product.categ} nombre={product.name} desc={product.description} precio={product.precio}/>)}
        
    </div>
}

export default ItemList;