import React from 'react'
import Seal from '../../../Assets/view-all-service-seal.svg'
import './Experience_spotlight.css'

function ExperienceSpotlight() {
  return (
    <div className='Experience_spotlight'>
        <div className="container Experience_spotlight">
            <div className="left-spotlight">
                <h2 className='left-spotlight-head'>Skills and Experience</h2>
                <div className="text">
                  <span className='line'>__</span>
                  <p className="landingtext">we help ambitious business like your generate more profites by building awarness,driving web traffic,connecting with customers and growing overall sales</p>
              	</div>
				  <span className="keyword Hello">Hello!</span>
            </div>
            <div className="right-spotlight">
                <img src={Seal} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ExperienceSpotlight
