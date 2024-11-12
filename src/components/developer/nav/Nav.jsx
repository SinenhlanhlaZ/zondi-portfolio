import React, {useState} from 'react'
import './nav.css'
import {FiUser} from 'react-icons/fi'
import {AiOutlineFolderOpen, AiOutlineProfile, AiOutlineHome} from 'react-icons/ai'
import {BiMessageDetail} from 'react-icons/bi'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
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
      {/* eslint-disable-next-line */}
      <a href='#' className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome/>
      </a>

      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <FiUser/>
      </a>

      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
        <AiOutlineProfile/>
      </a>

      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#services' ? 'active' : ''}>
        <AiOutlineFolderOpen/>
      </a>

      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <BiMessageDetail/>
      </a>
    </nav>
  )
}

export default Nav