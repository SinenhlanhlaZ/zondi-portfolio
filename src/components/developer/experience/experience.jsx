import React from 'react'
import './experience.css'
import {BsCheckCircleFill} from 'react-icons/bs'

const frontend = [
  {
    title: "HTML",
    frontendLevel: "Experienced"
  },
  {
    title: "CSS/SCSS",
    frontendLevel: "Experienced"
  },
  {
    title: "JavaScript",
    frontendLevel: "Experienced"
  },
  {
    title: "Flutter",
    frontendLevel: "Beginner"
  },
  {
    title: "React",
    frontendLevel: "Experienced"
  },
]

const backend = [
  {
    title: "Java",
    backendLevel: "Experienced"
  },
  {
    title: "Springboot",
    backendLevel: "Experienced"
  },
  {
    title: "MySQL",
    backendLevel: "Experienced"
  },
  {
    title: "SQL",
    backendLevel: "Intermediate"
  },
  {
    title: "Bash",
    backendLevel: "Experienced"
  },
  {
    title: "Nginx",
    backendLevel: "Intermediate"
  },
]

const other = [
  {
    title: "Git",
    experienceLevel: "Experienced"
  },
  {
    title: "GitHub",
    experienceLevel: "Experienced"
  },
  {
    title: "Firebase",
    experienceLevel: "Experienced"
  },
  {
    title: "GitHub Actions",
    experienceLevel: "Beginner"
  },
  {
    title: "Figma",
    experienceLevel: "Beginner"
  },
  {
    title: "Swagger",
    experienceLevel: "Experienced"
  },
  {
    title: "Postman",
    experienceLevel: "Experienced"
  },
]

const experience = () => {
  return (
    <section id='experience'>
      <br/>
      <h5> Experience: </h5>

      <h2> Languages and Frameworks </h2>
      
      <div className='container experience__container'>
        <div className='experience_frontend'>
          <h3> Frontend Development </h3>
          <br/>
          <div className='experience__content'>
            {
              frontend.map(({index, title, frontendLevel}) => {
                return(
                  <div className='experience__details'>
                    <BsCheckCircleFill/>
                    <h4>{title}</h4>
                    <small className='text-light'> {frontendLevel} </small>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className='experience__backend'>
          <h3> Backend Development </h3>
          <br/>
          <div className='experience__content'>
            {
              backend.map(({index, title, backendLevel}) => {
                return(
                  <div className='experience__details'>
                    <BsCheckCircleFill/>
                    <h4> {title} </h4>
                    <small className='text-light'> {backendLevel} </small>
                  </div>
                )
              })
            }

          </div>
        </div>
      </div>

      <div className='experience__other'>
        <h3> Other experience </h3>
        <br/>
        <div className='experience__content'> 
          {
            other.map(({index, title, experienceLevel}) => {
              return(
                <div className='experience__details'>
                  <BsCheckCircleFill/>
                  <h4>{title}</h4>
                  <small className='text-light'>{experienceLevel}</small>
                </div>
              )
            })
          }
        </div>
      </div>

      <br/>
      
    </section>
  )
}

export default experience
