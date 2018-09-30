//Component to get API data about individual books

import React, { Component } from 'react'
import ChangeShelf from './ChangeShelf'
export default class Book extends Component {
  render() {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.coverImage})` }}></div>
          <div className = 'change-shelf-changer'>
            <ChangeShelf
              onChange= {this.handleChange}
            />
          </div>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.author}</div>
      </div>
    </li>
  )
  }
}
