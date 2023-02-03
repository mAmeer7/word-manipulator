import React from 'react'
import { Link } from 'react-router-dom'



export default function Navbar(props) {
  
 
  

 

  return (
    <nav id='navbar' className={`navbar sticky-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link  className="navbar-brand ps-5" to="/">Word Manipulator</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        
        
      </ul>
      {/* <form className="d-flex pe-5" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <button id="btnn" onClick={props.darkmode} type="button" className={`btn btn-${props.mode==='light'?'dark':'light'} me-5`}>Dark Mode</button>
    </div>
  </div>
</nav>
  )
}
