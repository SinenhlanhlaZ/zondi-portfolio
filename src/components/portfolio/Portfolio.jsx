import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
//import IMG2 from '../../assets/portfolio2.jpg'
//import IMG3 from '../../assets/portfolio3.jpg'
//import IMG4 from '../../assets/portfolio4.jpg'
// import IMG5 from '../../assets/portfolio5.jpg'
// import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My recent work </h5>
      <h2> Portfolio </h2>

      <div>
        <div className="container portfolio__container">
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG1} alt='alternate'/>
            </div>
            <h3> This is a portfolio item title </h3>
            <a href='www.github.com' target='_blank' className='btn'>GitHub</a>
            <a href='www.github.com' target='_blank' className='btn btn-primary'>Live demo</a>
          </article>
        </div>

        <div className="container portfolio__container">
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG1} alt='alternate'/>
            </div>
            <h3> This is a portfolio item title </h3>
            <a href='www.github.com' target='_blank' className='btn'>GitHub</a>
            <a href='www.github.com' target='_blank' className='btn btn-primary'>Live demo</a>
          </article>
        </div>

        <div className="container portfolio__container">
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG1} alt='alternate'/>
            </div>
            <h3> This is a portfolio item title </h3>
            <a href='www.github.com' target='_blank' className='btn'>GitHub</a>
            <a href='www.github.com' target='_blank' className='btn btn-primary'>Live demo</a>
          </article>
        </div>

        <div className="container portfolio__container">
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG1} alt='alternate'/>
            </div>
            <h3> This is a portfolio item title </h3>
            <a href='www.github.com' target='_blank' className='btn'>GitHub</a>
            <a href='www.github.com' target='_blank' className='btn btn-primary'>Live demo</a>
          </article>
        </div>

        <div className="container portfolio__container">
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG1} alt='alternate'/>
            </div>
            <h3> This is a portfolio item title </h3>
            <a href='www.github.com' target='_blank' className='btn'>GitHub</a>
            <a href='www.github.com' target='_blank' className='btn btn-primary'>Live demo</a>
          </article>
        </div>

        <div className="container portfolio__container">
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG1} alt='alternate'/>
            </div>
            <h3> This is a portfolio item title </h3>
            <a href='www.github.com' target='_blank' className='btn'>GitHub</a>
            <a href='www.github.com' target='_blank' className='btn btn-primary'>Live demo</a>
          </article>
        </div>
      </div>

    </section>
  )
}

export default Portfolio