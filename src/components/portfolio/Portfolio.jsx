import React, { useState } from 'react'
import './portfolio.css'
import logo from '../../assets/square-favicon.png'
import ifp from '../../assets/ifp.png'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'

const Portfolio = () => {

  const [appState, changeAppState] = useState({
    active: null,
    objects: [
      {
        id: 1,
        title: "Portfolio website",
        lang: "JavaScript, CSS, HTML",
        framework: "React",
        role: "Drafting, designing and coding",
        demo: "www.sinezondi.com",
        image: logo
      },
      {
        id: 2,
        title: "Inkatha Freedom Party mobile application",
        lang: "Java",
        framework: "Springboot",
        role: "Writing & testing APIs",
        demo: "www.sinezondi.com",
        image: ifp
      },
    ]
  });

  function toggleActive(index){
    changeAppState({...appState, active: appState.objects[index]})
  }

  function toggleActiveStyles(index){
    if(appState.objects[index] === appState.active){
      return "active";
    }
    else{
      return "inactive";
    }
  }

  return (
    <div id='portfolio'>
      <h5> My recent work </h5>
      <h2> Portfolio </h2>

      <div className='portfolio__container'>
        <div className='leftArrow'>
          <AiOutlineLeft className='btn arrow'/>
        </div>

        <div className='slide__container'>
          <div className="portfolio__container">
            {
              appState.objects.map(({index, id, title, lang, framework, role, demo, image}) => {
                return(
                  <div className='portfolio__item'>
                    <div className="item__summary__container">
                      <div className="portfolio__item-image">
                        <img src={image} alt='alternate'/>
                      </div>
                      <h5> {title} </h5>
                    </div>

                    <div className="item__detail__description">
                      <div>
                        <h3> Language(s): <br/> {lang} </h3> <br/>
                        <h3> Framework(s): <br/> {framework} </h3> <br/>
                        <h5> Role: <br/> {role} </h5> <br/>
                        <a href={demo} target='_blank' rel="noreferrer" className='btn'>Demo</a>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className='rightArrow'>
          <AiOutlineRight className='btn arrow'/>
        </div>
      </div>
    </div>
  )
}

export default Portfolio