import React from 'react'
import logo from "../../assets/logo.png";


const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-md bg-dark px-5 fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand text-light" href="#">
            <img src={logo} width="30" height="30" class="d-inline-block align-text-center"/> 
            Navbar
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
              <a class="nav-link text-light" href="#">Features</a>
              <a class="nav-link text-light" href="#">Pricing</a>
            </div>
          </div>
          <button type="button" class="btn btn-light text-center">
            <i class='bi bi-telephone text-dark pe-2'></i>Contact
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar