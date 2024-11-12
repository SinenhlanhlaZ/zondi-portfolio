import React from 'react'

import About from '../developer/about/About'
import Contact from '../developer/contact/contact'
import Experience from '../developer/experience/experience'
import Footer from '../developer/footer/Footer'
import Header from '../developer/header/Header'
import Nav from '../developer/nav/Nav'

const Developer = () => {
  return (
    <div>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Developer