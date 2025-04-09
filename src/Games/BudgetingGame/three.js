import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "../BudgetingGame/styleGame.css";
import buttonClickSound from "../BudgetingGame/BgameAudio/buttonclick.mp3"; 
import backaudio from "../BudgetingGame/BgameAudio/backaudio.mp3";  

const Three = () => {

    const style = document.createElement('style');
    style.innerHTML = `
        .rangeInput::-webkit-slider-thumb {
            background-image: url('https://cdn-icons-png.flaticon.com/512/6744/6744480.png');
            background-size: cover;
        }
    `;
    document.head.appendChild(style);

    const navigate = useNavigate(); 
    const [rangeValue, setRangeValue] = useState(25000);  
    const clickSound = useRef(null);  
    const bgAudio = useRef(null);  

    const handleRangeChange = (event) => {
        setRangeValue(event.target.value);  
    };

    const playClickSound = () => {
        if (clickSound.current) {
            clickSound.current.currentTime = 0;
            clickSound.current.volume = 1; 
            clickSound.current.play(); 
        } else {
            console.error("Audio element not found!");
        }
    };

    const goToFourPage = () => {
        const result = Math.abs(36500 - rangeValue);  

        localStorage.setItem('result1', result);
        localStorage.setItem('value1', rangeValue);

        playClickSound();
        navigate('/games/budgetinggame/four');
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
            </div><hr />

            <div className="main1">
                <p>
                    <span className="line">Guess how much it would cost<br />
                        if you bought a coffee every day for a year?</span>
                </p>
                <br />
            </div>
            <br /><br /><br />

            <span>
                <input
                    type="range"
                    className="rangeInput"
                    id="rangeInput"
                    min="0"
                    max="50000"
                    value={rangeValue}
                    step="50"
                    onInput={handleRangeChange}  
                />
            </span>

            <div className="extreme">
                <span id="zero"><b>Rs 0</b></span>
                <span id="max"><b>Rs 50,000</b></span>
            </div>
            <p id="Value"> Rs <span id="rangeValue">{rangeValue}</span></p>

            <br /><br /><br />
            <div className="button">
                <button onClick={goToFourPage} className="my-button">
                    SUBMIT
                </button>
            </div>
            <br /><br />

            <audio ref={bgAudio} src={backaudio} preload="auto"></audio>
            {/* <audio ref={clickSound} src={buttonClickSound} preload="auto"></audio> Click sound */}
        </div>
    );
};

export default Three;
