import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Contact from './components/contact/contact'
import Experience from './components/experience/experience'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App