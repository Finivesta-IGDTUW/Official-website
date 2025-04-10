import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "../BudgetingGame/styleGame.css";
import buttonClickSound from "../BudgetingGame/BgameAudio/buttonclick.mp3";  
import backaudio from "../BudgetingGame/BgameAudio/backaudio.mp3";  // Import background audio

const Five = () => {

    const style = document.createElement('style');
    style.innerHTML = `
        .rangeInput::-webkit-slider-thumb {
            background-image: url('https://cdn-icons-png.freepik.com/256/3409/3409840.png?semt=ais_hybrid');
            background-size: cover;
        }
    `;
    document.head.appendChild(style);

    const navigate = useNavigate(); 
    const clickSound = useRef(null);
    const bgAudio = useRef(null);  // Reference for background audio

    const [sliderValue, setSliderValue] = useState(75000); 
    
    const handleSliderChange = (event) => {
        setSliderValue(event.target.value); 
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

    const goToSixPage = () => {
        playClickSound(); 
        const result = Math.abs(91250 - sliderValue); 
        localStorage.setItem('result2', result);
        localStorage.setItem('value2', sliderValue); 
        navigate('/games/budgetinggame/six'); 
    };

    // Play background audio when the component is mounted and stop it when the component unmounts
    useEffect(() => {
        if (bgAudio.current) {
            bgAudio.current.play();  // Start playing the background audio
            bgAudio.current.loop = true;  // Set it to loop indefinitely
        }

        // Cleanup the background music when the component unmounts
        return () => {
            if (bgAudio.current) {
                bgAudio.current.pause();  // Pause the background audio
                bgAudio.current.currentTime = 0;  // Reset it to the start
            }
        };
    }, []);  // This effect runs once when the component mounts

    return (
        <div className="BudgetingGame">
            <div className="upper">
                <h1 id="heading">THE BUDGETING GAME!</h1>
            </div>
            <hr />

            <div className="main1">
                <p>
                    <span className="line">How much do you think it would cost on average if you bought<br />
                        a fast food lunch every day for one year?</span>
                </p>
                <br />
                <br />
            </div>
            <br />
            <br />
            <br />
            <br />

            <input
                type="range"
                className="rangeInput"
                id="rangeInput"
                min="0"
                max="150000"
                value={sliderValue}
                step="250"
                onChange={handleSliderChange} 
            />
            <div className="extreme">
                <span id="zero"><b>Rs 0</b></span>
                <span id="max"><b>Rs 1,50,000</b></span>
            </div>
            <br />
            <p id="Value"> Rs <span>{sliderValue}</span></p> 

            <br />
            <div className="button">
                <button onClick={goToSixPage} className="my-button">SUBMIT</button>
                <audio ref={clickSound} src={buttonClickSound} preload="auto"></audio> 
            </div>
            <br />
            
            {/* Background Audio Element */}
            <audio ref={bgAudio} src={backaudio} preload="auto"></audio>
        </div>
    );
};

export default Five;
