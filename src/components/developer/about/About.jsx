import React from 'react'
import './about.css'
import aboutMeImage from '../../../assets/IMG_E8584.JPG'
import {FiAward} from 'react-icons/fi'
import {FiFolderPlus} from 'react-icons/fi'
import CV from '../../../assets/cv.pdf'

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

            <article className='about__card'>
              <FiFolderPlus className='about__icon'/>
              <h5> Projects </h5>
              <small> 2 completed </small>
              {/* <br/> */}
              {/* <small> 1 in progress </small> */}
            </article>
          </div>

          <p>
            My name is Sinenhlanhla (Sine for short, pronounced See-neh). 
            Though still new to the industry and its processes, I have found 
            joy in developing web & mobile applications, front and backend. 
            I am self taught in most of the things I know, so that is one of my  
            strengths, being a quick and efficient learner. I have learned a lot 
            through networking, and that is thanks to 
            my mentor, <a href="https://www.linkedin.com/in/bonginhlanhla-mkhize-25a16024/" target="_blank" rel="noreferrer">Bonginhlanhla Mkhize</a>!
            <br/><br/>
            I am an intern at <a href="https://www.zamambo.co.za" target="_blank" rel="noreferrer">Zamambo Telecoms</a> 
            (based in Cape Town), who is open to any new experiences.
          </p>

          <a href='#' target="_blank" className='btn btn-primary' rel="noreferrer">
            View CV
          </a>
          
        </div>

      </div>
      <br/>

    </section>
  )
}

export default About