import React, { Component } from 'react'

class User extends Component {
  render() {
    const {user, deleteUser} = this.props
    return (
      <div>
        <h2 className="center">User</h2>
        <ul className="collapsible" key={user.id}>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">format_list_bulleted</i>
              <span>{user.id}</span>
              <span className="badge">ID</span>
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">person</i>
              <span>{user.name}</span>
              <span className="badge">NAME</span>
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">phone</i>
              <span>{user.phone}</span>
              <span className="badge">PHONE</span>
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">email</i>
              <span>{user.email}</span>
              <span className="badge">EMAIL</span>
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">person_pin_circle</i>
              <span>{user.username}</span>
              <span className="badge">USERNAME</span>
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">personal_video</i>
              <span>{user.website}</span>
              <span className="badge">WEBSITE</span>
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">delete_forever</i>
              <span className="right">
                <button className="orange darken-4 btn" onClick={() => {deleteUser(user.id), this.props.history.push("/")}}>Delete user</button>
              </span>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default User