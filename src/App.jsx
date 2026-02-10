import React from 'react'
import TechBackground from './components/tech-background/TechBackground'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
// import Services from './components/services/Services'
// import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <TechBackground />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      {/* <Services /> */}
      {/* <Footer /> */}
    </>
  )
}

export default App