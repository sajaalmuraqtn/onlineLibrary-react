import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({user,logout}) {
  return (
    <><nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Online Library</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
     </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      {
            !user ?
            <>
          <li className="nav-item">
            <Link className="nav-link active " aria-current="page" to="login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active " aria-current="page" to="register">Register</Link>
          </li>
            
            </>:
          <li className="nav-item">
            <button className="btn btn-danger" aria-current="page" onClick={logout}>Logout</button>
          </li>

          }
     </ul>
    </div>
  </div>
</nav>
</>  )
}
