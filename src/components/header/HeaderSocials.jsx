import React from 'react'
import './Header.css'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/jerome-cala-515295210/" target="_blank" rel="noreferrer"><AiOutlineLinkedin/></a>
        <a href="https://github.com/jcala09" target="_blank" rel="noreferrer"><AiOutlineGithub/></a>
        <a href="https://instagram.com/jerome_cala" target="_blank" rel="noreferrer"><AiOutlineInstagram/></a>
        <a href="https://twitter.com/jcala9" target="_blank" rel="noreferrer"><AiOutlineTwitter/></a>
    </div>
  )
}

export default HeaderSocials