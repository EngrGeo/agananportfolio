import React from 'react'
import './about.css'
import ME from '../../picture/about-me.jpg'
import {LuAward} from 'react-icons/lu'
import {BiUserCheck} from 'react-icons/bi'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
           
            <article className='about_card'>
            <LuAward className='about_icon'/>
              <h5>Experience</h5>
              <small>6 months of working</small>
            </article>

            <article className='about_card'>
            <BiUserCheck className='about_icon'/>
              <h5>Clients</h5>
              <small>2 clients</small>
            </article>

            <article className='about_card'>
            <AiOutlineFolderOpen className='about_icon'/>
              <h5>Project</h5>
              <small>3 completed project</small>
            </article>
            
          </div>
          <p>
          Recent University graduate with a passion for web development, computer programming, data 
analytics and software development. Seeking to acquire the appropriate position to where I can fully 
contribute and enhance my knowledge, skills and achieve mutual progress with the company.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About