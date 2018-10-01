import React, { Component } from 'react'

class ChangeShelf extends Component { //https://reactjs.org/docs/forms.html
  
  constructor(props) {
    super(props);
    this.state = {value: 'Move to...'};
    this.handleChange = this.handleChange.bind(this);

  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <select value={this.state.value} onChange={this.handleChange}>
        <option value="move">Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    );
  }
}
export default ChangeShelf;
