import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import AddUser from './AddUser'
import MyTable from './MyTable'
import axios from 'axios'
// import User from './User'
// import { createBrowserHistory } from 'history'
// import EditUser from './EditUser'
// import Home from './Home'
// import Users from './Users'

class App extends Component {
  _this = this
  state = {
    displayUsers: 10,
    users: []
  }
  addUser = (user) => {
    user.id = Math.floor((Math.random() * 10) + 11)
    //have to improve mechanism of adding unique id
    let users = [...this.state.users, user]
    this.setState({
      users: users
    })
    axios.post(`https://jsonplaceholder.typicode.com/users/`, user)
      .then(response => { 
        console.log(response)
      })
      .catch(error => {
        console.log(error.response)
      })
  }
  deleteUser = (id) => {
    let users = this.state.users.filter(user => {
      return user.id !== id
    })
    this.setState({
      users: users
    })
    axios.delete(`https://jsonplaceholder.typicode.com/users/` + id)
      .then(response => { 
        console.log(response)
      })
      .catch(error => {
        console.log(error.response)
      })
  }
  shouldComponentUpdate () {
    return true
  }
  componentDidMount () {
    //fires only once (first mounted), good place for getting data from db
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const users = res.data
        this.setState({ users })
        console.log(res)
      })
      .catch(error => {
        console.log(error.response)
      })
  }
  componentDidUpdate (prevProps, prevState) {
    //fires when props or states changed
    // console.log(prevProps, prevState)
  }
  render() {
    return (
      <Router>
        <div>
          <h1 className="center">App</h1>
          <p className="center">Welcome</p>
          <Navbar/>
          <div className="container">
            <Route exact path="/" render={(props) => <MyTable {...props} deleteUser={this.deleteUser} users={this.state.users}/>} />
            <Route path="/add" render={(props) => <AddUser {...props} addUser={this.addUser}/>} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App