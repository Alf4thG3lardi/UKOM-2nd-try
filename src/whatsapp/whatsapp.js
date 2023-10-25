import React from 'react';
import whatsapp from '../assets/whatsaapppp.png';

const WhatsApp = () => {
  return (
    <div class="container py-5">
      <div className='row' style={{ marginTop: "110px"}}>
        <img src={whatsapp} className='mx-auto' alt="" style={{ width:'230px' }}/>
        <div className='h2 text-white text-center pb-5' style={{ marginTop:'30px' }}>Chat On WhatsApp with +62 878-5207-5150</div>
        <button className='mx-auto btn btn-success' style={{ fontSize:'19px', height:'65px', width:'200px', borderRadius:'70px' }}> <a href="whatsapp://send?text=Hello&phone=+6287852075150" className='text-white' style={{ textDecoration:'none' }}>Continue to Chat</a></button>
        <p>Halo Websitor, saya ingin mengetahui info terkait jasa pembuatan website yang Anda tawarkan. <br /> Termakasih.</p>
        </div>
    </div>
  )
}

export default WhatsApp