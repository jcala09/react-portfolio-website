import React from 'react'
import CV from '../../assets/cv.pdf'
import Contact from '../contact/Contact.jsx'
import '../contact/Contact.css'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a><Contact/></a>
    </div>
  )
}

export default CTA