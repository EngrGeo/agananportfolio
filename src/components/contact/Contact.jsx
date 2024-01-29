import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {PiMessengerLogo} from 'react-icons/pi'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_odsa7q6', 'template_2pcdvq8', form.current, 'xpO6b5ebfKqRXQ-eN')

    e.target.reset();
  };

  return (
    <section id='contact'>
    <h5>Get in touch</h5>
    <h2>Contact me</h2>

    <div className="container contact_container">
      <div className="contact_options">
        <article className="contact_option">
          <MdOutlineEmail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>aganan.cpe@gmail.com</h5>
          <a href="mailto:aganan.cpe@gmail.com" target="_blank">Send a message</a>
        </article>
        <article className="contact_option">
          <PiMessengerLogo className='contact_option-icon'/>
          <h4>Messenger</h4>
          <h5>Georgie Arropo Aganan</h5>
          <a href="https://m.me/georgie.aganan/" target="_blank">Send a message</a>
        </article>
        <article className="contact_option">
          <BsWhatsapp className='contact_option-icon'/>
          <h4>Whatsapp</h4>
          <h5>+639636700615</h5>
          <a href="https://api.whatsapp.com/send?phone+639636700615" target="_blank">Send a message</a>
        </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
    </section>
  )
}

export default Contact