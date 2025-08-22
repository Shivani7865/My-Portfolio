import React from 'react'
import './Projects.css'
import fraud from '/src/assets/fraud.jpg'
import image from '/src/assets/image.jpg'
const Projects = () => {
  return (
    <div id='projects'className='projects'>
      
      <div className='projects-title'><p>Browse my</p>
      <h1>Projects</h1>
      
      </div>
     
<div className='projects-container'>
  <div className='projects-section'>
  <section>
 <span> <h1>Static Website</h1></span>
  <img src={image} alt="" />
  <br/>
<span><a href="https://github.com/Shivani7865/Static-Website-Frontend" target="_blank">Github</a></span>

<span><a href="https://github.com/Shivani7865/Static-Website-Frontend" target="_blank">Live Demo</a></span>


</section>


</div>
<hr />
<div className='projects-section'>
<section>
 <span> <h1>Online Recruitment Fraud Detection</h1></span>
  <img src={fraud} alt="" />
  <br/>
<span><a href="https://github.com/Shivani7865/Online-Fraud-Detection-System--A-Deep-Learning-MLP-model" target="_blank">Github</a></span>




</section>

</div>
<hr/>
<div className='projects-section'>
<section>
 <span><h1>My Portfolio</h1></span> 
  <img src="https://marketplace.canva.com/EAFwckKNjDE/2/0/1600w/canva-black-white-grayscale-portfolio-presentation-vzScEqAI__M.jpg" alt="" />
  <br/>
<span><a href="https://github.com/Shivani7865/Java-Full-Stack-Application--Airline-Reservation-System" target="_blank">Github</a></span>

<span><a href="https://github.com/Shivani7865/Java-Full-Stack-Application--Airline-Reservation-System" target="_blank">Live Demo</a></span>


</section>

</div>
</div>



    </div>
  )
}

export default Projects