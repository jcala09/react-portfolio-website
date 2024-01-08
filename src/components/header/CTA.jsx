import React from 'react'
import CV from '../../assets/Resume.pdf'
import Contact from '../contact/Contact.jsx'
import '../contact/Contact.css'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <p><Contact/></p>
    </div>
  )
}

export default CTA