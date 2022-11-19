import React from 'react'
import './about.css'
import aboutMeImage from '../../assets/IMG_E8584.JPG'
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {FiFolderPlus} from 'react-icons/fi'

const About = () => {
  return (
    <section id='about'>
      
      <h5> Who am I? </h5>
      <h2> About me </h2>

      <div className='container about__container'>
        
        <div className='about__me'>
          <div>
            <img src={aboutMeImage} alt='about me' className='about__me-image'/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>

            <article className='about__card'>
              <FiAward className='about__icon'/>
              <h5> Experience </h5>
              <small> 1 year work experience </small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5> Clients </h5>
              <small> 10+ nation wide </small>
            </article>

            <article className='about__card'>
              <FiFolderPlus className='about__icon'/>
              <h5> Projects </h5>
              <small> None completed </small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia 
            odio vitae odio luctus rhoncus. Ut mauris orci, vehicula non enim in, sodales 
            ultrices purus. Phasellus fringilla aliquam nisi sed efficitur. Praesent turpis 
            ipsum, luctus in massa vel, malesuada blandit leo.
          </p>

          <a href='#contact' className='btn btn-primary'>
            I'm interested.
          </a>
          
        </div>

      </div>

    </section>
  )
}

export default About