import React from 'react';
import checklist from '../../assets/checklist icon.png';

const Expert = () => {
  return (
    <div class='container d-flex align-items-center my-5' style={{height:'100vh'}}>
        <div class='mx-auto'>
            <p class='h1 text-secondary text-center mt-5 mb-2'>Expertise</p>
            <p className='h5 text-white text-center mb-5'>Keahlian yang Kami Miliki Untuk Penuhi Kebutuhan Anda!</p>
            <div class='d-flex flex-row justify-content-center'>
                <div class="border border-primary border-2 rounded-2 me-3" style={{ width:'23rem', height:'15rem', }}>
                  <img className='ms-2 mt-2' src={checklist} alt="" style={{ width:'37px'}}/>
                </div>
                <div class="border border-primary border-2 rounded-2" style={{ width:'23rem', height:'15rem', }}>
                  <img className='ms-2 mt-2' src={checklist} alt="" style={{ width:'37px'}}/>
                </div>
                <div class="border border-primary border-2 rounded-2 ms-3" style={{ width:'23rem', height:'15rem', }}>
                  <img className='ms-2 mt-2' src={checklist} alt="" style={{ width:'37px'}}/>
                </div>
            </div>

            <div class='d-flex flex-row justify-content-center my-4'>
                <div class="border border-primary border-2 rounded-2 me-3" style={{ width:'23rem', height:'15rem', }}>
                  <img className='ms-2 mt-2' src={checklist} alt="" style={{ width:'37px'}}/>
                </div>
                <div class="border border-primary border-2 rounded-2" style={{ width:'23rem', height:'15rem', }}>
                  <img className='ms-2 mt-2' src={checklist} alt="" style={{ width:'37px'}}/>
                </div>
                <div class="border border-primary border-2 rounded-2 ms-3" style={{ width:'23rem', height:'15rem', }}>
                  <img className='ms-2 mt-2' src={checklist} alt="" style={{ width:'37px'}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Expert