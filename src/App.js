import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Helmet} from 'react-helmet';
import './App.css';

import Navbar from './NavbarFooter/Navbar';
import Footer from "./NavbarFooter/Footer";

import Home from "./Home/Home";
import Events from "./Events/Events";
import Sponsor from "./Sponsors/Sponsor";
import Resources from "./Resources/Resources";
import Blog from "./Resources/Blogs/Blog";
import TradingApps from "./Resources/TradingApps/TradingApps";

import AIinfinance from "./Resources/Blogs/Blogpages/AI-in-finance";
import Financeandtechnology from "./Resources/Blogs/Blogpages/finance-and-technology";
import Powerofcompounding from "./Resources/Blogs/Blogpages/power-of-compounding";
import Liquidation from "./Resources/Blogs/Blogpages/liquidation";
import Financialliteracy from "./Resources/Blogs/Blogpages/financial-literacy";
import Bidding from "./Resources/Blogs/Blogpages/bidding";
import DigitalGold from "./Resources/Blogs/Blogpages/digitalgold";
import GoldHistory from "./Resources/Blogs/Blogpages/goldhistory";
import DhanterasDynamics from "./Resources/Blogs/Blogpages/dhanteras-dynamics";
import GoldOnDhanteras from "./Resources/Blogs/Blogpages/buying-gold-on-dhanteras";


import BookReview from "./Resources/BookReviews/BookReview";
import Podcast from "./Resources/Podcasts/Podcast";
import Youtube from "./Resources/Youtube/Youtube";
import Stocks from "./Resources/StockMarket/Stocks";
import Team from "./Team/Team";
import Contact from "./ContactUs/Contact";
import Review1 from "./Resources/BookReviews/bookpages/Review1";
import Review2 from "./Resources/BookReviews/bookpages/Review2";
import Review3 from "./Resources/BookReviews/bookpages/Review3";
import Review4 from "./Resources/BookReviews/bookpages/Review4";
import Review5 from "./Resources/BookReviews/bookpages/Review5";
import Review6 from "./Resources/BookReviews/bookpages/Review6";
import Review7 from "./Resources/BookReviews/bookpages/Review7";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"/>
      </Helmet>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/sponsors" element={<Sponsor/>}/>
          <Route path="/resources" element={<Resources/>}/>
          {/* Under resources */}
            <Route path="/resources/blogs" element={<Blog/>}/>
              {/* Blog pages */}
              <Route path="/resources/blogs/01-AI-in-finance" element={<AIinfinance/>}/>
              <Route path="/resources/blogs/02-finance-and-technology" element={<Financeandtechnology/>}/>
              <Route path="/resources/blogs/03-power-of-compounding" element={<Powerofcompounding/>}/>
              <Route path="/resources/blogs/04-liquidation" element={<Liquidation/>}/>
              <Route path="/resources/blogs/05-financial-literacy" element={<Financialliteracy/>}/>
              <Route path="/resources/blogs/06-bidding" element={<Bidding/>}/>
              <Route path="/resources/blogs/07-digital-gold" element={<DigitalGold/>}/>
              <Route path="/resources/blogs/08-gold-history" element={<GoldHistory/>}/>
              <Route path="/resources/blogs/09-dhanteras-dynamics" element={<DhanterasDynamics/>}/>
              <Route path="/resources/blogs/10-gold-on-dhanteras" element={<GoldOnDhanteras/>}/>

              
              {/*Book pages*/}
            <Route path="/resources/books" element={<BookReview/>}/>
            <Route path="/resources/bookreviews/bookpages/doglapan" element={<Review1/>}/>
            <Route path="/resources/bookreviews/bookpages/intelligentinvestor" element={<Review2/>}/>
            <Route path="/resources/bookreviews/bookpages/richdadpoordad" element={<Review3/>}/>
            <Route path="/resources/bookreviews/bookpages/psychologyofmoney" element={<Review4/>}/>
            <Route path="/resources/bookreviews/bookpages/richestmaninbabylon" element={<Review5/>}/>
            <Route path="/resources/bookreviews/bookpages/millnextdoor" element={<Review6/>}/>
            <Route path="/resources/bookreviews/bookpages/moneyorlife" element={<Review7/>}/>
            <Route path="/resources/youtube" element={<Youtube/>}/>
            <Route path="/resources/podcasts" element={<Podcast/>}/>
            <Route path="/resources/stocks" element={<Stocks/>}/>
            <Route path="/resources/videos" element={<Youtube/>}/>
            <Route path="/resources/trading" element={<TradingApps/>}/>

          <Route path="/team" element={<Team/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      <Footer/>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
