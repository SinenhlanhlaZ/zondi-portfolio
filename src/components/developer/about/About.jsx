import React from 'react'
import './about.css'
import aboutMeImage from '../../../assets/IMG_E8584.JPG'
import {FiAward} from 'react-icons/fi'
import {FiFolderPlus} from 'react-icons/fi'
import CV from '../../../assets/cv_sinenhlanhla.pdf'

const About = () => {
  return (
    <section id='about'>
      <br/>
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
              <small> 2 years </small>
            </article>
          </div>

          <p>
            My name is Sinenhlanhla (Sine for short, pronounced See-neh). <br/><br/>
            I'm a software engineer with a strong passion for building impactful 
            web and mobile applications. While much of my technical knowledge is 
            self-taught, I've honed my skills through hands-on projects and real-world 
            problem-solving. I'm known for my ability to quickly learn and adapt to new 
            technologies, which allows me to stay ahead in an ever-evolving field. I thrive 
            on creating intuitive, user-friendly solutions and enjoy the process of turning 
            complex ideas into functional, secure applications. <br/><br/>I'm always eager to learn, 
            collaborate, and contribute to projects that make a difference.
          </p>

          <a href={CV} target="_blank" className='btn btn-primary' rel="noreferrer">
            View CV
          </a>
          
        </div>

      </div>
      <br/>

    </section>
  )
}

export default About