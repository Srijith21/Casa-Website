import React from 'react'
import './Websites.css'
import arrow from "../../../Assets/service-arrow.svg"
import loadingPage from "../../../Assets/Rectangle 7-1.jpg"
import vps3 from "../../../Assets/vps 3.jpg"
import Rectangle11 from "../../../Assets/Rectangle11.jpg"

function Websites() {
  return (
    <div className='Mobapp'>
      <div className="container Mobapp">
        <ul className='projects-ul'>
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
                  <img className='project-img' src={vps3} alt="" />
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
                  <img className='project-img' src={Rectangle11} alt="" />
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
          <li  className='project-li'>
            <h2 className='project-smallHead'>Websites</h2>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Websites
