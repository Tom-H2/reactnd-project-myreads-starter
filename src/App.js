//import React libraries
import React from 'react'
//import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

import './App.css'

//import Books from './components/Books'
//import BookShelf from './components/BookShelf'
//import ChangeShelf from './components/ChangeShelf'
import Search from './components/Search';
import BookCase from './components/BookCase';

//App.js holds the components which are the two pages in the app. The main BookCase and the search page
class App extends React.Component {

  render() {
    return (
      <div>
        <Route exact path="/" component= { BookCase } />
        <Route exact path="/" component= { Search } />
      </div>
    );
  }
}

export default App
