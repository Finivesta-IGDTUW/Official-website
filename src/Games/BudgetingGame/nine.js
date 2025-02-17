import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../BudgetingGame/styleGame.css";
import Image from "../BudgetingGame/BgameImages/image.png";
import exitClickSound from "../BudgetingGame/BgameAudio/buttonclick.mp3";  
import backgroundSound from "../BudgetingGame/BgameAudio/backaudio.mp3"; 

const Nine = () => {
    const navigate = useNavigate(); 
    const clickSound = new Audio(exitClickSound); 
    const bgAudio = useRef(null);

    const playExitClickSound = () => {
        clickSound.currentTime = 0; 
        clickSound.volume = 1; 
        clickSound.play(); 
    };

    const goToHomePage = () => {
        playExitClickSound(); 
        navigate('/');
    };

    useEffect(() => {
        if (bgAudio.current) {
            bgAudio.current.play();
            bgAudio.current.loop = true; 
        }

        return () => {
            if (bgAudio.current) {
                bgAudio.current.pause();
                bgAudio.current.currentTime = 0; 
            }
        };
    }, []); 

    return (
        <div className="BudgetingGame">
            <div className="upper">
                <h1 id="heading">THE BUDGETING GAME!</h1>
            </div>
            <hr />

            <div className="main1">
                <pre>
                    <img src={Image} height="120vh" width="120vh" alt="Image" /><br /><br />
                    <p>
                        <span className="line">Nice estimating!<br /></span>
                        <span className="line">Now you can see why budgeting matters. Even small expenses<br /></span>
                        <span className="line">can add up! Be sure to budget, track your spending, and have<br /></span>
                        <span className="line">emergency savings to back you up.</span>
                    </p>
                </pre>
            </div>
            <br /><br />

            <div className="button">
                <button onClick={goToHomePage} className="my-button">EXIT</button>
            </div>
            <br />

            <audio ref={bgAudio} src={backgroundSound} preload="auto" style={{ display: 'none' }}></audio>
        </div>
    );
};

export default Nine;
