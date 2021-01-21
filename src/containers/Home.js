import React, { useState, useEffect } from 'react';
import ItemList from '../components/ItemList';
import { getFirestore } from '../firebase';
import { useParams } from 'react-router-dom';

function Home({ greeting = "" }) {

    const { categoryId } = useParams();

    const [ items, setItems ] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('items');
        if(categoryId) {
            const withCategory = itemCollection.where('categoryId', '==', categoryId);
            withCategory.get().then((querySnapshot) => {
                if(querySnapshot.size === 0) {
                    console.log('No existen items de mas de 4000')
                }
                setItems(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
            });
        } else {
            itemCollection.get().then((querySnapshot) => {
                if(querySnapshot.size === 0) {
                    console.log('No existen items de mas de 4000')
                }
                setItems(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
            });
        }
       

    }, [categoryId])

    return <body className="App-header">
        {categoryId ? <h1 style={{ color:'#1CCA8D', margin: 20, fontFamily:"Dancing Script" }}> Categoria: {categoryId}</h1> : <h1 style={{ color:'#1CCA8D', margin: 30, fontFamily:"Dancing Script" }}>{greeting}</h1>}
        <ItemList items={items}/>


    </body>
}

export default Home;