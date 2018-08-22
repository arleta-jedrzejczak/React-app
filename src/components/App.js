import React, { Component } from 'react'
import './App.css'
import Users from './Users'
import Navbar from './Navbar'
import AddUser from './AddUser'

class App extends Component {
  state = {
    users: [
      {id: 1, name: 'user1', age: 26},
      {id: 2, name: 'user2', age: 28},
      {id: 3, name: 'user3', age: 30}
    ]
  }
  addUser = (user) => {
    user.id = Math.random()
    console.log(user.id)
    let users = [...this.state.users, user]
    this.setState({
      users: users
    })
  }
  deleteUser = (id) => {
    let users = this.state.users.filter(user => {
      return user.id !== id
    })
    this.setState({
      users: users
    })
  }
  componentDidMount () {
    //fires only once (first mounted), good place for getting data from db
    console.log('mounted')
  }
  componentDidUpdate (prevProps, prevState) {
    //fires when props or states changed
    console.log(prevProps, prevState)
  }
  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <p>Welcome</p>
        <Navbar deleteUser={this.deleteUser} users={this.state.users}/>
        <Users users={this.state.users}/>
        <AddUser addUser={this.addUser}/>
      </div>
    );
  }
}

export default App;
