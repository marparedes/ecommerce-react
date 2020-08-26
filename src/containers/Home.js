import React from 'react';
import LinkReact from '../components/LinkReact';
// import ItemCount from '../components/ItemCount';
import ItemList from '../components/ItemList';
import ItemDetailContainer from '../containers/ItemDetailContainer';


function Home({ greeting }) {

    return <body className="App-header">
        <h1 style={{ color:'#1CCA8D', margin: 80 }}>{greeting}</h1>
        <LinkReact link="https://reactjs.org"/>
        {/* <ItemCount initial={1} min={1} max={10} onAdd={addCount}/> */}
        <ItemList />

        <p className="detailTitle"> Detalle del producto </p>
        <ItemDetailContainer />
    </body>
}

export default Home;