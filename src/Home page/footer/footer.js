import React from 'react';
import logo from '../../assets/logoo.png';

const Footer = () => {
  return (
    <div class='container'>
        <footer class='row py-5 border-top border-secondary'>
            <div class='col-md-3'>
                <a class=' d-flex align-items-center mb-3 link-body-emphasis text-decoration-none'>
                    <img src={logo} width='130' height='130'/>
                </a>
                <p class='text-light'>Mitra andalan Anda untuk solusi website berkualitas. Menjadi salah satu pilihan terkemuka bagi individu, bisnis kecil, hingga perusahaan besar dalam mencapai tujuan online mereka.</p>
                <p class='text-secondary'>&copy; 2025</p>
            </div>
            <div class='col-md-2 text-center'>
                <h5 class='text-white'>Contact</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-secondary">+62812345678</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-secondary">+62812345678</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-secondary">websitor@gmail.com</a></li>
                    {/* <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-secondary">+62812345678</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-secondary">+62812345678</a></li> */}
                </ul>
            </div>
            <div class='col-md-2 text-center'>
                <h5 class='text-white'>Section</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-secondary">Home</a></li>
                    <li class="nav-item mb-2"><a href="/portofolio" class="nav-link p-0 text-secondary">Portofolio</a></li>
                    <li class="nav-item mb-2"><a href="/pricing" class="nav-link p-0 text-secondary">Pricing</a></li>
                </ul>
            </div>
            <div class='col-md-2 text-center '>
                <h5 class='text-white'>Website</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="/web/instan" class="nav-link p-0 text-secondary">Website Instant</a></li>
                    <li class="nav-item mb-2"><a href="/web/custom" class="nav-link p-0 text-secondary">Website Custom</a></li>
                </ul>
            </div>
        </footer>
    </div>
  )
}

export default Footer