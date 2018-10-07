//Currently Reading, Want to Read, and Read shelves
//Makes component to render books from API to selected shelves
//imports React
import React, { Component } from 'react'

import Books from './Books'

class BookShelf extends Component {
  componentDidMount () {
    console.log(this);//test to verify which books are on the shelves
  }


  render() {
    let count = 0;
    let renderBook = (book) => {
      return (<Books key={count++} title = {book.title}  author={book.author} coverImage={book.imageLinks.thumbnail} />);
    }

    if (this.props.books!=null && this.props.books.length>0) {
      return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.shelfName}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.books.map(renderBook)}
              </ol>
          </div>
        </div>
      )
    } else {
      return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.shelfName} No Matches Found</h2>
        </div>
      )
    }
  }
}
export default BookShelf
