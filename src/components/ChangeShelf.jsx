import React, { Component } from 'react'

class ChangeShelf extends Component {
  state = {
    //the current shelf in which the book resides
    move: [ //creates an array of options for shelves
    currentlyReading,
    wantToRead,
    read,
    none
    ]
  }
  changeShelf = (move) => { //method that update the state of shelf
    this.setState((state) => ({ //changes state when different from last state
      move: state.move.filter((e) => e.id !== move.id)
    }))
  }
  render() {
    return (
      <div>
        <Books onchangeShelf={this.changeShelf} move={this.state.move} /> //invokes Books component

      </div>
    )
  }
}
export default ChangeShelf
