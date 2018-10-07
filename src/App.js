//import React libraries
import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
//imports API
//import * as BooksAPI from './BooksAPI'
import './App.css'

import Books from './components/Books'
import BookShelf from './components/BookShelf'
//import ChangeShelf from './components/ChangeShelf'
import Search from './components/Search'
import BookCase from './components/BookCase'


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

  render() {
    return (
      <div>
        <Route exact path="/" component= { BookCase } />
        <Route exact path="/" component= { Search } />
      </div>
    );

      /*TODO This isn't correct but I copies everything over to Search.jsx so both files have the same code fom here down.
        <Search
        onChange={(event) => this.updateQuery(event.target.value)}
         <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>/>
      */

      <div>
        App
      </div>
  }
}

export default BooksApp
