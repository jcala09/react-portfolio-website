import React from 'react'

import Modal from './Modal.jsx'
import {useState} from "react";
import './Modal.css'

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
   <>
   <a className='btn' onClick={() => setIsOpen(true)}>
   Contact Information
 </a>
 {isOpen && <Modal setIsOpen={setIsOpen} />}
 </>
  )
}

export default Contact