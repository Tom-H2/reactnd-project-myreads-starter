

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '.././BooksAPI'
import BookShelf from './BookShelf'


class BookCase extends Component {

  state = { //sets the value of <selec> to first menu option
      books: []
    }

    componentDidMount() { //instantiates network request
      BooksAPI.getAll().then(books => {
        this.setState ({ books:books });
        console.log (books);
      });
    }

  updateBooks = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(resp => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat({book})
      }));
    });
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
          <div className="list-books-content">
            <div>
              <BookShelf updateBook={this.updateBooks} shelfName='Currently Reading' books={this.state.books.filter(b => b.shelf === "currentlyReading")}/>
              <BookShelf updateBook={this.updateBooks} shelfName='Want to Read' books={this.state.books.filter(b => b.shelf === "wantToRead")}/>
              <BookShelf updateBook={this.updateBooks} shelfName='Read'books={this.state.books.filter(b => b.shelf === "read")}/>
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
