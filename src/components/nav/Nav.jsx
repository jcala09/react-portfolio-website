import React from 'react'
import './Nav.css'
import {IoHomeOutline} from 'react-icons/io5'
import {BiUserCircle} from 'react-icons/bi'
import {FaRegNewspaper} from 'react-icons/fa'

import { useState } from 'react'
const Nav = () => {
  const[activeNav,setActiveNav]= useState('#')
  return (
    <nav>
      <a href="/#"  onClick={() => setActiveNav('#')}className={activeNav === '#' ? 'active': ''}><IoHomeOutline/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav ==='#about' ? 'active' : ''}><BiUserCircle/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav ==='#experience' ? 'active' : ''}><FaRegNewspaper/></a>
      
    </nav>
  )
}

export default Nav