import React from 'react'
import './service.css'
import {BsCheck2Square} from 'react-icons/bs'

export const Service = () => {
  return (
    <section id='service'>
      <h5>What I can offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>Database & Programming Language</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsCheck2Square className='service_list-icon'/>
              <p>HTML/CCS </p>
            </li>
            <li>
              <BsCheck2Square className='service_list-icon'/>
              <p>JavaScript</p>
            </li>
            <li>
              <BsCheck2Square className='service_list-icon'/>
              <p>MySQL</p>
            </li>
            <li>
              <BsCheck2Square className='service_list-icon'/>
              <p>Java</p>
            </li>
            <li>
              <BsCheck2Square className='service_list-icon'/>
              <p>Python</p>
            </li>
            <li>
              <BsCheck2Square className='service_list-icon'/>
              <p>C++ </p>
            </li>
            <li>
              <BsCheck2Square className='service_list-icon'/>
              <p>React JS </p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>Software Tools</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsCheck2Square className='service_list-icon'/>
              <p>Node JS </p>
            </li>
            <li>
              <BsCheck2Square className='service_list-icon'/>
              <p>Eclipse </p>
            </li>
            <li>
              <BsCheck2Square className='service_list-icon'/>
              <p>Android Studio</p>
            </li>
            <li>
              <BsCheck2Square className='service_list-icon'/>
              <p>VS Code </p>
            </li>
            <li>
              <BsCheck2Square className='service_list-icon'/>
              <p>NetBeans</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>Communication & Interpersonal</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsCheck2Square className='service_list-icon'/>
              <p>Adaptability</p>
            </li>
            <li>
              <BsCheck2Square className='service_list-icon'/>
              <p>Critical thinker</p>
            </li>
            <li>
              <BsCheck2Square className='service_list-icon'/>
              <p>Fast Learner</p>
            </li>
            <li>
              <BsCheck2Square className='service_list-icon'/>
              <p>Effective Communicator</p>
            </li>
            <li>
              <BsCheck2Square className='service_list-icon'/>
              <p>Leadership</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Service