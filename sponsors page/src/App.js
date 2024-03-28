import './App.css';
import Image from './image.png';
import Logo from './logoo.png';
import {Helmet} from 'react-helmet';
// import Fav from '';


function App() {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="/file/style.css" rel="stylesheet"/>
        <title>Finivesta</title>
        {/* <link rel="icon" href={Fav}/> FAVICON KE LIYE BLANK SYNTAX */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"/>
      </Helmet>

      <h1 class="our_sponsors">Our Sponsors</h1>
      <div class="sponsors_container">
        {/* Added blank links to link logo to the page of the sponsors */}
        <div class="logos" id="a1">
          <a href="#" target="_blank">
            <img src={Image} alt=""/>
          </a>
        </div> 
        <div class="logos" id="a2">
          <a href="#" target="_blank">
            <img src={Image} alt=""/>
          </a>
        </div>
        <div class="logos" id="a3">
          <a href="#" target="_blank">
            <img src={Image} alt=""/>
          </a>
        </div>
        <div class="logos" id="a4">
          <a href="#" target="_blank">
            <img src={Image} alt=""/>
          </a>
        </div>
        <div class="logos" id="a5">
          <a href="#" target="_blank">
            <img src={Image} alt=""/>
          </a>
        </div>
        <div class="logos" id="a6">
          <a href="#" target="_blank">
            <img src={Image} alt=""/>
          </a>
        </div>
      </div>

  <h1 class="our_partners">Our Partners</h1>
      <div class="partners_container">
        <div class="logos" id="b1">
          <a href="#" target="_blank">
            <img src={Logo} alt=""/>
          </a>
        </div> 
        <div class="logos" id="b2">
          <a href="#" target="_blank">
            <img src={Logo} alt=""/>
          </a>
        </div>
        <div class="logos" id="b3">
          <a href="#" target="_blank">
            <img src={Logo} alt=""/>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
