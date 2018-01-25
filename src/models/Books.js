import { computed } from 'mobx';
import Book from './Book';

class Books {
    constructor() {
        this.items = [
            new Book({ title: 'JavaScript Good Parts', imgName: 'JS_Good_Parts.jpg', author: 'Douglas Crockford' }),
            new Book({ title: 'ES6 & Beyond', imgName: 'ES6_Beyond.jpg', author: 'Kyle Simpson' }),
            new Book({ title: 'Eloquent JavaScript', imgName: 'Eloquent_JavaScript.jpg', author: 'Marijn Haverbeke' }),
        ];
    }

    @computed get booksCount() {
        return this.items.length;
    }
}

export default Books;