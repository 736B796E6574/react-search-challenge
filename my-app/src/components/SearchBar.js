import React, { Component } from 'react'


export class SearchBar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }

  render() {
    return (
      <div>
        <h1>Name Search</h1>
        <form>
        <label>
    Name:
    <input type="text" name="name" placeholder="search names..." />
  </label>
  <input type="submit" value="Submit" />
        </form>
        <div>We will render names here</div>
      </div>
    )
  }
}

export default SearchBar