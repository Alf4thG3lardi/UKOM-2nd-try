import React from "react";
import logo from '../../assets/logo final.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-md px-5 fixed-top" style={{ background: '#3457AF' }}>
        <div class="container-fluid">
          <Link to="/" class="navbar-brand text-light">
            <img src={logo} width="99" height="45" class="d-inline-block align-text-center"/>
          </Link>
          {/* <a class="navbar-brand text-light" href="#">
            <img src={logo} width="30" height="30" class="d-inline-block align-text-center"/> 
            Navbar
          </a> */}
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <div class="navbar-nav active">
              <Link class="nav-link text-light" to="/">
                Home
              </Link>
              <div class="dropdown">
                <a style={{ background: '#3457AF', border:'none' }} class="btn btn-secondary dropdown-toggle pt-2" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  Website
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <Link class="dropdown-item" to="/web/instan" style={{ cursor:'pointer' }}>
                      Web Instant
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item"  to="/web/custom" style={{ cursor:'pointer' }}>
                      Web Custom
                    </Link>
                  </li>
                </ul>
              </div>

              <Link class="nav-link text-light" to="/portofolio">
                Portofolio
              </Link>
              <Link class="nav-link text-light" to="/pricing">
                Pricing
              </Link>
            </div>
          </div>
          <button type="button" class="btn btn-light text-center" style={{ borderRadius:'70px' }}  onClick={() => {
            document.getElementById("kontak").scrollIntoView({ behavior: "smooth" });
          }}>
            <i class="bi bi-telephone text-dark pe-2"></i>Contact
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
