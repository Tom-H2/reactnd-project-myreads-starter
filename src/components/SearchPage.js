//This SearchPage is not used

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
//import Books from './Books'
import * as BooksAPI from '.././BooksAPI'
//import BookShelf from './BookShelf'

class SearchPage extends Component {
  state = {
    query: '',
    books: []
  }

  componentDidMount () {
    BooksAPI.getAll()
      .then(({ book }) => {
        this.setState({
          books: book.book
        })
      })
  }

  handleInputChange = (book, shelf) => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
      }
    })
  }

  render() {
    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
          <div className="search-books-results">
            <ol className="books-grid">
              <h1>My Search Page</h1>
              books={this.state.books}
          </ol>
          </div>
          </div>
          </div>
      </div>
    )
  }
}

export default SearchPage
