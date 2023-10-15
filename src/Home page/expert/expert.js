import React from 'react';
import logo from '../../assets/logo.png'

const Expert = () => {
  return (
    <div class='container d-flex align-items-center' style={{height:'100vh'}}>
        <div class='mx-auto'>
            <p class='h5 text-secondary text-center my-5'>Expertise</p>
            <div class='d-flex flex-row justify-content-center'>
                <img src={logo} height='100' width='100'/>
                <img src={logo} height='100' width='100'/>
                <img src={logo} height='100' width='100'/>
                <img src={logo} height='100' width='100'/>
                <img src={logo} height='100' width='100'/>
                <img src={logo} height='100' width='100'/>
            </div>
        </div>
    </div>
  )
}

export default Expert