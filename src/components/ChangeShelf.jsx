import React, { Component } from 'react'

class ChangeShelf extends Component {
  state = {
    BookShelf []
  }
  changeShelf = (BookShelf) => {
    this.setState((state) => ({
      BookShelf: state.BookShelf.filter((b) => b.id !== BookShelf.id)
    }))
  }
  render() {
    return (
      <div>
        //This is a template for creating components
      </div>
    )
  }
}
export default ChangeShelf
