import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiSolidUser} from 'react-icons/bi'
import {BsGear} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineMail} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ' '}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ' '}><BiSolidUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ' '}><BsGear /></a>
      <a href="#service" onClick={() => setActiveNav('#service')} className={activeNav === '#service' ? 'active' : ' '}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ' '}><AiOutlineMail /></a>
    </nav>
  )
}

export default Nav