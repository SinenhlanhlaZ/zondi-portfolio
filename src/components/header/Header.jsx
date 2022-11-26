import React from 'react'
import './header.css'
import ME from '../../assets/portrait-image.jpg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className = "container header__container">
        
        <h5> Hello I'm, </h5>
        <h1> Sinenhlanhla Zondi. </h1>
        <h5 className="text-light"> A fullstack junior developer </h5>
        
        <div className="me">
          <img src={ME} alt="me"/>
        </div>

      </div>
      <HeaderSocial />
    </header>
  )
}

export default Header