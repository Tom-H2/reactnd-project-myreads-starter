//Component to get API data about individual books

import React from 'react'
//import ChangeShelf from './ChangeShelf'
//import * as BooksAPI from '../BooksAPI'

const Book = ({ updateBook, book, key, currentShelf }) => {

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ width: 128, height: 193, backgroundImage: `url(${
            book.imageLinks ? book.imageLinks.thumbnail : 'https://3.bp.blogspot.com/-s3yBaPBn8Hc/Uh4-wAZOQLI/AAAAAAAAJT8/GY9d_VJFm3o/s200/play-books-no-cover.jpg'})`
          }}
          >
          <div className = 'change-shelf-changer'>
            <select value={currentShelf || "none"} onChange = {(e) => { updateBook(book, e.target.value) }}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.author}</div>
      </div>
      </div>
      </div>
    </li>
  );
}

export default Book;
