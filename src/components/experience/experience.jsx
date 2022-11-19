import React from 'react'
import './experience.css'
import {BsCheckCircleFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      
      <h5> Experience: </h5>

      <h2> Languages and Frameworks </h2>
      
      <div className='container experience__container'>
        <div className='experience_frontend'>
          <h3> Frontend Development </h3>
          <br/>

          <div className='experience__content'>
            <article className='experience__details'>
              <BsCheckCircleFill/>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsCheckCircleFill/>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsCheckCircleFill/>
              <h4>Javascript</h4>
              <small className='text-light'>Intermediate</small>
            </article>  

            <article className='experience__details'>  
              <BsCheckCircleFill/>
              <h4>Flutter</h4>
              <small className='text-light'>Beginner</small>
            </article>

            <article className='experience__details'>  
              <BsCheckCircleFill/>
              <h4>Angular</h4>
              <small className='text-light'>Beginner</small>
            </article>

            <article className='experience__details'>
              <BsCheckCircleFill/>
              <h4>React</h4>
              <small className='text-light'>Beginner</small>
            </article>

            <article className='experience__details'>
              <BsCheckCircleFill/>
              <h4>Typescript</h4>
              <small className='text-light'>Beginner</small>
            </article>
              
          </div>
        </div>

        <div className='experience__backend'>
          
          <h3> Backend Development </h3>
          <br/>

          <div className='experience__content'>
            <article className='experience__details'>
              <BsCheckCircleFill/>
              <h4>Java</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsCheckCircleFill/>
              <h4>Springboot</h4>
              <small className='text-light'>Intermediate</small>
            </article>  

            <article className='experience__details'>
              <BsCheckCircleFill/>
              <h4>Quarkus</h4>
              <small className='text-light'>Beginner</small>
            </article>  

            <article className='experience__details'>
              <BsCheckCircleFill/>
              <h4>MySQL</h4>
              <small className='text-light'> Intermediate </small>
            </article>

            <article className='experience__details'>
              <BsCheckCircleFill/>
              <h4> H2 </h4>
              <small className='text-light'> Intermediate </small>
            </article>

            <br/><br/>
            <small className='text-light'>
              **I also have a lot of experience in creating
              REST APIs**
            </small>
          </div>
        </div>

        <div className='experience__content'>

            <h3> Other experience </h3>
            <br/>

            <article className='experience__details'>
              <BsCheckCircleFill/>
              <h4>Git</h4>
              <small className='text-light'>Experienced</small>
            </article>

        </div>

      </div>

    </section>
  )
}

export default experience