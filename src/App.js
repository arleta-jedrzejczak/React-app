import React, { Component } from 'react'
import './App.css'
import Users from './Users'
import Navbar from './Navbar'

class App extends Component {
  state = {
    users: [
      {id: 1, name: 'user1', age: 26},
      {id: 2, name: 'user2', age: 28},
      {id: 3, name: 'user3', age: 30}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <p>Welcome</p>
        <Navbar users={this.state.users}/>
        <Users users={this.state.users}/>
      </div>
    );
  }
}

export default App;
