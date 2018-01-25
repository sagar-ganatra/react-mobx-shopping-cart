import uniqueid from 'uniqueid';

const bookIdGenerator = uniqueid('book-');

class Book {
    constructor({ title, imgName, author }) {
        this.id = bookIdGenerator();
        this.title = title;
        this.imgName = imgName;
        this.author = author;
    }
}

export default Book;