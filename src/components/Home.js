import React from 'react'

const Home = ({users, deleteUser}) => {
  const usersList = users.map(user => {
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
  })
  return (
    <div className="usersList">
      {usersList}
    </div>
  )

}

export default Home