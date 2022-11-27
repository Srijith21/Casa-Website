import React from 'react'
import './Contact.css'
import meassage_img from '../../../Assets/message box-with -bg.svg'
import location_img from '../../../Assets/location-with -bg.svg'
import handwave from '../../../Assets/Hand-color.svg'
import arrow from "../../../Assets/service-arrow.svg"
function Contact() {
  return (
    <div className='Contact'>
      <div className="container contact">
      <div className="contact-left">
        <div className="contact-head">
          <h2>Let's Discuss your Project</h2>
        </div>
        <div className="contact-email">
          <div className="img-box">
            <img className="contact-img" src={meassage_img} alt="" />
          </div>
          <div className="email-description">
            <span className="contact-subhead">Email</span>
            <p className="contact-label">Client.tnim@gmail.com</p>
          </div>
        </div>
        <div className="contact-location">
          <div className="img-box">
            <img className="contact-img" src={location_img} alt="" />
          </div>
          <div className="location-description">
            <span className="contact-subhead">Location</span>
            <p className="contact-label">Washingtottn Ave.Manchester,Kentucky 39495</p>
          </div>
        </div>
      </div>
      <div className="contact-right">
        <div className="contact-interaction">
          <div className="contentbox">
            <div className="contact-interaction-left">
                <img className="handwave-img" src={handwave} alt="" />
                <span>say Hi!</span>
            </div>
            <div className="contact-interaction-right">
                <img src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
      </div>
      <hr />
    </div>
  )
}

export default Contact