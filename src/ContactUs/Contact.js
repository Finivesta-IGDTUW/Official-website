import React from "react";
import {Helmet} from 'react-helmet';
import emailjs from 'emailjs-com';

import "./Contact.css";

const Contact = () => {

    emailjs.init({
        publicKey: '8VSGEh4AnMjc3fe6',
        // Do not allow headless browsers
        blockHeadless: true,
        blockList: {
          // Block the suspended emails
          list: ['foo@emailjs.com', 'bar@emailjs.com'],
          // The variable contains the email address
          watchVariable: 'userEmail',
        },
        limitRate: {
          // Set the limit rate for the application
          id: 'app',
          // Allow 1 request per 10s
          throttle: 10000,
        },
      });
    
    document.addEventListener('DOMContentLoaded', function() {
        var contactForm = document.getElementById("contact-form");
        if (contactForm) {
            contactForm.addEventListener("submit", function(e) {
                e.preventDefault(); // Prevent default form submission
    
                var formData = {
                    name: document.getElementById("fname").value,
                    email: document.getElementById("email").value,
                    phone: document.getElementById("phone").value,
                    subject: document.getElementById("subject").value,
                    message: document.getElementById("message").value
                };
    
                // Form validation logic here (if needed)
    
                // Send email using EmailJS
                emailjs.send('service_yeez0so', 'template_q376bel', formData).then(
                    (response) => {
                        console.log('SUCCESS!', response);
                        alert('Your message has been sent successfully. We will get back to you soon.');
                        // Provide success feedback to user
                    },
                );
            });
        } else {
            console.log('Contact form not found');
        }
    });
    

    return (
        <div className="ContactPage">
            <Helmet>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Contact Us</title>
                <script src="https://cdn.emailjs.com/dist/email.min.js"></script>
                <script src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
                <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script> 
            </Helmet>
       
            <p className="Contact">Contact Us</p>

            <div className="wrapper">
                <div className="box1">
                    <p>
                        <b>FINIVESTA<br />
                        Financial and economics society - IGDTUW</b> <br />
                    Address<br />
                    James Church, New Church Rd, Opp. St,<br/>
                    Kashmere Gate, New Delhi, Delhi 110006<br/>
                    <b>Phone</b><br />
                    011 2390 0220
                    </p>
                </div>
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7001.611386887791!2d77.22299567770999!3d28.6655361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0683919c3b%3A0xf5fc331b74c2b9e2!2sIndira%20Gandhi%20Delhi%20Technical%20University%20for%20Women!5e0!3m2!1sen!2sin!4v1701533528764!5m2!1sen!2sin" title="Contact Form" width="400" height="300" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <script src="script.js"></script>
                </div>
            </div>

            <div className="message">
                <p>Send a message</p>
            </div>

            <div className="container">
                <form id="contact-form">
                    <div className="row">
                        <div className="col-50">
                            <input type="text" id="fname" name="firstname" placeholder="Name" required />
                        </div>
                        <div className="col-75">
                            <input type="email" id="email" name="email" placeholder="Email" required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-50">
                            <input type="tel" id="phone" name="phone" placeholder="Phone" required />
                        </div>
                        <div className="col-75">
                            <input type="text" id="subject" name="subject" placeholder="Subject" required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-100">
                            <textarea id="message" name="message" placeholder="Message" style={{height: "150px"}} required></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-100">
                            <input type="submit" value="Send" className="submit-button" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;