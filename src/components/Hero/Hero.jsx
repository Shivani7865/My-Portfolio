import React from 'react'
import './Hero.css'
import profile_img from '/src/assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home'className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Shivani Dhotre, Software Engineer</span></h1>
        <p>Computer Science postgraduate with expertise in Java, Python, React.js, and deep learning, seeking a software engineer and eager to contribute to a dynamic team. </p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume"><a href="https://drive.google.com/file/d/13uVmrTivHhGtCmzK1Xg-auLlMGR3J_OD/view?usp=sharing" target="_blank">My Resume</a></div>
        </div>
    </div>
  )
}

export default Hero