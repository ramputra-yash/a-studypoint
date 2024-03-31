import React from "react";
import './Navbar.css'
import logo from '../../assets/logo.png'

function Navbar() {
  return (
    <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
          <img src={logo} alt="logo" />
        </a>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" className="nav-link px-2 text-white">Home</a></li>
        <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
        <li><a href="#" className="nav-link px-2 text-white">Contact</a></li>
        <li><a href="#" className="nav-link px-2 text-white">About</a></li>
      </ul>
    </header>
  </div>
  );
}

export default Navbar;