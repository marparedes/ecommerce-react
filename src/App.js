import React from 'react';
import './App.css';
import Navbar from './containers/Navbar'
import Home from './containers/Home';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './containers/ItemDetailContainer';
import { CartProvider } from './components/CartContext';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home greeting="Nuestros productos" />
          </Route>
          <Route path="/categories/:categoryId">
            <Home />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/cart/:orderId">
            <Cart />
          </Route>
          <Route to="/checkout">
            <Checkout />
          </Route>
        </Switch>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
