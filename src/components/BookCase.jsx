

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import * as BooksAPI from '.././BooksAPI' //commented out when functions moved to App.js
import BookShelf from './BookShelf'


class BookCase extends Component {

  state = { //sets the value of <selec> to first menu option
      books: []
    }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
          <div className="list-books-content">
            <div>
              <BookShelf updateBook={this.props.updateBooks} shelfName='Currently Reading' books={this.props.books.filter(b => b.shelf === "currentlyReading")}/>
              <BookShelf updateBook={this.props.updateBooks} shelfName='Want to Read' books={this.props.books.filter(b => b.shelf === "wantToRead")}/>
              <BookShelf updateBook={this.props.updateBooks} shelfName='Read'books={this.props.books.filter(b => b.shelf === "read")}/>
            </div>
        </div>
        <div className="open-search">
          <Link to="/Search">Add a book</Link>
        </div>
      </div>
    );
  }
}
export default BookCase
