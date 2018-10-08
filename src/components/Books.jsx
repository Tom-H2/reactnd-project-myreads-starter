//Component to get API data about individual books

import React, { Component } from 'react'
//import ChangeShelf from './ChangeShelf'
import * as BooksAPI from '../BooksAPI'

export default class Book extends Component {



  constructor(props) {
    super(props);
    this.state = { //sets the value of <select> to first menu option
      book: props.book
    }
  }

  componentDidMount () {
    console.log(this);//test to verify which books are on the shelves
  }


  render() {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.imageLinks})` }}></div>
          <div className = 'change-shelf-changer'>
            <select value={this.props.currentShelf || "none"} onChange = {(e) => { this.props.updateBook(this.props.book, e.target.value) }}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.author}</div>
      </div>
    </li>
  )
  }
}
