import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">My Project</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/event1">Event1</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/event2">Event2</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/event3">Event3</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/event4">Event4</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/event5">Event5</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/event6">Event6</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/event7">Event7</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/user">User</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header