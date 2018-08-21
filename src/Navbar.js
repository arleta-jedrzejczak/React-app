import React from 'react'

const Navbar = ({users}) => {
  // FIRST WAY
  // const usersList = users.map(user => {
  //   if (user.age > 27) {
  //     return (
  //       <div className="ninja" key={user.id}>
  //         <div>Name: {user.name}</div>
  //         <div>Age: {user.age}</div>
  //       </div>
  //     )
  //   }
  //   else {
  //     return null
  //   }
  // })
  // SECOND WAY
  const usersList = users.map(user => {
    return user.age > 27 ? (
      <div className="ninja" key={user.id}>
        <div>Name: {user.name}</div>
        <div>Age: {user.age}</div>
      </div>
    ) : null
  })
  return (
    <div className="usersList">
      {usersList}
    </div>
  );

}

export default Navbar