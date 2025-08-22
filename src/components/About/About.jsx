import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '/src/assets/profile_img.jpg'
import tick from '/src/assets/tick.gif'

const About = () => {
  return (
    <div id='about'className='about'>
        <div className='about-title'>
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className='about-sections'>
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
             <div className="about-right">
                <div className="about-para">
                    <p>Computer Science postgraduate with expertise in Java, Python, React.js, and deep learning, seeking a Full-Stack Developer or Machine
                   Learning Engineer position.</p>
                  <p>
                        Skilled in DSA problem-solving, building secure and scalable applications, committed to continuous learning in
                        modern web technologies and cloud platforms, and eager to contribute to a dynamic team.</p>
                </div>
                </div>
                </div>
                
                <div id='about-skills' className='about-skills'>
                    <div className='Web-Development'>
                        <h1>Explore My Experiences</h1>
               <div className="experience__container">
                <div className="experience__category">
              <h3>Web Development</h3>
             <div className="experience__content">
            <article>
              <img src={tick} alt=" "/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article>
            <img src={tick} alt=" "/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article>
            <img src={tick} alt=" "/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article>
            <img src={tick} alt=" "/>
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article>
            <img src={tick} alt=" "/>
              <div>
                <h4>ReactJs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article>
            <img src={tick} alt=" "/>
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

       <div className="experience__category">
          <h3>Programming Languages</h3>
          <div className="experience__content">
            <article>
            <img src={tick} alt=" "/>
              <div>
                <h4>Java</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article>
            <img src={tick} alt=" "/>
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article>
            <img src={tick} alt=" "/>
              <div>
                <h4>SQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article>
            <img src={tick} alt=" "/>
              <div>
                <h4>Data Structures and Algorithms</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>
            <article>
            <img src={tick} alt=" "/>
              <div>
                <h4>OOPS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>


        <div className="experience__category">
          <h3>CS Fundamentals</h3>
          <div className="experience__content">
            <article>
            <img src={tick} alt=" "/>
              <div>
                <h4>DBMS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article>
            <img src={tick} alt=" "/>
              <div>
                <h4>Agile, Scrum</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article>
            <img src={tick} alt=" "/>
              <div>
                <h4>SDLC</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article>
            <img src={tick} alt=" "/>
              <div>
                <h4>Cloud</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article>
            <img src={tick} alt=" "/>
              <div>
                <h4>Machine Learning,Deep Learning</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article>
            <img src={tick} alt=" "/>
              <div>
                <h4>Linux, Unix</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__category">
          <h3>Frameworks & Tools</h3>
          <div className="experience__content">
            <article>
            <img src={tick} alt=" "/>
              <div>
                <h4>SpringBoot</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article>
            <img src={tick} alt=" "/>
              <div>
                <h4>Git/GitHub</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article>
            <img src={tick} alt=" "/>
              <div>
                <h4>MS Excel</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
           
            </div>
            </div>
     


      <div className="experience__category">
          <h3>Soft Skills</h3>
          <div className="experience__content">
            <article>
            <img src={tick} alt=" "/>
              <div>
                <h4>Communication Skills</h4>
                <small className="text-light">Fluent</small>
              </div>
            </article>
            <article>
            <img src={tick} alt=" "/>
              <div>
                <h4>Team Work</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article>
            <img src={tick} alt=" "/>
              <div>
                <h4>Problem Solving</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article>
            <img src={tick} alt=" "/>
              <div>
                <h4>Analytical Thinking</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
               </div>     
            </div>
        </div>
        </div>
        <div className="about-achievements">
            <h1>Competitive Programming & Certifications</h1>                  
            <div className="about-achievement">
             <h2>250+</h2>
             <p>DSA problems solved across 
              Hackerrank, Leetcode, Codechef, Gfg coding platforms</p>
</div>
            </div>
            <hr />
            <div className="about-certification">
                <h1>IBM Data Science Professional Certificate - Coursera</h1>
                <p>IBM Python for AI, Data Science and Software Development</p>
                <span><a href="https://coursera.org/share/644661fe0cde7af915e478a59c5618ff" alt="certficate" target="_blank" >Link to certficate</a></span>
            </div>
            <hr />
            <div className="about-certificate">
                <h1>Talentnext - Wipro</h1>
                <p>Digital Skills Readiness Program</p>
                <span><a href="https://drive.google.com/file/d/1BNMUzONz0aMZ4FW_QrWz7s_PI0QqYKr7/view?usp=drivesdk" target="_blank">Here is my Certficate!</a></span>
           
        </div>
    </div>
   
    <div className="about-links">
      <div className='about-link'>
        <p>Browse my</p>
        <h1>Coding Profiles</h1>
        <div className="section-map">
        <section>
        <span><a href="https://leetcode.com/u/shivanidhotre311/" target="_blank">Leetcode</a></span>
           
      
          <span><a href="https://www.hackerrank.com/profile/shivanidhotre211" target="_blank">Hackerrank</a></span>
       
          <span><a href="https://www.geeksforgeeks.org/user/shivanidhotre311/" target="_blank">GeeksforGeeks</a></span>
        
          <span><a href="https://www.codechef.com/users/shivanidhotre3" target="_blank">Codechef</a></span>
        </section>
        </div>
      </div>
      </div>

    
    </div>
  )
}

export default About