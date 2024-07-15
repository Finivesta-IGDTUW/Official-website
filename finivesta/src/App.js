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
import BookReview from "./Resources/BookReviews/BookReview";
import Youtube from "./Resources/Youtube/Youtube";
import Team from "./Team/Team";
import Contact from "./ContactUs/Contact";

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
          <Route path="/resources/blogs" element={<Blog/>}/>
          <Route path="/resources/books" element={<BookReview/>}/>
          <Route path="/resources/youtube" element={<Youtube/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
