import React from 'react'
import { Link } from 'react-router-dom'

function NavbarAuth() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <Link to={'/'} className="navbar-brand" href="#">BookJournal</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={'/'} className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item ">
          <a className="nav-link active" href="#">About Us</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link active" href="#">Contact</a>
        </li>
         
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavbarAuth
