import React from 'react'
import './Enquiry_spotlight.css'
import Seal from '../../../Assets/view-all-service-seal.svg'

function Enquiry_spotlight() {
  return (
    <div className='Enquiry_spotlight'>
        <div className="container Enquiry_spotlight">
            <div className="left-spotlight">
                <h2 className='left-spotlight-head'>Touch With Us</h2>
                <div className="text">
                  <span className='line'>__</span>
                  <p className="landingtext">Hi! iam ui/ux designer--- creating bold and brave interface design for companies all a cross world</p>
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

export default Enquiry_spotlight
