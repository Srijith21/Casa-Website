import React from 'react'
import './Experience.css'
import wireframe from '../../../Assets/wire-frame.svg'
import visualIcon from '../../../Assets/visual-icon.svg'
import uxIcon from '../../../Assets/ux-icon.svg'
import prototype from '../../../Assets/prototype.svg'
import artDirection from '../../../Assets/art-direction.svg'
import userResearch from '../../../Assets/user-research.svg'



function Experience() {
  return (
    <div className='skills-experience'>
      <div className="container skills">
        <div className="skills-left">
          <h2 className='skills-head'>Skills & Experience</h2>
          <span className="keyword experience">Experience</span>
          <div className="text experience">
                <span className='line'>__</span>
                <p className="landingtext experience">we help ambitious business like your generate more profites by building awarness,driving web traffic,connecting with customers and growing overall sales</p>            
          </div>
          <div className="skills-smallhead"><h4>Skills</h4></div>
          <div className="skills-list">
          <ul className='skills-list-ul'>
            <li className="skill-items">
              <img src={visualIcon} alt="" />
              <span>Visual Design</span>
            </li>
            <li className="skill-items">
              <img src={wireframe} alt="" />
              <span>Wire Frame</span>
            </li>
            <li className="skill-items">
              <img src={uxIcon} alt="" />
              <span>User Experience Design</span>
            </li>
            <li className="skill-items">
              <img src={prototype} alt="" />
              <span>Prototype </span>
            </li>
            <li className="skill-items">
              <img src={artDirection} alt="" />
              <span>Art Direction</span>
            </li>
            <li className="skill-items">
              <img src={userResearch} alt="" />
              <span>User Research</span>
            </li>
           
          </ul>
        </div>
        </div>

        <div className="skills-right">
          <div className="skills-smallhead"><h4>Experience</h4></div>
          <div className="experience-tab">
            <div className="time-period">2019-present</div>
            <div className="exp-head">
                <h6>Product Designer</h6>
                <p>Amazon Inc</p>
            </div>
          </div>
          <div className="experience-tab">
            <div className="time-period">2014-2006</div>
            <div className="exp-head">
                <h6>UI/UX Designer</h6>
                <p>Microsoft</p>
            </div>
          </div>
          <div className="experience-tab">
            <div className="time-period">2014-2006</div>
            <div className="exp-head">
                <h6>Web UI/UX Designer </h6>
                <p>Google</p>
            </div>
          </div>
          <div className="experience-tab">
            <div className="time-period">2014-2006</div>
            <div className="exp-head">
                <h6>UI Designer</h6>
                <p>Facebook</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience