import React from 'react'
import img1 from '../images/ss_Horizontal.png'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <>

     <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
  <div className="container">
    
    <Link className='navbar-brand' to="/">
    <img src={img1} alt="Snapseva" width="100" height="30"/>
    </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Contact Form</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Waitlist</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

