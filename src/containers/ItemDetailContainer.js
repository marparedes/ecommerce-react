import React, {useEffect, useState} from 'react';
import ItemDetail from '../components/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../firebase';

// const getItem = (id) => {
//     const item = products.find(i => i.id === id);
//     console.log(item);
//     return item;
// }

function ItemDetailContainer() {

    const { id } = useParams();

    const [item, setItem] = useState([]);

    const [loading, setLoading] = useState('');


    useEffect(() => {
        setLoading('Loading...')
        
        const db = getFirestore();
        const itemCollection = db.collection("items");
        const item = itemCollection.doc(id);

        item.get().then((doc) => {
            if(!doc.exists) {
                console.log('No existe el item');
                return;
            }
            setLoading('');
            setItem({id: id, ...doc.data()});
        });
        
    }, [id]);
    

   

    return <div style={{margin: "50px 0"}}>
        
        {/* modificar ESTILOS del loading */}
        {loading ? <p style={{color: 'black', fontSize: 50, fontFamily:"Alata", textAlign:"center", marginTop: '30vh'}}> {loading} </p> : <ItemDetail item={item} /> }
    </div>
}

export default ItemDetailContainer;