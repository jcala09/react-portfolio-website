import React from 'react'
import './Header.css'
import CTA from './CTA'
//import ME from '../../assets/gradpic.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <section id="header">
      <div className="container header__container">
        <h4>Welcome to</h4>
        <h1>Jerome's Hub</h1>
        <h3 className="text-light">Senior Associate Software Engineer</h3>
        <h5 className="text-light">L3Harris</h5>
        <CTA />
        <HeaderSocials />
      </div>
    </section>
  )
}

export default Header