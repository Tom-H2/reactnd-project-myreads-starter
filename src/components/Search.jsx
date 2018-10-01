//For this code I recieved help from Susan Pommer who is a classmate in the Grow with Google Udacity FEND cohort
// Display book image, title, author to page

// import React
import React, {Component} from 'react'

// method to update books
// Book component  - displays thumbnail image, title, authors(NEED WORK), picklist
class Search extends Component {
	// method to check if search results are already on a shelf
 //open search query

	constructor(props) {
    super(props);
    this.state = (query);
	}

	updateQuery = (query) => {
		this.setState({query})
		this.runSearch(query)
	}

	runSearch = (query) => {
		BooksAPI.search(query).then((books => {
			this.setState({foundBooks:books})
		}))
	}

	render() {

		return (
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
          <div className="list-books"></div>
        )
			}
	</div>
 )
}
export default Search;
