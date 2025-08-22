import React from 'react'
import './Contact.css'
import theme_pattern from '/src/assets/theme_pattern.svg'
import mail_icon from '/src/assets/mail_icon.svg'
import location_icon from '/src/assets/location_icon.svg'
import call_icon from '/src/assets/call_icon.svg'
import { ToastContainer, toast } from 'react-toastify';
const Contact = () => {
  const notify = () => toast("submitted successfully");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "65216d31-6128-402b-a59d-a346a5683fa0");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
         notify
        }
    };
    return (
    <div id='contact'className='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt="" />

        </div>
        <div className='contact-section'>
            <div className='contact-left'>
                <h1>Let's Talk</h1>
               <div className="contact-details">
                <div className="contact-detail">
                  <img src={mail_icon} alt="" /><p>shivanidhotre511@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt ="" /><p>+918555061208</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt=""/>Gadwal, India
                </div>
                
               </div>
            </div>
            <form  onSubmit={onSubmit} className='contact-right'>
                <label htmlForm="">Your Name</label>
                <input type="text" placeholder='Enter your name' name ='name'/>
                <label htmlForm="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email'/>
                <label htmlForm="">Write your message here</label>
                <textarea name='message' rows='8' placeholder="Enter your message"></textarea>
                <button type='submit' className='contact-submit' onClick={notify}>Submit Now</button>
                <ToastContainer position="top-right"/>
            </form>
        </div>
    </div>
  )
}

export default Contact