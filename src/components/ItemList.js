import React from 'react';
import Item from './Item';

function ItemList({items}) {


    return <div className="productsCont">
        
        {items.map(item => <Item id={item.id} categ={item.categoryId} nombre={item.title} imagen={item.imageId} precio={item.price}/>)}
        
    </div>
}

export default ItemList;