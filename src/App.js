//import React libraries
import React from 'react'
//import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

import './App.css'
import Search from './components/Search';
import BookCase from './components/BookCase';
import Books from './components/Books';
import BookShelf from './components/BookShelf';
import * as BooksAPI from './BooksAPI'

//TODO Fix the path to the search component
//App.js holds the components which are the two pages in the app. The main BookCase and the search page
class App extends React.Component {

  state = { //creates empty array in which to sort the books
      books: []
    }


  componentDidMount() { //instantiates network request
    BooksAPI.getAll().then(books => {
      console.log(books); //shows books array in console
      this.setState ({ books:books });
    });
  }

  render() {
    return (
      <div>
        <Route exact path="/" component= { BookCase } />
        <Route exact path="/Search" component= { Search } />
        <Route exact path="/Books" component= { Books } />
        <Route exact path="/BookShelf" component= { BookShelf } />
      </div>
    );
  }
}

export default App
