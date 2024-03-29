import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../picture/me.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>

      <div className="container header_container">
        <h5>Hello I am</h5>
        <h1>Georgie Aganan</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocial />


        <div className="me">
          <img src= {ME} alt="me" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header