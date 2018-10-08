
// Display book image, title, author to page
//This is currently not functional and the call in App.js is commented out

// import React
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Books from './Books'
import * as BooksAPI from '../BooksAPI'

class Search extends Component {
	componentDidMount () {
    console.log(this);//test to verify which books are on the shelves
  }

	constructor(props) {
 	 super(props);
 	 this.state = {
		 	books: [],
      query: "",
		};
	 }

	 // when user enters each character in search bar,
   // call BooksAPI.search
   updateQuery = (query) => {
     this.setState({query})
     this.runSearch(query)
   }

   runSearch = (query) => {
		 if (query) {
			 BooksAPI.search(query).then(books => {
				 if (books.error) {
					 this.setState({books: []})
				 }
				 else {
	       		this.setState({books})
				 }
	     })}
			else {this.setState({books: []})}
   }

	render() {
			return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input
                  type="text"
                  placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        );
	}
}
export default Search;
