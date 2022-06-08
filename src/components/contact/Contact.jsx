import React from 'react'
import './Contact.css'
import Modal from './Modal.jsx'
import {useState} from "react";
import './Modal.css'

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section id='contact'>
    <button className="primaryBtn" onClick={() => setIsOpen(true)}>
        Contact Information
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </section>
  )
}

export default Contact