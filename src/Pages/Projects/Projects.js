import React from 'react'
import DashBoard from '../../Components/Screens/DashBoard/DashBoard'
import Footer from '../../Components/Screens/Footer/Footer'
import Header from '../../Components/Screens/Header/Header'
import Mobapp from '../../Components/Screens/Mobapp/Mobapp'
import ProjectSpotlight from '../../Components/Screens/Project_spotlight/ProjectSpotlight'
import WebApps from '../../Components/Screens/WebApps/WebApps'
import Websites from '../../Components/Screens/Websites/Websites'

function Projects() {
  return (
    <div>
        <Header/>
        <ProjectSpotlight/>
        <WebApps/>
        <Mobapp/>
        <DashBoard/>
        <Websites/>
        <Footer/>
    </div>
  )
}

export default Projects