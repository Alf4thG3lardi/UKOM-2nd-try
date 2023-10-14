import React from 'react';
import './about.css';
import logo from '../../assets/logo.png';


const About = () => {
  return (
    <div class='container'>
        <div class='row align-items-center'>
            <div class='col-md-7 text-white'>
                <h2 class='display-3'>About Us</h2>
                <p class='lead'>Ex fugiat fugiat dolore deserunt ullamco Lorem aliqua magna fugiat. Ea do fugiat cillum nostrud. Cupidatat fugiat adipisicing commodo officia incididunt Lorem ut officia. Adipisicing fugiat irure commodo sunt exercitation veniam commodo ipsum dolore consequat.
                </p>
            </div>

            <div class='col-md-5 mx-auto'>
                <img src={logo}  />
            </div>
        </div>
        <hr class='hr' />
        <div class='row align-items-center'>
            <div class='col-md-5 mx-auto'>
                <img src={logo}  />
            </div>
            <div class='col-md-7 text-white text-end'>
                <h2 class='display-3'>About Us</h2>
                <p class='lead'>Ex fugiat fugiat dolore deserunt ullamco Lorem aliqua magna fugiat. Ea do fugiat cillum nostrud. Cupidatat fugiat adipisicing commodo officia incididunt Lorem ut officia. Adipisicing fugiat irure commodo sunt exercitation veniam commodo ipsum dolore consequat.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About