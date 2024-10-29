import React from "react";
import {Link} from "react-router-dom";
import "./Games.css";

import Image from './GameImages/blogs_img2.png';

const Games = () => {

    return (
        <div className="Games">
            <div className="header">
            <h1>Games</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
    
            <div className="GamesMainbox">

                <Link to="/games/higherlower" className="gamebox">
                    <div className="img">
                        <img src={Image} alt="Blogs" />
                    </div>
                    <div className="text">
                        <h2>Higher Lower Game</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </Link>
    
                <Link to="/games/matchthetiles" className="gamebox">
                    <div className="img">
                        <img src={Image} alt="Book Reviews"/>
                    </div>
                    <div className="text">
                        <h2>Match The Tiles</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </Link>

                <Link to="/games/moneybingo" className="gamebox">
                    <div className="img">
                        <img src={Image} alt="Online Videos" />
                    </div>
                    <div className="text">
                        <h2>Money Bingo</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </Link>

                <Link to="/games/budgetguessing" className="gamebox">
                    <div className="img">
                        <img src={Image} alt="Podcasts" />
                    </div>
                    <div className="text">
                        <h2>The Budget Guessing Game</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </Link>
    
                <Link to="/games/jumblewords" className="gamebox">
                    <div className="img">
                        <img src={Image} alt="Stock Market & Trading" />
                    </div>
                    <div className="text">
                        <h2>Jumble Words</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </Link>

            </div>
        
        </div>

        
    );
};

export default Games;