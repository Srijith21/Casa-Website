import React from 'react'
import ExperienceSpotlight from '../../Components/Screens/Experience_spotlight/Experience_spotlight'
import Footer from '../../Components/Screens/Footer/Footer'
import Header from '../../Components/Screens/Header/Header'
import SkillsSection from '../../Components/Screens/skills-section-page/SkillsSection'

function ExperiencePage() {
  return (
    <div>
      <Header/>
      <ExperienceSpotlight/>
      <SkillsSection/>
      <Footer/>
    </div>
  )
}

export default ExperiencePage
