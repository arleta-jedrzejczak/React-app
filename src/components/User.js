import React, { Component } from 'react'

class User extends Component {
  render() {
    const {user} = this.props
    return (
      <div>
      <h2 className="center">User</h2>
        <div key={user.id}>
          <div>Id: {user.id}</div>
          <div>Name: {user.name}</div>
          <div>Phone: {user.phone}</div>
          <div>Email: {user.email}</div>
          <div>Username: {user.username}</div>
          <div>Website: {user.website}</div>
          {/* <button onClick={() => {deleteUser(user.id)}}>Delete user</button> */}
        </div>
      </div>
    )
  }
}

export default User