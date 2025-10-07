import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link to={'/'} className="navbar-brand" href="#">JournalBooks</Link>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={'/dasboard'} className="nav-link  " aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  " aria-current="page" href="#">Contact</a>
        </li>
      </ul>
      <form className="d-flex login_boton">
        <button className="btn btn-outline-success" type="submit"><Link to={'/auth'}>Ingresar</Link></button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
