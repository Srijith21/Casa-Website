import React from 'react'
import './Experience.css'
import wireframe from '../../../Assets/wireframe.svg'



function Experience() {
  return (
    <div className='skills-experience'>
      <div className="container skills">
        <div className="skills-left">
          <h2 className='skills-head'>Skills & Experience</h2>
          <div className="text">
                <span className='line'>__</span>
                <p className="landingtext">we help ambitious business like your generate more profites by building awarness,driving web traffic,connecting with customers and growing overall sales</p>            
          </div>
          <div className="skills-smallhead"><h4>Skills</h4></div>
          <div className="skills-list">
          <ul className='skills-list-ul'>
            <li>
              <img src={wireframe} alt="" />
              <span>Visual Design</span>
            </li>
            <li>
              <img src={wireframe} alt="" />
              <span>Visual Design</span>
            </li>
            <li>
              <img src={wireframe} alt="" />
              <span>Visual Design</span>
            </li>
            <li>
              <img src={wireframe} alt="" />
              <span>Visual Design</span>
            </li>
          </ul>
        </div>
        </div>

        <div className="skills-right">
          <h1>dnvvbu</h1>
        </div>
      </div>
    </div>
  )
}

export default Experience