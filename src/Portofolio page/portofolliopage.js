import React from 'react';
import web1 from '../assets/web1.jpeg';
import web2 from '../assets/web2.jpeg';
import web3 from '../assets/web3.jpeg';
import web4 from '../assets/web4.jpeg';


const Portofolliopage = () => {
  return (
    <div class='container py-5' style={{height:"fit-content"}}>
      <p class="text-secondary text-center" style={{ fontFamily: "Poppins", fontWeight: "900", fontSize: "70px", marginTop:"50px"}}>
          Our <span class="text-white text-center" style={{ fontFamily: "Poppins", fontWeight: "900", fontSize: "70px" }}>Portfolio</span>
        </p>
        <div class='row mt-5 mx-auto' style={{ marginBottom:"70px" }}>
            <div class='col-md-6'>
              <div class="card text-white" style={{width:'90%', background:"#7893D8"}}>
                <div class="card-header" >
                  Web name
                </div>
                <img src={web1} class="card-img-top" style={{height:"80vh"}} alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Web Name</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn text-white" style={{background: "#0e2c48"}}>Visit website</a>
                </div>
              </div>
            </div>
            <div class='col-md-6'>
              <div class="card text-white" style={{width:'90%', background:"#7893D8"}}>
                <div class="card-header" >
                  Web name
                </div>
                <img src={web2} class="card-img-top" style={{height:"80vh"}} alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Web Name</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn text-white" style={{background: "#0e2c48"}}>Visit website</a>
                </div>
              </div>
            </div>
        </div>

        <div class='row my-5 mx-auto'>
            <div class='col-md-6'>
              <div class="card text-white" style={{width:'90%', background:"#7893D8"}}>
                <div class="card-header" >
                  Web name
                </div>
                <img src={web3} class="card-img-top" style={{height:"80vh"}} alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Web Name</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn text-white" style={{background: "#0e2c48"}}>Visit website</a>
                </div>
              </div>
            </div>
            <div class='col-md-6'>
              <div class="card text-white" style={{width:'90%', background:"#7893D8"}}>
                <div class="card-header" >
                  Web name
                </div>
                <img src={web4} class="card-img-top" style={{height:"80vh"}} alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Web Name</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn text-white" style={{background: "#0e2c48"}}>Visit website</a>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Portofolliopage