import React from 'react';
import html from '../../assets/ikon html.png'
import css from '../../assets/ikon css.png'
import php from '../../assets/ikon php.png'
import js from '../../assets/ikon js.png'

const Expert = () => {
  return (
    <center>
      <h3 className='text-white my-5'>Our Expertise</h3>
        <img src={html} style={{ width:"200px" }} alt="" />
        <img src={css} style={{ width:"200px" }} alt="" />
        <img src={php} style={{ width:"200px" }} alt="" />
        <img src={js} style={{ width:"200px" }} alt="" />
    </center>
  )
}

export default Expert
