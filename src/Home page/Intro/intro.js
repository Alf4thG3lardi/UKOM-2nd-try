import React from 'react';
import "./intro.css";
import bg from '../../assets/bg.jpg';

const Intro = () => {
  return (
    <div>
      <div id="carouselExampleDark" class="carousel carousel-light slide">
        <div class="carousel-indicators d-none">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>  
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src={bg} class="d-block w-100 introimg"  alt="first img"/>
            <div class="carousel-caption text-start text-white">
              <h2 class='fs-1' style={{ fontSize:"400px" }}>Jasa Pembuatan Website</h2>
              <h4 class='fs-5'>Kami Adalah Pilihan Terbaik Anda!</h4>
              <p>Platform dengan pembuatan website yang cepat dan terpercaya. <br /> Anda bisa stalking website kami untuk informasi lebih lengkap!
              </p>
              {/* <button type="button" class="btn btn-primary">Learn more</button> */}
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={bg} class="d-block w-100 introimg" alt="second img"/>
            <div class="carousel-caption text-center text-white">
              <p class='fs-1'>Second slide label</p>
              <p class='fs-5'>Some representative placeholder content for the second slide.</p>
              <button type="button" class="btn btn-primary">Contact us</button>
            </div>
          </div>
          <div class="carousel-item">
            <img src={bg} class="d-block w-100 introimg" alt="third img"/>
            <div class="carousel-caption text-end text-white">
              <p class='fs-1'>Third slide label</p>
              <p class='fs-5'>Some representative placeholder content for the third slide.</p>
              <button type="button" class="btn btn-primary">Portofolio</button>

            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Intro