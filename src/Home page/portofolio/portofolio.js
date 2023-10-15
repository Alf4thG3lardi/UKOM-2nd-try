import React from 'react';
import port1 from '../../assets/port1.webp';
import port2 from '../../assets/port2.png';
import port3 from '../../assets/port3.webp';


const Portofolio = () => {
  return (
    <div class='container my-4'>
        <h1 class='text-white text-center mb-4 display-4 fw-semibold'>Portofolio</h1>
        <div id="carouselExample" class="carousel slide carousel-dark">
            <div class="carousel-inner" style={{height:"75vh"}}>
                <div class="carousel-item active">
                <img src={port1} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={port2} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={port3} class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

export default Portofolio