import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-2">
      <div className="containter">
        <ul className="right hide-on-med-and-down">
          <li><NavLink to="/" className="orange darken-4 btn">Home</NavLink></li>
          <li><NavLink to="/add" className="orange darken-4 btn">Add user</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar