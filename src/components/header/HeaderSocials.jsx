import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/sinenhlanhla-z-44aa66108/' target="_blank" rel="noreferrer">
            <BsLinkedin/>
        </a>
        <a href='https://github.com/SinenhlanhlaZ' target="_blank" rel="noreferrer">
            <BsGithub/>
        </a>
        <a href='https://www.instagram.com/sine.zondi/' target="_blank" rel="noreferrer">
            <BsInstagram/>
        </a>
    </div>
  )
}

export default HeaderSocials