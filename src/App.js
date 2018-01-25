import React, { Component } from 'react';
import Books from './models/Books';
import Cart from './models/Cart';
import BookList from './components/BookList/';
import ShoppingCart from './components/ShoppingCart/';
import WishList from './components/Wishlist/';
import './App.css';

class App extends Component {
  render() {
    const books = new Books();
    const cart = new Cart();
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Bookstore</h1>
        </header>
        <BookList books={books}
                  cart={cart} />
        <div className="cart">
          <ShoppingCart cart={cart}/>
          <WishList cart={cart}/>
        </div>
      </div>
    );
  }
}

export default App;
