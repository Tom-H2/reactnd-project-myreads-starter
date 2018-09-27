//For this code I recieved help from Susan Pommer who is a classmate in the Grow with Google Udacity FEND cohort
// Display book image, title, author to page

// import React
import React, {Component} from 'react'

// method to update books
// Book component  - displays thumbnail image, title, authors(NEED WORK), picklist
class SearchBook extends Component {

	// method to check if search results are already on a shelf
    /*checkShelf = (searchResults, books) => {
    	searchResults.map(result =>
	    	// compare result.id against each current book.if
	      	// if a match, change the result.shelf = book.shelf
	      	// if no match, set to "none"
	      	// need to initialize shelf to "none"
	      	result.shelf = "none"

	      	this.books.map(book => (
	        	(book.id === result.id) ? result.shelf = book.shelf : "none"
	      	))
	      	console.log(result.shelf)
	      	this.setState({books}) // TESTING - REMOVE - OK HERE
	    )
	}*/

	render() {
		//checkShelf(this.props.searchResults, this.props.books)

		return (
			<div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author"/>

          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      </div>
        )
    }
}


export default SearchBook
