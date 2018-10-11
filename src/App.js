//import React libraries
import React from 'react'
//import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

import './App.css'
import Search from './components/Search';
import BookCase from './components/BookCase';
//TODO Fix the path to the search component
//App.js holds the components which are the two pages in the app. The main BookCase and the search page
class App extends React.Component {

  render() {
    return (
      <div>
        <Route exact path="/" component= { BookCase } />
        <Route exact path="/Search" component= { Search } />
      </div>
    );
  }
}

export default App
