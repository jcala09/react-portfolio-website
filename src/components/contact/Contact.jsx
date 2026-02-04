import React from 'react'

import Modal from './Modal.jsx'
import {useState} from "react";
import './Modal.css'

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
   <p href= '#' className='btn' onClick={() => setIsOpen(true)}>
        Contact Information
 </p>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </>
  )
}

export default Contact