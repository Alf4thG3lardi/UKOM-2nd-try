import React from 'react';
import orang from '../../assets/orang.jpg';


const review = () => {
  return (
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
      <div class="carousel-inner">
        <div class="carousel-item active">
    <div class="container-md mt-5 card">
  <div class="card-header">
  <img src= {orang} alt="" style={{width:'40px'}}/>
  Username Pelanggan
    {/* <div class="align-item">
      <div class="card-usn px-8" style={{float: ''}}>
        Username Pelanggan
      </div>
      <img src= {orang} alt="" style={{width:'40px'}}/>
    </div> */}
  </div>
  <div class="card-body">
    <h5 class="card-title">Judul Komentar</h5>
    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus non ad aut ipsa quam similique aspernatur, explicabo perspiciatis deleniti ea blanditiis vitae praesentium minus placeat. Nostrum obcaecati earum officiis rem?</p>
  </div>
</div>
</div>
<div class="carousel-item">
<div class="container-md mt-5 card">
  <div class="card-header">
  <img src= {orang} alt="" style={{width:'40px'}}/>
  Username Pelanggan
    {/* <div class="align-item">
      <div class="card-usn px-8" style={{float: ''}}>
        Username Pelanggan
      </div>
      <img src= {orang} alt="" style={{width:'40px'}}/>
    </div> */}
  </div>
  <div class="card-body">
    <h5 class="card-title">Judul Komentar</h5>
    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus non ad aut ipsa quam similique aspernatur, explicabo perspiciatis deleniti ea blanditiis vitae praesentium minus placeat. Nostrum obcaecati earum officiis rem?</p>
  </div>
</div>
</div>
<div class="carousel-item">
<div class="container-md mt-5 card">
  <div class="card-header">
  <img src= {orang} alt="" style={{width:'40px'}}/>
  Username Pelanggan
    {/* <div class="align-item">
      <div class="card-usn px-8" style={{float: ''}}>
        Username Pelanggan
      </div>
      <img src= {orang} alt="" style={{width:'40px'}}/>
    </div> */}
  </div>
  <div class="card-body">
    <h5 class="card-title">Judul Komentar</h5>
    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus non ad aut ipsa quam similique aspernatur, explicabo perspiciatis deleniti ea blanditiis vitae praesentium minus placeat. Nostrum obcaecati earum officiis rem?</p>
  </div>
</div>
</div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
  <span  class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>
</div>
  )
}

export default review