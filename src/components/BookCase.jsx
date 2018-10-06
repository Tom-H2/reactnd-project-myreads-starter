import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '.././BooksAPI'
import BookShelf from './BookShelf'


class BookCase extends Component {
  componentDidMount() { //instantiates network request
    BooksAPI.getAll().then((books => {
      //this.setState ({books:books})
      console.log(books); //shows books array in console
    }))

  }
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
          <div className="list-books-content">
            <div>
              <BookShelf shelfName='Currently Reading'/>
              <BookShelf shelfName='Want to Read'/>
              <BookShelf shelfName='Read'/>
            </div>
        </div>
        <div className="open-search">
          <Link to="/Search">Add a book</Link> //minute 20 on Ryan tutorial
        </div>
      </div>
    );
  }
}
export default BookCase
