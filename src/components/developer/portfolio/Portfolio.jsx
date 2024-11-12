import React, { Component } from 'react'

import './portfolio.css'
import logo from '../../../assets/square-favicon.png'
import ifp from '../../../assets/ifp.png'

import ScrollMenu from 'react-horizontal-scrolling-menu';

const Portfolio = () => {

  const projects = [
    {
      id: 1,
      name: "Inkatha Freedom Party web admin",
      image: ifp,
    },
    {
      id: 2,
      name: "Portfolio website",
      image: logo,
    },
  ];

  const Card = ({ projectName, isActive }) => {
    const cardClassName = isActive ? 'card active' : 'card';
    
    return (
      <div className={cardClassName}>
        <h2>{projectName}</h2>
      </div>
    );
  };

  return (
    <>
      <div id='portfolio'>
        <br/>
        <h5> Portfolio: </h5>
        <h2> Projects I've been involved in </h2>
        <br/>

        <div className='card'>
          {projects.map((project, index) => (
            <Card key={index} name={project.name} />
          ))};
        </div>

      </div>
    </>
  )
}

export default Portfolio