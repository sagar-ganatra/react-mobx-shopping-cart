import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Book from '../Book/';
import './BookList.css';
@observer
class BookList extends Component {
    addBookToCart = (book) => {
        this.props.cart.addToBag(book);
    }
    addBookToWishlist = (book) => {
        this.props.cart.addToWishlist(book);
    }
    render() {
        return (
            <div className="booklist-component">
                <ul className="books">
                {
                    this.props.books.items.map(book => {
                        return (
                            <li key={book.id}
                                className="book-list">
                                <Book book={book} />
                                <button onClick={() => { this.addBookToCart(book) } }>
                                    +CART
                                </button>
                                <button onClick={() => { this.addBookToWishlist(book) } }>
                                    +WISHLIST
                                </button>
                            </li>
                        )
                    })
                }
                </ul>
                <div className="summary">
                    Books count: {this.props.books.booksCount}
                </div>
            </div>
        )
    }
}


export default BookList;