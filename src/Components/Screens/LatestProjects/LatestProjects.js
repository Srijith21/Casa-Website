import React from 'react'
import './LatestProjects.css'
import arrow from "../../../Assets/service-arrow.svg"
import plantShop from "../../../Assets/plantshop-landiing-page.jpg"
import rectangle_7 from "../../../Assets/Rectangle 7.jpg"
import rectangle_7_1 from "../../../Assets/Rectangle 7-1.jpg"
import view_all_service_seal from "../../../Assets/view-all-service-seal.svg"


function LatestProjects() {
  return (
    <div className="latest-projects">
      <div className="container projects">
        <div className="project-bar one">
          <h2>Latest Projects</h2>
          <div className="project-details">
            <div className="details-top">
              <div className="details-top-content">
                <h5>Plantshop Landing Page Design</h5>
                <p>web/loading page</p>
              </div>
              <img className="arrow-icon project"  src={arrow} alt="" />
            </div>
            <div className="details-bottom">
              <img className="project-detail-img" src={plantShop} alt="" />
            </div>
          </div>
        </div>

        <div className="project-bar two">
          <div className="project-details">
            <div className="details-top">
              <div className="details-top-content">
                <h5>VPS Hosting web Design</h5>
                <p>web/loading page</p>
              </div>
              <img className="arrow-icon project"   src={arrow} alt="" />
            </div>
            <div className="details-bottom">
              <img className="project-detail-img" src={rectangle_7} alt="" />
            </div>
          </div>
        </div>

        <div className="project-bar three">
          <div className="project-details">
            <div className="details-top">
              <div className="details-top-content">
                <h5>Book Landing Page Design</h5>
                <p>web/loading page</p>
              </div>
              <img className="arrow-icon project"  src={arrow} alt="" />
            </div>
            <div className="details-bottom">
              <img className="project-detail-img" src={rectangle_7_1} alt="" />
            </div>
          </div>
        </div>
        <img className="project-seal" src={view_all_service_seal} alt="" />
      </div>
    </div>
  )
}

export default LatestProjects