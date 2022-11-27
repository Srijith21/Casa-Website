import React from 'react'
import './Footer.css'

import logo from '../../../Assets/casa-logo.svg'
import callIcon from '../../../Assets/Call-icon.svg'
import facebook from '../../../Assets/website2=FACEBOOK.svg'
import linkedin from '../../../Assets/Linked-in.svg'
import youtube from '../../../Assets/youtbe.svg'
import twitter from '../../../Assets/website2=twitter.svg'

function Footer() {
  return (
    <div className='footer'>
        <div className="container footer">
          <sec className="footer-top">
            <div className="footer-top-left">
				<img className='footer-logo' src={logo} alt="" />
				<p>We help ambitious business like your generate more profits by building awarness,driving web traffic,connecting with customers and growing overall sales</p>
            </div>
            <div className="footer-top-right">
				<ul className='footer-top-right-ul'>
					<li className='footer-top-right-ul-li'>
						<h5 className='li-item-head'>Our Service</h5>
						<p className='items'><a href="#">Help Center</a></p>
						<p className='items'><a href="#">Faq </a></p>
						<p className='items'><a href="#">Investation</a></p>
						<p className='items'><a href="#">Blog</a></p>
					</li>
					<li>
						<h5 className='li-item-head'>Company</h5>
						<p className='items'><a href="#">About Us</a></p>
						<p className='items'><a href="#">Carrier </a></p>
						<p className='items'><a href="#">Managment</a></p>
						<p className='items'><a href="#">Blog</a></p>
					</li>
					<li>
						<h5 className='li-item-head'>Contact info</h5>
						<p className='items'><a href="#">getinfocasa7@gmail.com</a></p>
						<div className="phonenumber">
							<img className="CallIcon" src={callIcon} alt="" />
							<span>( +880 0000 445 760 )</span>
						</div>
						<ul className='footer-social-ul'>
							<li>
								<a href="">
									<img className='social-img' src={facebook} alt="" />
								</a>
							</li>
							<li>
								<a href="">
									<img className='social-img' src={linkedin} alt="" />
								</a>
							</li>
							<li>
								<a href="">
									<img className='social-img' src={twitter} alt="" />
								</a>
							</li>
							<li>
								<a href="">
									<img className='social-img' src={youtube} alt="" />
								</a>
							</li>
						</ul>
					</li>
				</ul>
            </div>
          </sec>
          <sec className="footer-bottom">
			<div className="footer-bottom-left">
				<p>Copyright @2021 Casa inc.</p>
			</div>
			<div className="footer-bottom-right">
				<ul className='footer-bottom-ul'>
					<li><a href="">Privacy</a></li>
					<li><a href="">Security</a></li>
					<li><a href="">Terms</a></li>
				</ul>
			</div>
		  </sec>
        </div>
    </div>
  )
}

export default Footer