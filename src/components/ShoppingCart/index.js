import React, { Component } from "react";
import { observer } from "mobx-react";
import Book from "../Book/";
import "./ShoppingCart.css";

@observer
class ShoppingCart extends Component {
  render() {
    return (
      <div className="shopping-cart-component">
        <header>Shopping Cart (Total Count: {this.props.cart.bagCount})</header>
        <ul className="cart-list">
          {this.props.cart.itemsInBag.map(item => {
            return (
              <li className="cart-item" key={`shopping-cart-${item.book.id}`}>
                <Book book={item.book} />
                <div>Count: {item.count}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ShoppingCart;
