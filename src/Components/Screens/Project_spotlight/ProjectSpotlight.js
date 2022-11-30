import React from 'react'
import './ProjectSpotlight.css'
import Seal from '../../../Assets/view-all-service-seal.svg'


function ProjectSpotlight() {
  return (
    <div className='Project_spotlight'>
        <div className="container Project_spotlight">
            <div className="left-spotlight">
                <h2 className='left-spotlight-head'>Latest | Projects</h2>
                <div className="text Project_spotlight">
                  <span className='line'>__</span>
                  <p className="landingtext Project_spotlight">we help ambitious business like your generate more profites by building awarness,driving web traffic,connecting with customers and growing overall sales</p>
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

export default ProjectSpotlight
