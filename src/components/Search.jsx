
// Display book image, title, author to page
//This is currently not functional and the call in App.js is commented out

// import React
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
class Search extends Component {

	constructor(props) {
 	 super(props);
 	 this.state = {
		 	books: [],
      results: [],
      query: "",
		};
	 }

	render() {

		return (
          <div className="search-books">
            <div className="search-books-bar">
              <link className="close-search" to="/">Close</link>
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
            </div>
          </div>
        );
	}
}
export default Search;
