import React from "react";
import  "./Modal.css";

import {RiCloseLine} from "react-icons/ri";

const Modal = ({setIsOpen}) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Contact Information</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine  />
          </button>
          <div className="modalContent">
              <p>Email: b.cala@ttu.edu</p>
              <p>Phone: 432-755-6911</p>
              
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
  }
export default Modal;