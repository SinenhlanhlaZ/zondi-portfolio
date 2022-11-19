import React from 'react'
import './nav.css'
import {FiHome} from 'react-icons/fi'
import {FiUser} from 'react-icons/fi'
import {MdCardTravel} from 'react-icons/md'
import {RiHandCoinLine} from 'react-icons/ri'
import {BiMessageDetail} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] 
  = useState('#')
  /*
  -default useState is the top of the page which
  has an id value of '#'
  -'activeNav' is the default useState
  -'setActiveNav' is the update useState
  */
  
/*
NB: the useState used in the first anchor tag
    is for the circle (on the nav bar) that indicates 
    the current section the user is on
*/

  return (
    <nav className='nav-bar'>
      {/*
        if activeNav has a '#' value, then
        set it to the active class, and if
        not, then give it a value of nothing
      */}
      <a href='#' 
      className={activeNav === '#' ? 'active' : ''}>
        <FiHome/>
      </a>

      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <FiUser/>
      </a>

      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
        <MdCardTravel/>
      </a>

      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>
        <RiHandCoinLine/>
      </a>

      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <BiMessageDetail/>
      </a>
    </nav>
  )
}

export default Nav