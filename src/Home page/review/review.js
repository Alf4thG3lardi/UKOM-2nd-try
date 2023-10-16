import React from 'react';
import orang from '../../assets/orang.jpg';


const review = () => {
  return (
    <div class="container-md my-5 card">
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

  )
}

export default review