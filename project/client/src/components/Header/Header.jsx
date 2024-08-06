import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

<div className="container">
  <NavLink className="navbar-brand" to="/">Furni<span>.</span></NavLink>

  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarsFurni">
    <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/shop">Shop</NavLink>
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
        <NavLink className="nav-link" to="/signup">Signup</NavLink>
      </li>
      
    </ul>

    <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
      <li><a className="nav-link" href="#"><img src="/public/assets/images/user.svg" /></a></li>
      <li><a className="nav-link" href="cart.html"><img src="/public/assets/images/cart.svg" /></a></li>
    </ul>
  </div>
</div>

</nav>
    </>

  )
}

export default Header