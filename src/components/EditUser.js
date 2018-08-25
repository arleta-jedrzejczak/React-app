import React, { Component } from 'react'

class EditUser extends Component {
  state = {
    name: null,
    age: null
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addUser(this.state)
  }
  render() {
    return (
      <div className="usersList">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange}/>
          <label htmlFor="phone">Phone:</label>
          <input type="text" id="phone" onChange={this.handleChange}/>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" onChange={this.handleChange}/>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" onChange={this.handleChange}/>
          <label htmlFor="website">Website:</label>
          <input type="text" id="website" onChange={this.handleChange}/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default EditUser