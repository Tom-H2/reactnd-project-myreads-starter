//Currently Reading, Want to Read, and Read shelves
//Makes component to render books from API to selected shelves
//imports React
import React, { Component } from 'react'

import Books from './Books'

class shelfChanger extends Component {
  //use map() to sort through BooksAPI
  render() {
  return (
  <div> //This code is copied from App.js static book shelf
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2> //React syntax to create component shelf
          <div className="bookshelf-books">
            <ol className="books-grid">
            </ol>
            <Books.map(book => book);//this syntax is not correct 
        </div>
      </div>
    </div>
    )
  }
}
export default shelfChanger
