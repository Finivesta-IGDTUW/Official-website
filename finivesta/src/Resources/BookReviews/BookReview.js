import React from "react";
import "../Resources.css";

import BooksImage from '../Images/book_reviews_img.png';

const BookReview = () => {
  return (
        <div>
            <div class="header">
  <h1>Book Reviews</h1>
  <p>Access the wealth of knowledge and tools in our <br/>resource library.</p> 
</div>




<div class="resourcesbox">

 <div class="boxsmall">
  
     <div class="img">
       <img src={BooksImage} />
     </div>
     <div class="text">
       <h2>Review 1</h2>
      
    </div>
 </div>

 <div class="boxsmall">
  
    <div class="img">
      <img src={BooksImage}/>
    </div>
    <div class="text">
      <h2>Review 2</h2>
      
  </div>
</div>
<div class="boxsmall">
  
    <div class="img">
      <img src={BooksImage}/>
    </div>
    <div class="text">
      <h2>Review 3</h2>
    
    </div>
  </div>
  
  <div class="boxsmall">
    <div class="img">
      <img src={BooksImage}/>
    </div>
    <div class="text">
      <h2>Review 4</h2>
       
   </div>

  </div>

  <div class="boxsmall">
    <div class="img">
      <img src={BooksImage}/>
    </div>
    <div class="text">
      <h2>Review 5</h2>
      
   </div>

  </div>

 <div class="boxsmall">
    <div class="img">
      <img src={BooksImage}/>
    </div>
    <div class="text">
      <h2>Review 6</h2>
    
   </div>

  </div>
</div>

        </div>
        
  );
};

export default BookReview;