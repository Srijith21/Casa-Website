import React from 'react'
import './Footer.css'

import logo from '../../../Assets/casa-logo.svg'
import callIcon from '../../../Assets/Call-icon.svg'
import facebook from '../../../Assets/website2=FACEBOOK.svg'
import linkedin from '../../../Assets/Linked-in.svg'
import youtube from '../../../Assets/youtbe.svg'
import twitter from '../../../Assets/website2=twitter.svg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
        <div className="container footer">
          <div className="footer-top">
            <div className="footer-top-left">
				<img className='footer-logo' src={logo} alt="" />
				<p>We help ambitious business like your generate more profits by building awarness,driving web traffic,connecting with customers and growing overall sales</p>
            </div>
            <div className="footer-top-right">
				<ul className='footer-top-right-ul'>
					<li className='footer-top-right-ul-li'>
						<h5 className='li-item-head'>Our Service</h5>
						<p className='items'>
							<Link to=''>Help Center</Link>
						</p>
						<p className='items'>
							<Link to=''>Faq</Link>
						</p>
						<p className='items'>
							<Link to=''>Investation</Link>
						</p>
						<p className='items'>
							<Link to=''>Blog</Link>
						</p>
					</li>
					<li>
						<h5 className='li-item-head'>Company</h5>
						<p className='items'>
							<Link to=''>About Us</Link>
						</p>
						<p className='items'>
							<Link to=''>Carrier</Link>
						</p>
						<p className='items'>
							<Link to=''>Managment</Link>
						</p>
						<p className='items'>
							<Link to=''>Blog</Link>
						</p>
					</li>
					<li>
						<h5 className='li-item-head'>Contact info</h5>
						<p className='items'>
						<Link to=''>getinfocasa7@gmail.com</Link>
						</p>
						<div className="phonenumber">
							<img className="CallIcon" src={callIcon} alt="" />
						<Link to=''><span className='number'>( +880 0000 445 760 )</span></Link>

							
						</div>
						<ul className='footer-social-ul'>
							<li><Link to = ''><img className='social-img' src={facebook} alt="" /></Link></li>
							
							<li><Link to = ''><img className='social-img' src={linkedin} alt="" /></Link></li>
							
							<li><Link to = ''><img className='social-img' src={twitter} alt="" /></Link></li>
							
							<li><Link to = ''><img className='social-img' src={youtube} alt="" /></Link></li>
						</ul>
					</li>
				</ul>
            </div>
          </div>
          <div className="footer-bottom">
			<div className="footer-bottom-left">
				<p>Copyright @2021 Casa inc.</p>
			</div>
			<div className="footer-bottom-right">
				<ul className='footer-bottom-ul'>
					<li><Link to = ''>Privacy</Link></li>
					<li><Link to = ''>Security</Link></li>
					<li><Link to = ''>Terms</Link></li>
					
				</ul>
			</div>
		  </div>
        </div>
    </div>
  )
}

export default Footer