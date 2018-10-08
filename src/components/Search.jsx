
// Display book image, title, author to page
//This is currently not functional and the call in App.js is commented out

// import React
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Books from './Books'
import * as BooksAPI from '../BooksAPI'

class Search extends Component {

	constructor(props) {
 	 super(props);
 	 this.state = {
		 	books: [],
      query: []
		};
	 }

	 componentDidMount () {
     BooksAPI.getAll()
		 .then(book => {
			 console.log(book);
			 this.setState({ books: book });
		 })
   }
	 // when user enters each character in search bar,
   // call BooksAPI.search
   updateBook = (book, shelf) => {
		 BooksAPI.update(book, shelf)
		 .then(book => {
			 book.shelf = shelf;
			 this.setState(state =>({
				 books: state.books.filter(b => b.id !== book.id).concat({book})
			 }));
		 });
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
