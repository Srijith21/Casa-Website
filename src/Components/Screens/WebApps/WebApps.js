import React from 'react'
import './WebApps.css'
import arrow from "../../../Assets/service-arrow.svg"
import loadingPage from "../../../Assets/Rectangle 7-1.jpg"
import view_all_service_seal from "../../../Assets/view-all-service-seal.svg"
import vps_hosting4 from "../../../Assets/vps 4.jpg"
import vps_hosting6 from "../../../Assets/vps 6.jpg"


function WebApps() {
  return (
    <div className='WebApps'>
      <div className="container WebApps">
        <ul className='projects-ul'>
          <li  className='project-li'>
            <h2 className='project-smallHead'>Web <span>Apps</span></h2>
            <img className='service-seal project' src={view_all_service_seal} alt="" />
          </li>
          <li className='project-li middle'>
            <div className="li-part">
              <div className="topSec">
                <div className="topSec-left">
                  <h3>VPS Hosting Web Design</h3>
                  <p>web/loading page</p>
                </div>
                <div className="topSec-right">
                <span className="arrow-container"><img className='arrow-icon' src={arrow} alt="" /></span>
                </div>
              </div>
              <div className="bottomSec">
                <div className="imagebox">
                  <img className='project-img' src={vps_hosting6} alt="" />
                </div>
              </div>
            </div>
            <div className="li-part">
              <div className="topSec">
                <div className="topSec-left">
                  <h3>VPS Hosting Web Design</h3>
                  <p>web/loading page</p>
                </div>
                <div className="topSec-right">
                <span className="arrow-container"><img className='arrow-icon' src={arrow} alt="" /></span>
                </div>
              </div>
              <div className="bottomSec">
                <div className="imagebox">
                  <img className='project-img' src={loadingPage} alt="" />
                </div>
              </div>
            </div>
          </li>
          <li className='project-li'>
            <div className="li-part">
              <div className="topSec">
                <div className="topSec-left">
                  <h3>VPS Hosting Web Design</h3>
                  <p>web/loading page</p>
                </div>
                <div className="topSec-right">
                <span className="arrow-container"><img className='arrow-icon' src={arrow} alt="" /></span>
                </div>
              </div>
              <div className="bottomSec">
                <div className="imagebox">
                  <img className='project-img' src={vps_hosting4} alt="" />
                </div>
              </div>
            </div>
            <div className="li-part">
              <div className="topSec">
                <div className="topSec-left">
                  <h3>VPS Hosting Web Design</h3>
                  <p>web/loading page</p>
                </div>
                <div className="topSec-right">
                <span className="arrow-container"><img className='arrow-icon' src={arrow} alt="" /></span>
                </div>
              </div>
              <div className="bottomSec">
                <div className="imagebox">
                  <img className='project-img' src={loadingPage} alt="" />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default WebApps

