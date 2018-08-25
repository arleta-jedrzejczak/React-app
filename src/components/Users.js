import React, { Component } from 'react'

class Users extends Component {
  render() {
    const {users} = this.props
    const usersList = users.map(user => {
      return (
        <div className="users" key={user.id}>
        <div>Name: {user.name}</div>
        <div>Age: {user.age}</div>
      </div>
      )
    })
    return (
      <div className="usersList">
        {usersList}
      </div>
    )
  }
}

export default Users