import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'

const contact = () => {
  return (
    <div id='contact'>
      <h5> Get in touch! </h5>
      <h2> Contact me </h2>

      <div className="container contact__container">

        <div className="contact__options">
          <div className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4> Email </h4>
            <h5> dev@sinezondi.com </h5>
          </div>
        </div>

        <form action="">
          <input type="text" name="name" placeholder="Full name" required/>
          <input type="email" name="email" placeholder="Email address" required/>
          <textarea name="message" rows="7" placeholder="Your message" required></textarea>
          <button type="submit" className="btn btn-primary"> Send </button>
        </form>

      </div>

    </div>
  )
}

export default contact