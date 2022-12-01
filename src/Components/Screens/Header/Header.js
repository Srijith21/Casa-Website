import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../Assets/casa-logo.svg'
import './Header.css'
function Header() {
  return (
    <div className="header-bar">
        {/* <div className="container"> */}
            <div className="logo">
                <img className='header-logo' src={logo} alt="" />
            </div>
            <div className="navbar">
                <ul>
                    <li>
                        <Link style={{ textDecoration: 'none' }} to="/">Home</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none' }}>Service Offer</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none' }} to='/experience'>Experience</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none' }} to='/projects'>Projects</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none'}} to='/enquiry'>Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="signing">
                <div className="sign-in">
                    <Link style={{ textDecoration: 'none'}}>Sign In</Link>
                </div>
                <div className="sign-up">
                    <Link style={{ textDecoration: 'none'}}>Sign Up</Link>
                </div>
            </div>
        {/* </div> */}
    </div>
  )
}

export default Header