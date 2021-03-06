import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/about_me_image.jpg'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Welcome to</h5>
        <h1>Jerome's Hub</h1>
        <h5 className= "text-light">Full Stack Dev</h5>
        <CTA />
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt='me'/>
          </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
      
    
  )
}

export default Header