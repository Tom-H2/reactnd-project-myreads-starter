import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '.././BooksAPI'
import BookShelf from './BookShelf'


class BookCase extends Component {
  constructor(props) {
    super(props);
    this.state = { //sets the value of <selec> to first menu option
      books: []
    }
  }

  componentDidMount() { //instantiates network request
    BooksAPI.getAll().then(books => {
      console.log(books); //shows books array in console
      this.setState ({books:books});
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
              <BookShelf shelfName='Currently Reading' books={this.state.books.filter(b => b.shelf === "currentlyReading")}/>
              <BookShelf shelfName='Want to Read' books={this.state.books.filter(b => b.shelf === "wantToRead")}/>
              <BookShelf shelfName='Read'books={this.state.books.filter(b => b.shelf === "read")}/>
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
