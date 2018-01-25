import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Book from '../Book/';
import './Wishlist.css';

@observer
class WishList extends Component {
    render() {
        return (
            <div className="wishlist-component">
                <header>Wishlist (Total Count: {this.props.cart.wishlistCount})</header>
                <ul className="cart-list">
                {
                    this.props.cart.itemsInWishlist.map(item => {
                        return (
                            <li className="cart-item">
                                <Book key={`wishlist-cart-${item.book.id}`}
                                      book={item.book} />
                                <div>Count: {item.count}</div>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}

export default WishList;