//import React libraries
import React from 'react'
import { link } from 'react-router-dom'
import { Route } from 'react-router-dom'
//imports API
import * as BooksAPI from './BooksAPI'
import './App.css'

import Books from './components/Books'
import BookShelf from './components/BookShelf'
//import ChangeShelf from './components/ChangeShelf'
import Search from './components/Search'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
     books: [], //creats open array for storing books
     query: [], //open search query
     move: [],
     foundBooks: [],
     showSearchPage: false
  }

  componentDidMount() { //instantiates network request
    BooksAPI.getAll().then((books => {
      this.setState ({books:books})
      console.log(books); //shows books array in console
    }))

  }

  // when user enters each character in search bar,
  // call BooksAPI.search
  updateQuery = (query) => {
    this.setState({query})
    this.runSearch(query)
  }

  runSearch = (query) => {
    BooksAPI.search(query).then((books => {
      this.setState({foundBooks: books})
    }))


  }

  render() {
    let Books = [];

    return (
      /*TODO This isn't correct but I copies everything over to Search.jsx so both files have the same code fom here down.
        <Search
        onChange={(event) => this.updateQuery(event.target.value)}
         <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>/>
      */

      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                <input
                  type="text"
                  placeholder="Search by title or author"
                  value={this.state.query}
                  onChange={(event) => this.updateQuery(event.target.value)}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
              <BookShelf shelfName='found' books={this.state.foundBooks}/>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
              <div className="list-books-content">
{/*BookShelf start*/}
              <div>
                <BookShelf shelfName='Currently Reading'/>
                <BookShelf shelfName='Want to Read'/>
                <BookShelf shelfName='Read'/>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a> //minute 20 on Ryan tutorial
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
