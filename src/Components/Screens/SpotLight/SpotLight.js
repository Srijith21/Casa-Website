import React from 'react'
import '../SpotLight/SpotLight.css'
import arrow from '../../../Assets/Arrow.svg'
import Telegram_fill from '../../../Assets/Telegram-fill.svg'
import InstagramIcon from '../../../Assets/insta-icon.svg'
import DribbleIcon from '../../../Assets/dribble-icon.svg'
import BehanceIcon from '../../../Assets/behance-icon.svg'
import landing_page_vector from '../../../Assets/landing-page-vector.png'
import play_img from '../../../Assets/play-icon.svg'

function SpotLight() {
  return (
    <div className='spotlight'>
      <div className="container spotlight">
        <div className="spotlight-left">
          <span className="keyword">Hello!</span>
          <h2 className="Landinghead">We Have Design Experience</h2>
          <div className="text">
            <span className='line'>__</span>
            <p className="landingtext">Hi! iam ui/ux designer--- creating bold and brave interface design for companies all a cross world</p>
          </div>
                      <div className="spotlight-buttons">
                        <span className="talk-button">
                          lets Talk 
                          <img className="smallicons" src={Telegram_fill} alt="" />
                        </span>
                        <span className="portfolio-button">
                        Portfolio
                        <img className="smallicons" src={arrow} alt="" />
                        </span>
                      </div> 
            <div className="socialmedia">
                <span className="socialmedia-icons">
                  Check out my  
                    <img className="socialicons" src={InstagramIcon} alt="" />
                    <img className="socialicons"src={DribbleIcon} alt="" />
                    <img className="socialicons" src={BehanceIcon} alt="" />
                </span>
            </div>
      </div>
        <div className="spotlight-right">
          <img className="landingVector" src={landing_page_vector} alt="" />
          <img className="play-img" src={play_img} alt="" />
          <h2 className='smallquote'>" People ignore design that ignores people "</h2>
        </div>
      </div>
    </div>
  )
}

export default SpotLight