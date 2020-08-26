import React from 'react';
import './App.css';
import Navbar from './containers/Navbar'
import Home from './containers/Home';

function App() {
  return (
    <>

      <Navbar />


      <Home greeting="Bienvenid@" />

    </>
  );
}

export default App;
