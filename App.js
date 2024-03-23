import React from 'react'; 
import {Helmet} from 'react-helmet';
// install react-helmet
// npm install --save @fortawesome/fontawesome-free

import './App.css';
import FiniLogo from './Media/FiniLogo.png';
import Khushi from './Media/Pres_Khushi.png';
import Ritika from './Media/CP_Ritika.png';
import Tejasvi from './Media/Pres_Tejasvi.png';
import Akshika from './Media/VP_Akshika.png';
import Manasi from './Media/VP_Manasi.png';
import Anshika from './Media/Content_Anshika.png';
import Kashish from './Media/Content_Kashish.png';
import Anandita from './Media/FR_Anandita.png';
import Sanskriti from './Media/FR_Sanskriti.png';
import Aiman from './Media/HR_Aiman.png';
import Urja from './Media/HR_Urja.png';
import Gunjan from './Media/Creative_Gunjan.png';
import Mansi from './Media/Creative_Mansi.png';
import Aadya from './Media/PR_Aadya.png';
import Disha from './Media/PR_Disha.png';
import Gargi from './Media/Treas_Gargi.png';
import Meera from './Media/Treas_Meera.png';
import Saachi from './Media/Tech_Saachi.png';

import X from './Media/X.png';
import Insta from './Media/Insta.png';
import LinkedIn from './Media/LinkedIn.png';


