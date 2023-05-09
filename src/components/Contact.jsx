import React from 'react'
import contact from '../assets/img/contact.svg'

function Contact() {
  return (
    <div className='contact'>
      <img src={contact} />

      <div className="right-part">
        <div className="top-part">
          <input
            placeholder='First Name'
            className='input'
            type="text" />
          <input
            placeholder='Last Name'
            className='input'
            type="text" />
          <input
            placeholder='Email Address'
            className='input'
            type="text" />
          <input
            placeholder='Phone Num'
            className='input'
            type="text" />
        </div>
        <textarea placeholder='Massage' className='input2' rows="20" cols="50">
        </textarea>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Contact
