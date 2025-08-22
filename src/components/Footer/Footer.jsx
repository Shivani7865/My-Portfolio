import React from 'react'
import './Footer.css'
import logo from '/src/assets/logo.jpg'
import user_icon from '/src/assets/user_icon.svg'
import { ToastContainer,toast } from 'react-toastify'
const Footer = () => {
    const notify=()=>toast("subscribed")
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt="" />
                <p>I am Shivani , software enginner expertise in java, python and interested to contribute skills in software development</p>
            </div>
            <div className="footer-top-right">
               <div className="footer-email-right">
                <img src={user_icon} alt="" />
                <input type="email" placeholder="Enter your email"></input>
               </div>
               <div className='footer-subscribe' onClick={notify}>Subscribe</div>
               <ToastContainer position="top-right"/>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left">
            Copyright © 2025 Shivani. All rights reserved. 


            </p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with Me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer