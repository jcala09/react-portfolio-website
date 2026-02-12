import React from 'react'
import CV from '../../assets/Jerome_Cala_Resume.docx'
import Contact from '../contact/Contact.jsx'
import '../contact/Contact.css'
import ME from '../../assets/gradpic.png'
import './Header.css'

const CTA = () => {
  return (
    <>
      <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <p><Contact/></p>
      </div>
      <div className="me">
        <img src={ME} alt="Jerome Cala" />
      </div>
    </>
  )
}

export default CTA