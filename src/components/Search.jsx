//For this code I recieved help from Susan Pommer who is a classmate in the Grow with Google Udacity FEND cohort
// Display book image, title, author to page

// import React
import React, {Component} from 'react'

class Search extends Component {

	constructor(props) {
 	 super(props);
 	 this.state = {
		 	books: [],
      results: [],
      query: "",
		};
	 }

 componentDidMount() { //instantiates network request
	 BooksAPI.getAll().then((books => {
		 this.setState ({books:books})
		 console.log(books); //shows books array in console
	 }))
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
        )
	}

export default Search;
