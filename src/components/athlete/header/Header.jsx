import React from 'react'
import './header.css'

import {BsStrava} from 'react-icons/bs'
import {MdMailOutline} from 'react-icons/md'

const Header = () => {
  return (
    <header id="athlete">
      <div className="athlete__header__container">
          
          <div className="athlete__intro">
            <div className="intro__container">
              <h5> Hi there! I'm, </h5>
              <h1> Sinenhlanhla Zondi. </h1>
              <h5> Sine for short (see-neh). </h5>
            </div>

            <div className="athlete__image__container">
              <div className="athlete__info">
                <ul>
                  <li>Age: <br/>22 </li>
                  <li> Date of birth: <br/> 26th of May 2001 </li>
                  <li> Nationality: <br/> South African </li>
                  <li> Weight: <br/> 67kg </li>
                  <li> Height: <br/> 178cm </li>
                </ul>
              </div>
            </div>

          </div>

          <div className="socials__link__container">
            <a href="https://www.strava.com/athletes/12702557" target="_blank" rel="noreferrer">
              <BsStrava className="social__icon"/>
            </a>
            <a href="mailto:cycling@sinezondi.com" rel="noreferrer">
              <MdMailOutline className="social__icon"/>
            </a>
          </div>

      </div>
    </header>
  )
}

export default Header