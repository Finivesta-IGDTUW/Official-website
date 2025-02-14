import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import "../BudgetingGame/styleGame.css";
import buttonClickSound from "../BudgetingGame/BgameAudio/buttonclick.mp3";  
import backgroundSound from "../BudgetingGame/BgameAudio/backaudio.mp3"; 

const Eight = () => {
    const navigate = useNavigate(); 
    const clickSound = useRef(null); 
    const bgAudio = useRef(null); 

    const [sliderValue, setSliderValue] = useState(null);
    const [remainingValue, setRemainingValue] = useState(null);
    const [comparisonStatement, setComparisonStatement] = useState("");
    const [counter, setCounter] = useState(32850); 
    const [startCounter, setStartCounter] = useState(false); 

    useEffect(() => {
        const storedSliderValue = localStorage.getItem('value3');
        const storedRemainingValue = localStorage.getItem('result3');

        if (storedSliderValue && storedRemainingValue) {
            const remaining = parseInt(storedRemainingValue, 10);
            const slider = parseInt(storedSliderValue, 10);

            setSliderValue(slider);
            setRemainingValue(remaining);

            let comparisonText = "";
            if (remaining === 0) {
                comparisonText = "Bullseye! That's exactly what you thought.";
            } else if (remaining < 1000) {
                if (32850 > slider) {
                    comparisonText = `Nice job! That's only Rs ${remaining} more than you thought.`;
                } else if (32850 < slider) {
                    comparisonText = `Nice job! That's only Rs ${remaining} less than you thought.`;
                }
            } else {
                if (32850 > slider) {
                    comparisonText = `That's Rs ${remaining} more than you thought!`;
                } else if (32850 < slider) {
                    comparisonText = `That's Rs ${remaining} less than you thought!`;
                }
            }

            setComparisonStatement(comparisonText);
        }

        const timer = setTimeout(() => {
            setStartCounter(true); 
        }, 4000); 

        return () => clearTimeout(timer); 
    }, [sliderValue]);

    useEffect(() => {
        if (startCounter && sliderValue !== null) {
           
            setCounter(sliderValue);

            const counterInterval = setInterval(() => {
                setCounter(prevCounter => {
                    if (prevCounter < 32850) {
                       
                        return Math.min(prevCounter + 50, 32850);
                    } else if (prevCounter > 32850) {
                        
                        return Math.max(prevCounter - 50, 32850);
                    }
                    return prevCounter; 
                });
            }, 10); 

            return () => clearInterval(counterInterval);  
        }
    }, [startCounter, sliderValue]);

 
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

    const playClickSound = () => {
        if (clickSound.current) {
            clickSound.current.currentTime = 0; 
            clickSound.current.volume = 1  
            clickSound.current.play();
        } else {
            console.error("Audio element not found!");
        }
    };

    const goToNinePage = () => {
        playClickSound(); 
        navigate('/games/budgetinggame/nine.js'); 
    };

    return (
        <div className="BudgetingGame">
            <div className="upper">
                <h1 id="heading">THE BUDGETING GAME!</h1>
            </div><hr />

            <div className="main1">
                <p>
                    <span className="line">You guessed:<br />   
                        <span className="value"  style={{ color: "#73fd29" ,fontSize: "7vh" }}>{sliderValue !== null ? `Rs ${sliderValue}` : ''}</span>  
                    </span>

                    <span className="line"><br />An average meal consisting of a snack and a drink would cost Rs 90 a day.<br /></span>
                    <span className="line">If you bought one such meal a day for the whole year,<br />
                        it would cost <br/></span>
                    <span className="line" style={{ color: "#73fd29" ,fontSize: "7vh" }}>Rs {counter}<br/></span>

                    <span className="line" style={{fontSize: "4.3vh"}}>{comparisonStatement} <br /></span>
                </p>
            </div>
            <br />

            <div className="button">
                <button onClick={goToNinePage} className="my-button">NEXT</button>
                {/* <audio ref={clickSound} src={buttonClickSound} preload="auto"></audio> Audio element */}
            </div><br />
 
            <audio ref={bgAudio} src={backgroundSound} preload="auto" style={{ display: 'none' }}></audio>
        </div>
    );
};

export default Eight;
