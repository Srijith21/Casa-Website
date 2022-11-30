import React from 'react'
import './DashBoard.css'
import arrow from "../../../Assets/service-arrow.svg"
import vps_hosting1 from "../../../Assets/vps 1.jpg"
import vps_hosting2 from "../../../Assets/vps 2.jpg"
import Rectangle11 from "../../../Assets/Rectangle11.jpg"
import Rectangle12 from "../../../Assets/Rectangle12.jpg"


function DashBoard() {
  return (
    <div className='Dashboard'>
      <div className="container Dashboard">
        <ul className='projects-ul'>
          <li  className='project-li'>
            <h2 className='project-smallHead Dashboard'>Dashboard</h2>
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
                  <img className='project-img' src={vps_hosting2} alt="" />
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
                  <img className='project-img' src={Rectangle12} alt="" />
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
                  <img className='project-img' src={vps_hosting1} alt="" />
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
                  <img className='project-img' src={Rectangle11} alt="" />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DashBoard
