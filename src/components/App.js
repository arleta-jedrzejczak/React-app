import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import '../styles/App.css'
import '../styles/materialize.min.css'
import Navbar from './Navbar'
import AddUser from './AddUser'
import MyTable from './MyTable'
import axios from 'axios'
import User from './User'

class App extends Component {
  state = {
    users: [],
    currId: null,
    user: {}
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
        console.log(response, user)
      })
      .catch(error => {
        alert(error)
      })
  }
  checkUser = (id) => {
    let _this = this
    this.state.users.forEach(user => {
      if (user.id === id) {
        _this.neWuser = user
      }
    })
    this.setState({
      currId: id,
      user: _this.neWuser
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
      .then()
      .catch(error => {
        alert(error)
      })
    alert(`User ${id} deleted from table`)
  }
  saveStorage (page, rows) {
    localStorage.clear()
    localStorage.setItem('page', page)
    localStorage.setItem('rows', rows)
    console.log(localStorage)
  }
  componentDidMount () {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const users = res.data
        this.setState({ users })
      })
      .catch(error => {
        alert(error)
      })
  }
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <NavLink to="/"><h1 className="center">App</h1></NavLink>
          <p className="center">Welcome</p>
          <Navbar/>
          <div className="container">
            <Route exact path="/" render={(props) => <MyTable {...props} saveStorage={this.saveStorage} checkUser={this.checkUser} users={this.state.users}/>} />
            <Route path="/add" render={(props) => <AddUser {...props} addUser={this.addUser}/>} />
            <Route path="/user/:currId" render={(props) => <User {...props} user={this.state.user} deleteUser={this.deleteUser}/>} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App