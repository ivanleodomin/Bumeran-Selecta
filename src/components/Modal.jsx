import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import './Modal.css'

const Modal = ({closeModal}) => {

    return (
        <div className='modalBackground' >
                <div className='modalContainer   '>                 
                <button className='titleCloseBtn' 
                onClick={()=>closeModal(false)} ><AiOutlineClose/></button>
                <div className='container' ></div>
                <div className='title' >
                  <h1> Are u sure u want to continue?</h1>
                   </div>
                <div className='body' >
                  <p>Information about recruiter</p>
                </div>
                <div className='footer' >
                  <button id='cancelBtn' >Cancel</button>
                  <button>Continue</button>
                </div>
                </div>
                </div>
    )
}

export default Modal
