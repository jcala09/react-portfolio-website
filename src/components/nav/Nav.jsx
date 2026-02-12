import React from 'react'
import './Nav.css'
import {IoHomeOutline} from 'react-icons/io5'
import {BiUserCircle} from 'react-icons/bi'
import {FaDatabase, FaRegNewspaper} from 'react-icons/fa'

import { useState } from 'react'
const Nav = () => {
  const[activeNav,setActiveNav]= useState('#')
  return (
    <nav>
      <a 
        href="#header" 
        onClick={() => setActiveNav('#header')} 
        className={activeNav === '#header' ? 'active' : ''}
      >
        <IoHomeOutline />
      </a>
      <a 
        href="#about" 
        onClick={() => setActiveNav('#about')} 
        className={activeNav === '#about' ? 'active' : ''}
      >
        <BiUserCircle />
      </a>
      <a 
        href="#experience" 
        onClick={() => setActiveNav('#experience')} 
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <FaRegNewspaper />
      </a>
      <a 
        href="#portfolio" 
        onClick={() => setActiveNav('#portfolio')} 
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <FaDatabase />
      </a>
    </nav>
  )
}

export default Nav