import React from 'react'
import Experience from '../../Components/Screens/Experience/Experience'
import Footer from '../../Components/Screens/Footer/Footer'
import Header from '../../Components/Screens/Header/Header'
import KindWords from '../../Components/Screens/KindWords/KindWords'
import LatestProjects from '../../Components/Screens/LatestProjects/LatestProjects'
import ProjectDiscuss from '../../Components/Screens/ProjectDiscuss/ProjectDiscuss'
import ServiceOffer from '../../Components/Screens/ServiceOffer/ServiceOffer'
import SpotLight from '../../Components/Screens/SpotLight/SpotLight'

function Home() {
  return (
    <div>
        <Header/>
        <SpotLight/>
        <ServiceOffer/>
        <Experience/>
        <LatestProjects/>
        <KindWords/>
        <ProjectDiscuss/>
        <Footer/>
    </div>
  )
}

export default Home