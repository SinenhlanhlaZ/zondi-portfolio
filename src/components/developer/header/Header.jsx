import React from 'react'
import './header.css'
import ME from '../../../assets/portrait-image.jpg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <br/>
      <div className = "container header__container">
        <div className="text__container">
          <h5> Hello I'm, </h5>
          <h1> Sinenhlanhla Zondi. </h1>
          <h5 className="text-light"> A fullstack junior developer </h5>
        </div>
        
        <img src={ME} className="me" alt="me"/>

      </div>
      <HeaderSocial />
      <br/>
    </header>
  )
}

export default Header