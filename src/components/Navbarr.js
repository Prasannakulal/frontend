import React from 'react'
import './Navbarr.css';

export default function Navbarr() {
  return (
    <>
    
    <nav  className="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
  <div  className="container">
    <a  className="navbar-brand d-md-none" href="/">
      <svg  className="bi" width="24" height="24"><use href="#aperture"></use></svg>
      Aperture
    </a>
    <button  className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"></span>
    </button>
    <div  className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
      <div  className="offcanvas-header">
        <h5  className="offcanvas-title" id="offcanvasLabel">Aperture</h5>
        <button type="button"  className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div  className="offcanvas-body">
        <ul  className="navbar-nav flex-grow-1 justify-content-between">
          <li  className="nav-item"><a  className="nav-link" href="/">
            <h5 className='lola'>Oneclickorder</h5>
          </a></li>
          <li  className="nav-item"><a  className="nav-link" href="/">Tour</a></li>
          <li  className="nav-item"><a  className="nav-link" href="/">Product</a></li>
          <li  className="nav-item"><a  className="nav-link" href="/">Features</a></li>
          <li  className="nav-item"><a  className="nav-link" href="/">Enterprise</a></li>
          <li  className="nav-item"><a  className="nav-link" href="/">Support</a></li>
          <li  className="nav-item"><a  className="nav-link" href="/">Pricing</a></li>
          <li  className="nav-item"><a  className="nav-link" href="/">
            <svg  className="bi" width="24" height="24"><use href="#cart"></use></svg>
          </a></li>
          <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
        </ul>
      </div>
    </div>
  </div>
</nav>
</>
  )
}
