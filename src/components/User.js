import React from 'react'

const User = ({user, deleteUser}) => {
  return (
    <div key={user.id}>
      <div>Id: {user.id}</div>
      <div>Name: {user.name}</div>
      <div>Phone: {user.phone}</div>
      <div>Email: {user.email}</div>
      <div>Username: {user.username}</div>
      <div>Website: {user.website}</div>
      <button onClick={() => {deleteUser(user.id)}}>Delete user</button>
    </div>
  )

}

export default User