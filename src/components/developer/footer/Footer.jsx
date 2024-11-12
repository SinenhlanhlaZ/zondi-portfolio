import React from 'react'
import './footer.css'

import {BsInstagram} from 'react-icons/bs'
import logo from '../../../assets/square-favicon.png'

const Footer = () => {
  return (
    <div id="footer">
      
      <div className="image__container">
        <a href="#" className="footer__logo">
          <img src={logo} alt="logo"/>
        </a>
      </div>
      
      <div className="links__container">
        <ul className="list">
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href='https://www.instagram.com/sine.zondi/' target="_blank" rel="noreferrer"><BsInstagram/></a>
          </li>
        </ul>
      </div>

      

      <div className="">
        <small>&copy; 2024 Sinenhlanhla Zondi </small>
      </div>

    </div>
  )

}

export default Footer