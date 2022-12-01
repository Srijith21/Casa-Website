import React from 'react'
import './Mobapp.css'
import arrow from "../../../Assets/service-arrow.svg"
import loadingPage from "../../../Assets/Rectangle 7-1.jpg"
import MobApp from "../../../Assets/MobApp.jpg"
import Rectangle12 from "../../../Assets/Rectangle12.jpg"
function Mobapp() {
  return (
    <div className='Mobapp'>
      <div className="container Mobapp">
        <ul className='projects-ul'>
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
                  <img className='project-img' src={Rectangle12} alt="" />
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
                  <img className='project-img' src={MobApp} alt="" />
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
            <h2 className='project-smallHead'><span>Mobile </span>Apps </h2>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Mobapp
