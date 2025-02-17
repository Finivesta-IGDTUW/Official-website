import React, { useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import "../BudgetingGame/styleGame.css";
import balance from "../BudgetingGame/BgameImages/balanceimage.png";
import buttonClickSound from "../BudgetingGame/BgameAudio/buttonclick.mp3"; 
import backaudio from "../BudgetingGame/BgameAudio/backaudio.mp3";  

const One = () => {
    const navigate = useNavigate();  
    const clickSound = useRef(null); 
    const bgAudio = useRef(null); 

    const playClickSound = () => {
        if (clickSound.current) {
            console.log("Playing sound...");
            clickSound.current.currentTime = 0; 
            clickSound.current.volume = 1;  
            clickSound.current.play(); 
        } else {
            console.error("Audio element not found!");
        }
    };

    const goToTwoPage = () => {
        playClickSound(); 
        navigate('/games/Budgetingame/two.js');  
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
                <p id="main2">
                    <span className="line">Although budgeting may sound like a pain...<br /></span>
                    <span className="line">it can actually give you control over your money!<br /></span>      
                    <span className="line">Simply put, the key is:<br /></span>
                    <span className="line" style={{fontSize: "5vh" }}><big><big>BALANCE</big></big></span>
                </p>
                <br /><br />
            </div>

            <span id="balance">
                <img id="balance" src={balance} width="200vh" height="90vh" alt="Balance GIF" />
            </span>

            <br /><br />
            
            <div className="button">
                <button className="my-button" onClick={goToTwoPage}>  
                    START 
                </button>
                <audio ref={clickSound} src={buttonClickSound} preload="auto"></audio> 
            </div>
            
            <br />

            <audio ref={bgAudio} src={backaudio} preload="auto"></audio>
        </div>
    );
};

export default One;
