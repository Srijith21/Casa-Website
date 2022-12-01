import React from 'react'
import './Enquiry_Form.css'
import indianFlag from '../../../Assets/flag.svg'
function EnquiryForm() {
  return (
    <div className='EnquiryForm'>
       <div className="container EnquiryForm">
            <div className="enquiry-head-sec">
                <h4 className='enquiryHead'>Enquiry Form</h4>
            </div>
            <form>
                <div className="enquiry-inputs">
                <div className="inputBoxes">
                    <label>First Name*</label>
                    <div className="inputcontainer">
                        <input type="email" placeholder='Enter your First Name' name='firstname' id='firstname' />
                    </div>
                </div>
                <div className="inputBoxes">
                    <label>Last Name*</label>
                    <div className="inputcontainer">
                        <input type="text" placeholder='Enter your Last Name' name='lastname' id='lastname' />
                    </div>
                </div>
                <div className="inputBoxes">
                    <label>Phone Number*</label>
                    <div className="inputcontainer">
                        <img className='flag' src={indianFlag} alt="" />
                        <img src="" alt="" />
                        <span>+91</span>
                        <input className='input phone' type="text" placeholder='Enter your phone number' name='phone' id='phone' />
                    </div>
                </div>
                <div className="inputBoxes">
                    <label>Email Address*</label>
                    <div className="inputcontainer">
                        <input type="email" placeholder='Enter your Email Address' name='lastname' id='lastname' />
                    </div>
                </div>
                </div>
                {/* ............ */}

                <div className="project-selectors">
                    <div className="SelectContainer">
                        <label htmlFor="">Product categories</label>
                        <select title='categories' className="selectbox">
                            <option disabled value="">Select your Categories</option>
                            <option  value="">Mobile Application</option>
                            <option  value="">Web App</option>
                            <option  value="">Website</option>
                        </select>
                    </div>
                    <div className="SelectContainer">
                        <label htmlFor="">Product Categories</label>
                        <select title='categories' className="selectbox">
                            <option disabled value="">Select your Categories</option>
                            <option  value="">Mobile Application</option>
                            <option  value="">Web App</option>
                            <option  value="">Website</option>
                        </select>
                    </div>
                    <div className="inputBoxes textbox">
                    <label>First Name*</label>
                        <textarea className='selectbox' maxLength={100} id="textarea" placeholder='type here' name="textarea" rows="4" cols="50"></textarea>
                </div>
                </div>
            </form>
            <div className="submit-button">
                <button className='formbutton'>Next</button>
            </div>
       </div>
    </div>
  )
}

export default EnquiryForm
