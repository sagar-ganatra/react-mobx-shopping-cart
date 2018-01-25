import React from 'react';

const Book = (props) => {
    const { title, imgName, author } = props.book;
    const imgUrl = 'images/' + imgName;
    return (
        <div className="book-component">
            <img alt={title}
                 src={imgUrl} 
                 width="150px" 
                 height="200px" />
            <div><strong>{title}</strong></div>
            <div>{author}</div>
        </div>
    )
}

export default Book;