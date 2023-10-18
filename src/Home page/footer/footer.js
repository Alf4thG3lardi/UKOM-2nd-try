import React from 'react';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div class='container'>
        <footer class='row py-5 border-top border-secondary'>
            <div class='col-md-3'>
                <a class='d-flex align-items-center mb-3 link-body-emphasis text-decoration-none'>
                    <img src={logo} width='50' height='50'/>
                </a>
                <p class='text-secondary'>&copy; 2025</p>
            </div>
            <div class='col-md-3 text-center'>
                <h5 class='text-white'>Section</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-secondary">Home</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-secondary">Features</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-secondary">Pricing</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-secondary">FAQs</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-secondary">About</a></li>
                </ul>
            </div>
            <div class='col-md-3 text-center'>
                <h5 class='text-white'>Contact</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-secondary">+62812345678</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-secondary">+62812345678</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-secondary">websitor@gmail.com</a></li>
                    {/* <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-secondary">+62812345678</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-secondary">+62812345678</a></li> */}
                </ul>
            </div>
            <div class='col-md-3 text-center '>
                <h5 class='text-white'>Section</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-secondary">Home</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-secondary">Features</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-secondary">Pricing</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-secondary">FAQs</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-secondary">About</a></li>
                </ul>
            </div>
        </footer>
    </div>
  )
}

export default Footer