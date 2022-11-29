import React from 'react'
import Experience from '../../Components/Screens/ExperienceHome/Experience'
import Footer from '../../Components/Screens/Footer/Footer'
import Header from '../../Components/Screens/Header/Header'
import KindWords from '../../Components/Screens/KindWords/KindWords'
import LatestProjects from '../../Components/Screens/LatestProjects/LatestProjects'
import Contact from '../../Components/Screens/Contact/Contact'
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
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home