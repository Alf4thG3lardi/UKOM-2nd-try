import React from 'react'
import logo from "../../assets/logo.png";
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-md px-5 fixed-top" style={{background:'#364a28'}}>
        <div class="container-fluid">
          <Link to='/' class="navbar-brand text-light">
            <img src={logo} width="30" height="30" class="d-inline-block align-text-center"/> 
            Navbar
          </Link>
          {/* <a class="navbar-brand text-light" href="#">
            <img src={logo} width="30" height="30" class="d-inline-block align-text-center"/> 
            Navbar
          </a> */}
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link text-light" to='/'>Home</Link>
              <a class="nav-link text-light" href="#">Features</a>
              <Link class="nav-link text-light" to='/portofolio'>Portofolio</Link>
              <a class="nav-link text-light" href="#">Pricing</a>
            </div>
          </div>
          <button type="button" class="btn btn-light text-center" style={{background:"#c4cfd4"}}>
            <i class='bi bi-telephone text-dark pe-2'></i>Contact
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar