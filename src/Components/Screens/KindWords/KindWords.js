import React from 'react'
import './KindWords.css'
import downarrow from '../../../Assets/down-arrow.svg'
import arrow from '../../../Assets/Arrow.svg'
import clientImage1 from '../../../Assets/client-person1.png'
import clientImage2 from '../../../Assets/client-person2.png'




function KindWords() {
  return (
    <div className="testimonials">
      <div className="container">
        <div className="testimonials-top">
          <div className="testimonials-top-left">
		  <span className="keyword testimonials">Testimonial</span>
            <h3>client's kind word</h3>
          </div>
          <div className="testimonials-top-middle">
            <div className="text">
                  <span className='line'>__</span>
                  <p className="landingtext kindword">we help ambitious business like your generate more profites by building awarness,driving web traffic,connecting with customers and growing overall sales</p>            
            </div>
          </div>
          <div className="testimonials-top-right">
            <img className="downarrow" src={downarrow} alt="" />
            <div className="arrow-box">
                <img className='BlackArrow' src={arrow} alt="" />
				<p>|</p>
                <span>20+</span>
            </div>
          </div>
        </div>
        <div className="testimonials-bottom">
            <div className="testimonials-bottom-clientImg">
              <img className="clientImg" src={clientImage2} alt="" />
            </div>
			<div className="testimonials-bottom-clientDescription">
				<p><span>"I've Been Working</span> with casey Exclusively Since 2014 profits by building awarness ,driving web traffic,connecting with customers and growing overall . we help ambitiousA <span> Professional Design </span> business profits by building awarness, driving web traffic,connecting with customers and help ambit As The <span>Visual Desing"</span> </p>
				<h5>Mustafa Rahman</h5>
				<h6>- CEO Toogle</h6>
			</div>
			<div className="testimonials-bottom-clientImg">
              <img className="clientImg"  src={clientImage1} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default KindWords