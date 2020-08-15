import React from 'react';
import './App.css';
import Navbar from './containers/Navbar'
import Home from './containers/Home';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <Home greeting="Bienvenid@" />

    </>
  );
}

export default App;