function App() {

    return ( 

      // Page is divided into 5 parts
      // 1. Navbar
      // 2. Head
      // 3. Cores
      // 4. Social
      // 5. Footer
      
        <div> 

          <Helmet>
            <meta charSet="utf-8" />
          </Helmet>

          <script src="https://kit.fontawesome.com/b615cbf928.js" crossOrigin="anonymous"></script>


            <nav className="navbar">
              <i className="logo"><img src={FiniLogo} alt="FiniLogo" height="42"/></i>
              <ul className="nav-menu">
                <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Events</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Sponsors</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Resources</a></li>
                <li className="nav-item"><a href="#" className="nav-link-active">Team</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Contact Us</a></li>
              </ul>
              <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            </nav>

            <section className="main"> 
                <div className="box-main"> 
                  <h1 className="text-big"> 
                      Team
                  </h1> 
                  <p className="text-small"> 
                      Get to know the brilliant minds shaping our journey,
                      each member of our team contributing their passion and expertise.
                  </p>  
                </div> 
            </section> 


            <section className="cores">
              <p className='title'>Heads</p>
              <div className="cores-photo">
                
                <div className="photo">
                  <img src={Ritika} alt="Avatar" className="image" />
                  <div className="overlay">
                    <a href="https://www.linkedin.com/in/ritikasinghgautam/" className="icons">
                      <img src={LinkedIn} alt="Insta" height="17"/>
                    </a>
                    <a href="https://www.instagram.com/ikigairey?igsh=ODA1NTc5OTg5Nw==" className="icons">
                      <img src={Insta} alt="Insta" height="17"/>
                    </a>
                  </div>
                </div>
                
                <div className="photo">
                  <img src={Khushi} alt="Avatar" className="image" />
                  <div className="overlay">
                    <a href="https://www.linkedin.com/in/khushi-sharma-17185021b/" className="icons">
                      <img src={LinkedIn} alt="Insta" height="17"/>
                    </a>
                  </div>
                </div>

                <div className="photo">
                  <img src={Tejasvi} alt="Avatar" className="image" />
                  <div className="overlay">
                    <a href="https://www.linkedin.com/in/tjv-sb/" className="icons">
                      <img src={LinkedIn} alt="LinkedIn" height="17"/>
                    </a>
                  </div>
                </div>

                <div className="photo">
                  <img src={Akshika} alt="Avatar" className="image" />
                  <div className="overlay">
                    <a href="https://www.linkedin.com/in/akshika-dhankhar-8447b2223/" className="icons">
                      <img src={LinkedIn} alt="LinkedIn" height="17"/>
                    </a>
                  </div>
                </div>
                
                <div className="photo">
                  <img src={Manasi} alt="Avatar" className="image" />
                  <div className="overlay">
                    <a href="https://www.linkedin.com/in/manasi-duggal" className="icons">
                      <img src={LinkedIn} alt="LinkedIn" height="17"/>
                    </a>
                    <a href="https://www.instagram.com/manasiduggal/?hl=en" className="icons">
                      <img src={Insta} alt="Insta" height="17"/>
                    </a>
                  </div>
                </div>

                <div className="photo">
                  <img src={Gargi} alt="Avatar" className="image" />
                  <div className="overlay">
                    <a href="https://www.linkedin.com/in/gargi-goel9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="icons">
                      <img src={LinkedIn} alt="Insta" height="17"/>
                    </a>
                    <a href="https://www.instagram.com/goelgargi_9?igsh=ODA1NTc5OTg5Nw==" className="icons">
                      <img src={Insta} alt="Insta" height="17"/>
                    </a>
                  </div>
                </div>
                
                <div className="photo">
                  <img src={Meera} alt="Avatar" className="image" />
                  <div className="overlay">
                    <a href="https://www.linkedin.com/in/meera-parida-82b62a223" className="icons">
                      <img src={LinkedIn} alt="Insta" height="17"/>
                    </a>
                  </div>
                </div>

              </div>
              <p className='title'>Cores</p>
              <div className="cores-photo">

                <div className="photo">
                  <img src={Anshika} alt="Avatar" className="image" />
                  <div className="overlay">
                    <a href="https://www.linkedin.com/in/anshika-aggarwal-704847249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="icons">
                      <img src={LinkedIn} alt="Insta" height="17"/>
                    </a>
                  </div>
                </div>
                
                <div className="photo">
                  <img src={Kashish} alt="Avatar" className="image" />
                  <div className="overlay">
                    <a href="https://www.linkedin.com/in/kashish-narwal-a45bab25a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="icons">
                      <img src={LinkedIn} alt="Insta" height="17"/>
                    </a>
                    <a href="https://www.instagram.com/kashish_narwal7?igsh=MTl6czQ3dnk5aDVydg==" className="icons">
                      <img src={Insta} alt="Insta" height="17"/>
                    </a>
                  </div>
                </div>

                <div className="photo">
                  <img src={Anandita} alt="Avatar" className="image" />
                  <div className="overlay">
                    <a href="https://www.linkedin.com/in/anandita-mayer-9b5941261/" className="icons">
                      <img src={LinkedIn} alt="Insta" height="17"/>
                    </a>
                  </div>
                </div>
                
                <div className="photo">
                  <img src={Sanskriti} alt="Avatar" className="image" />
                  <div className="overlay">
                    <a href="https://www.linkedin.com/in/sanskritividushi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="icons">
                      <img src={LinkedIn} alt="Insta" height="17"/>
                    </a>
                    <a href="https://www.instagram.com/sanskritividushi?igsh=MWNvY2F3OWJ2ZG51aA==" className="icons">
                      <img src={Insta} alt="Insta" height="17"/>
                    </a>
                  </div>
                </div>

                <div className="photo">
                  <img src={Gunjan} alt="Avatar" className="image" />
                  <div className="overlay">
                    <a href="https://www.linkedin.com/in/gunjanvaishnavijangra" className="icons">
                      <img src={LinkedIn} alt="Insta" height="17"/>
                    </a>
                  </div>
                </div>

                <div className="photo">
                  <img src={Mansi} alt="Avatar" className="image" />
                  <div className="overlay">
                    <a href="https://www.linkedin.com/in/manasi-bhagat-498646251/" className="icons">
                      <img src={LinkedIn} alt="Insta" height="17"/>
                    </a>
                  </div>
                </div>

                <div className="photo">
                  <img src={Aiman} alt="Avatar" className="image" />
                  <div className="overlay">
                    <a href="https://www.linkedin.com/in/aiman-zakir-358a2b257/" className="icons">
                      <img src={LinkedIn} alt="Insta" height="17"/>
                    </a>
                  </div>
                </div>

                <div className="photo">
                  <img src={Urja} alt="Avatar" className="image" />
                  <div className="overlay">
                    <a href="https://www.linkedin.com/in/urja-kohli04" className="icons">
                      <img src={LinkedIn} alt="Insta" height="17"/>
                    </a>
                    <a href=" https://www.instagram.com/urja_kohli?igsh=MXI1dzRwYmhzeHZqNg%3D%3D&utm_source=qr" className="icons">
                      <img src={Insta} alt="Insta" height="17"/>
                    </a>
                  </div>
                </div>
                
                <div className="photo">
                  <img src={Aadya} alt="Avatar" className="image" />
                  <div className="overlay">
                    <a href="https://www.linkedin.com/in/aadya-kumar-a00718248/" className="icons">
                      <img src={LinkedIn} alt="Insta" height="17"/>
                    </a>
                    <a href="https://www.instagram.com/aadya_kumar/" className="icons">
                      <img src={Insta} alt="Insta" height="17"/>
                    </a>
                  </div>
                </div>

                <div className="photo">
                  <img src={Disha} alt="Avatar" className="image" />
                  <div className="overlay">
                    <a href="https://www.linkedin.com/in/dishabajaj12?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="icons">
                      <img src={LinkedIn} alt="Insta" height="17"/>
                    </a>
                    <a href="https://www.instagram.com/disha_bajaj12?igsh=dWRzc25na3VhOGNp" className="icons">
                      <img src={Insta} alt="Insta" height="17"/>
                    </a>
                  </div>
                </div>

                <div className="photo">
                  <img src={Saachi} alt="Avatar" className="image" />
                  <div className="overlay">
                    <a href="https://www.linkedin.com/in/saachi-bansal/" className="icons">
                      <img src={LinkedIn} alt="Insta" height="17"/>
                    </a>
                  </div>
                </div>
              
            </div>
            </section>

            <section className="social">
              <hr></hr>
              <p className='title'>Socials</p>
              <div className="social-icon">
                <a href="#">
                 <img src={Insta} alt="Insta" height="23"/>
                </a>
                <a href="#">
                 <img src={X} alt="X" height="29"/>
                </a>
                <a href="#">
                 <img src={LinkedIn} alt="LinkedIn" height="23"/>
                </a>
              </div>
            </section>

            <footer className="footer">
              <div className="footer-content">
                <a className="fbut" href="#">Home</a>
                <a className="fbut" href="#">Events</a>
                <a className="fbut" href="#">Sponsors</a>
                <a className="fbut-active" href="#">Team</a>
                <a className="fbut" href="#">Resources</a>
                <a className="fbut" href="#">Contact Us</a>
              </div>
                <p className="text-footer"> 
                    Copyright © 2023 Finivesta IGDTUW - All Rights Reserved.
                </p> 
            </footer> 
        </div> 
    ) 
} 

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

if (navLink) {
  navLink.forEach(n => n.addEventListener("click", closeMenu));
}

// showed error below so did if block
if (hamburger) {
  console.log("print");
  hamburger.addEventListener("click", mobileMenu);
}

export default App

/*


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
<i href="#" className="fa-brands fa-instagram"></i>
<i href="#" className="fa-brands fa-x-twitter"></i>
<i href="#" className="fa-brands fa-linkedin"></i>
<i href="#" className="fa fa-facebook"></i>
*/