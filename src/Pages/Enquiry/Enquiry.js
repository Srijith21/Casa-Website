import React from 'react'
import Contact from '../../Components/Screens/Contact/Contact'
import EnquiryForm from '../../Components/Screens/Enquiry Form/Enquiry_Form'
import EnquirySpotlight from '../../Components/Screens/Enquiry_spotlight/Enquiry_spotlight'
import Footer from '../../Components/Screens/Footer/Footer'
import Header from '../../Components/Screens/Header/Header'

function Enquiry() {
  return (
    <div>
        <Header/>
        <EnquirySpotlight/>
        <EnquiryForm/>
        <Contact/>
        <Footer/>
        
    </div>
  )
}

export default Enquiry