import React from 'react'
import './SkillsSection.css'
import wireframe from '../../../Assets/wire-frame.svg'
import visualIcon from '../../../Assets/visual-icon.svg'
import uxIcon from '../../../Assets/ux-icon.svg'
import prototype from '../../../Assets/prototype.svg'
import artDirection from '../../../Assets/art-direction.svg'
import userResearch from '../../../Assets/user-research.svg'

function SkillsSection() {
  return (
    <div className='SkillsSection'>
      <div className="container SkillsSection">
      <div className="skills SkillsSection">
          <div className="skills-smallhead"><h4>Skills</h4></div>
          <div className="skills-list">
          <ul className='skills-list-ul SkillsSection'>
            <li className="skill-items">
              <img src={visualIcon} alt="" />
              <span>Visual Design</span>
            </li>
            <li className="skill-items">
              <img src={wireframe} alt="" />
              <span>Wire Frame</span>
            </li>
            <li className="skill-items">
              <img src={uxIcon} alt="" />
              <span>User Experience Design</span>
            </li>
            <li className="skill-items">
              <img src={prototype} alt="" />
              <span>Prototype </span>
            </li>
            <li className="skill-items">
              <img src={artDirection} alt="" />
              <span>Art Direction</span>
            </li>
            <li className="skill-items">
              <img src={userResearch} alt="" />
              <span>User Research</span>
            </li>
          </ul>
        </div>
        </div>

        <div className="experience SkillsSection">
          <div className="skills-smallhead"><h4>Experience</h4></div>
          <div className="experience-tab">
            <div className="time-period">2019-present</div>
            <div className="exp-head">
                <h6>Product Designer</h6>
                <p>Amazon Inc</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illum quos earum sint reiciendis! Nam soluta incidunt vel alias facere cumque earum, corrupti modi aliquid aspernatur ab odit error rerum excepturi illum unde tenetur animi, explicabo laborum! Eveniet nisi at voluptatem, ducimus, repellat, totam nobis porro earum deserunt incidunt distinctio?</p>
            </div>
          </div>
          <div className="experience-tab">
            <div className="time-period">2014-2006</div>
            <div className="exp-head">
                <h6>UI/UX Designer</h6>
                <p>Microsoft</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illum quos earum sint reiciendis! Nam soluta incidunt vel alias facere cumque earum, corrupti modi aliquid aspernatur ab odit error rerum excepturi illum unde tenetur animi, explicabo laborum! Eveniet nisi at voluptatem, ducimus, repellat, totam nobis porro earum deserunt incidunt distinctio?</p>
            </div>
          </div>
          <div className="experience-tab">
            <div className="time-period">2014-2006</div>
            <div className="exp-head">
                <h6>Web UI/UX Designer </h6>
                <p>Google</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illum quos earum sint reiciendis! Nam soluta incidunt vel alias facere cumque earum, corrupti modi aliquid aspernatur ab odit error rerum excepturi illum unde tenetur animi, explicabo laborum! Eveniet nisi at voluptatem, ducimus, repellat, totam nobis porro earum deserunt incidunt distinctio?</p>
            </div>
          </div>
          <div className="experience-tab">
            <div className="time-period">2016-2014</div>
            <div className="exp-head">
                <h6>3D Designer</h6>
                <p>Microsoft</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illum quos earum sint reiciendis! Nam soluta incidunt vel alias facere cumque earum, corrupti modi aliquid aspernatur ab odit error rerum excepturi illum unde tenetur animi, explicabo laborum! Eveniet nisi at voluptatem, ducimus, repellat, totam nobis porro earum deserunt incidunt distinctio?</p>
            </div>
          </div>
          <div className="experience-tab">
            <div className="time-period">2014-2010</div>
            <div className="exp-head">
                <h6>Web UI/UX Designer </h6>
                <p>Google</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illum quos earum sint reiciendis! Nam soluta incidunt vel alias facere cumque earum, corrupti modi aliquid aspernatur ab odit error rerum excepturi illum unde tenetur animi, explicabo laborum! Eveniet nisi at voluptatem, ducimus, repellat, totam nobis porro earum deserunt incidunt distinctio?</p>
            </div>
          </div>
          <div className="experience-tab">
            <div className="time-period">2010-2008</div>
            <div className="exp-head">
                <h6>Motion Designer</h6>
                <p>Facebook</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illum quos earum sint reiciendis! Nam soluta incidunt vel alias facere cumque earum, corrupti modi aliquid aspernatur ab odit error rerum excepturi illum unde tenetur animi, explicabo laborum! Eveniet nisi at voluptatem, ducimus, repellat, totam nobis porro earum deserunt incidunt distinctio?</p>
            </div>
          </div>
          <div className="experience-tab">
            <div className="time-period">2008-2006</div>
            <div className="exp-head">
                <h6>UI Designer</h6>
                <p>Facebook</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illum quos earum sint reiciendis! Nam soluta incidunt vel alias facere cumque earum, corrupti modi aliquid aspernatur ab odit error rerum excepturi illum unde tenetur animi, explicabo laborum! Eveniet nisi at voluptatem, ducimus, repellat, totam nobis porro earum deserunt incidunt distinctio?</p>
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default SkillsSection
