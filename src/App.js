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

import AIinfinance from "./Resources/Blogs/Blogpages/AI-in-finance";
import Financeandtechnology from "./Resources/Blogs/Blogpages/finance-and-technology";
import Powerofcompounding from "./Resources/Blogs/Blogpages/power-of-compounding";
import Liquidation from "./Resources/Blogs/Blogpages/liquidation";
import Financialliteracy from "./Resources/Blogs/Blogpages/financial-literacy";
import Bidding from "./Resources/Blogs/Blogpages/bidding";

import BookReview from "./Resources/BookReviews/BookReview";
import Podcast from "./Resources/Podcasts/Podcast";
import Youtube from "./Resources/Youtube/Youtube";
import Team from "./Team/Team";
import Contact from "./ContactUs/Contact";
import Review1 from "./Resources/BookReviews/book-pages/Review1";
import Review2 from "./Resources/BookReviews/book-pages/Review2";
import Review3 from "./Resources/BookReviews/book-pages/Review3";
import Review4 from "./Resources/BookReviews/book-pages/Review4";

function App() {
  return (
    <div className="App">
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"/>
      </Helmet>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/sponsors" element={<Sponsor/>}/>
          <Route path="/resources" element={<Resources/>}/>
          {/* Under resources */}
            <Route path="/resources/blogs" element={<Blog/>}/>
              {/* Blog pages */}
              <Route path="/resources/blogs/AI-in-finance" element={<AIinfinance/>}/>
              <Route path="/resources/blogs/finance-and-technology" element={<Financeandtechnology/>}/>
              <Route path="/resources/blogs/power-of-compounding" element={<Powerofcompounding/>}/>
              <Route path="/resources/blogs/liquidation" element={<Liquidation/>}/>
              <Route path="/resources/blogs/financial-literacy" element={<Financialliteracy/>}/>
              <Route path="/resources/blogs/bidding" element={<Bidding/>}/>
              
              {/*Book pages*/}
            <Route path="/resources/books" element={<BookReview/>}/>
            <Route path="/resources/bookreviews/book-pages/review1" element={<Review1/>}/>
            <Route path="/resources/bookreviews/book-pages/review2" element={<Review2/>}/>
            <Route path="/resources/bookreviews/book-pages/review3" element={<Review3/>}/>
            <Route path="/resources/bookreviews/book-pages/review4" element={<Review4/>}/>
            <Route path="/resources/youtube" element={<Youtube/>}/>
            <Route path="/resources/podcasts" element={<Podcast/>}/>
            <Route path="/resources/videos" element={<Youtube/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
