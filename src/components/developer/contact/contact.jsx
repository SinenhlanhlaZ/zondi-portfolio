import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'

const contact = () => {
  return (
    <div id='contact'>
      <br/>
      <h5> Get in touch! </h5>
      <h2> Contact me </h2>

      <div className="container contact__container">
        
        <div className="contact__options__container">
          <div className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4> Email </h4>
            <h5> dev@sinezondi.com </h5>
          </div>

          <div className="contact__option">
            <BsInstagram className="contact__option-icon"/>
            <h4> Instagram </h4>
            <h5> sine.zondi </h5>
          </div>
        </div>

        <div className="form__container">
          <form action="https://getform.io/f/97a4cb1a-1286-4d38-b374-d358efad3473" method="POST">
            <input type="text" name="name" placeholder="Full name" required/>
            <input type="email" name="email" placeholder="Email address" required/>
            <textarea name="message" rows="7" placeholder="Your message" required></textarea>
            <button type="submit" className="btn btn-primary"> Send </button>
          </form>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
    </div>
  )
}

export default contact