import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/gradpic.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Welcome to</h5>
        <h1>Jerome's Hub</h1>
        <h5 className= "text-light">Associate Software Engineer</h5>
        <h6 className= "text-light">L3Harris</h6>
        <CTA />
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt='me'/>
          </div>
      </div>
    </header>
      
    
  )
}

export default Header