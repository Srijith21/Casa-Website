import React from 'react'
import './ServiceOffer.css'
import arrow from "../../../Assets/service-arrow.svg"
import view_all_service_seal from "../../../Assets/view-all-service-seal.svg"


function ServiceOffer() {
  return (
    <div className="ServiceOffer">
      <div className="container service">
        <div className="service-left">
            <h2 className="service-heading">Services | Offer</h2>
            <div className="text ServiceOffer">
                <span className='line'>__</span>
                <p className="landingtext ServiceOffer">we help ambitious business like your generate more profites by building awarness,driving web traffic,connecting with customers and growing overall sales</p>
                <img className='service-seal' src={view_all_service_seal} alt="" />
                <span className="keyword service">Service!</span>
          </div>
        </div>
        <div className="service-right">
            <div className="service-one">
                <span className="service-num">01/</span>
                <div className="servicehead">
                    <h3 className="service-main-head">Web UI/UX Design</h3>
                    <span className='explore'>Explore</span>
                </div>
                <span className="arrow-container"><img className='arrow-icon' src={arrow} alt="" /></span>
            </div>
            <div className="service-one">
                <span className="service-num">02/</span>
                <div className="servicehead">
                    <h3 className="service-main-head">Mob App UI/UX Design</h3>
                    <span className='explore'>Explore</span>
                    
                </div>
                <span className="arrow-container"><img className='arrow-icon' src={arrow} alt="" /></span>
            </div>
            <div className="service-one">
                <span className="service-num">03/</span>
                <div className="servicehead">
                    <h3 className="service-main-head">Dashboard & sass Design</h3>
                    <span className='explore'>Explore</span>
                    
                </div>
                <span className="arrow-container"><img className='arrow-icon' src={arrow} alt="" /></span>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default ServiceOffer