import React from "react";
import "./Events.css";

import BiddingBlitz from './Images/BiddingBlitz.png';
import CollegeTrading from './Images/CollegeTrading.png';
import Finlatics from './Images/Finlatics.png';
import KharchePeCharche from './Images/KharchePeCharche.png';
import Melange from './Images/Melange.png';
import Orientation from './Images/Orientation.png';
import Speaker from './Images/Speaker.png';

const Events = () =>{
  
  
  return (
    <div className="Events">
    <div className="events-header">
            <h1>Our Events</h1>
            <p>Discover the latest happenings and <br />exciting upcoming events here</p>
            </div>

   
   
  <div>
     <h1 className="Year">2024</h1>

     <div className="Images">
       <div className="flex1">
      

       <div className="element">
         
         <div className="element3 ele">
           {/*  Finlatics*/}
     

           
           <a href='https://www.linkedin.com/feed/update/urn:li:activity:7160561756463853568/' target='_blank' rel='noreferrer'>
           <div class="image-wrapper">
           <img className="image" src={Finlatics} alt="Finlatics"/>
           <div class="overlay">
            
           <i  className="fab fa-linkedin-in"/>
           </div>
           </div>
           </a> 
       

                 
            
          
    
        
         </div>
 
         <h2 className="title">Finlatics Seminar</h2>
 
         </div>
       


       <div className="element">
       <div className="element2 ele">
         {/* Money Melange */}
         <a href='https://www.instagram.com/p/C2opSv9yFFC/' target='_blank' rel='noreferrer'>
         <div class="image-wrapper">
       <img src={Melange} alt="Money Melange"/>
       <div class="overlay">
       <i className="fab fa-instagram"/>
           </div>
       </div>
       </a>
       </div>

       <h2 className="title">Money Melange</h2>

       </div>
     


       </div>
       
       <div className="flex1">


      
       
       <div className="element">
       <div className="element1 ele">
         {/* Kharche pe Charcha */}
         <a href='https://www.instagram.com/p/C2AVhH4SE0P/' target='_blank' rel='noreferrer'>
         <div class="image-wrapper">
         <img src={KharchePeCharche} alt="kharche pr charcha"/>
         <div class="overlay">
         <i className="fab fa-instagram"/>
       </div>
           </div>
         </a>
         </div>
      
       <h2 className="title">Kharche Pe Charche</h2>
       </div>
       

       </div>
       
       </div>
       < hr className='green-line' />
      
     </div>



  <div>
     <h1 className="Year">2023</h1>

     <div className="Images">
       <div className="flex1">
      

         <div className="element">
       <div className="element1 ele">
         {/* bidding bitz */}
         <a href='https://www.instagram.com/p/CzqYKwRLp24/' target='_blank' rel='noreferrer'>
         <div class="image-wrapper">
         <img src={BiddingBlitz} alt="speaker"/>
         <div class="overlay">
         <i className="fab fa-instagram"/>
           </div>
         </div>
         </a>
       </div>
      
       <h2 className="title">Bidding Blitz</h2>
       </div>
       


       <div className="element">
       <div className="element2 ele">
         {/* speaker */}
         <a href='https://www.instagram.com/p/CzbC7cLPrex/' target='_blank' rel='noreferrer'>
         <div class="image-wrapper">
       <img src={Speaker} alt="speaker"/>
       <div class="overlay">
       <i className="fab fa-instagram"/>
           </div>
       </div>
       </a>
       </div>

       <h2 className="title">Guide To Stock Market</h2>

       </div>
     


       </div>
       
       <div className="flex1">


       <div className="element">
         
       <div className="element3 ele">
         {/*  college trader showdown*/}
         <a href='https://www.instagram.com/p/CxXRs1Pywdn/' target='_blank' rel='noreferrer'>
         <div class="image-wrapper">
         <img src={CollegeTrading} alt="speaker"/>
         <div class="overlay">
         <i className="fab fa-instagram"/>
           </div>
         </div>
         </a>
       </div>

       <h2 className="title">College Trader Showdown</h2>

       </div>
       
       

       <div className="element">
         
       <div className="element4 ele">
         {/*  orientation*/}
         <a href='https://www.instagram.com/p/CxAA9weLEea/?img_index=1' target='_blank' rel='noreferrer'>
         <div class="image-wrapper">
         <img src={Orientation} alt="speaker"/>
         <div class="overlay">
         <i className="fab fa-instagram"/>
           </div>
         </div>
         </a>
       </div>

       <h2 className="title">Orientation</h2>

       </div>

       </div>
       
       </div>
       {/* < hr className='green-line' /> */}
     </div>

     </div>
        
  );
};

export default Events;