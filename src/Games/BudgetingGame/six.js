import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import "../BudgetingGame/styleGame.css";
import buttonClickSound from "../BudgetingGame/BgameAudio/buttonclick.mp3"; 
import backaudio from "../BudgetingGame/BgameAudio/backaudio.mp3";  

const Six = () => {
    const navigate = useNavigate(); 
    const clickSound = useRef(null); 
    const bgAudio = useRef(null);  

    const [sliderValue, setSliderValue] = useState(null);
    const [remainingValue, setRemainingValue] = useState(null);
    const [comparisonStatement, setComparisonStatement] = useState("");
    const [counter, setCounter] = useState(91250);
    const [startCounter, setStartCounter] = useState(false); 

    useEffect(() => {
        const storedSliderValue = localStorage.getItem('value2');
        const storedRemainingValue = localStorage.getItem('result2');

        if (storedSliderValue && storedRemainingValue) {
            const remaining = parseInt(storedRemainingValue, 10);
            const slider = parseInt(storedSliderValue, 10);

            setSliderValue(slider);
            setRemainingValue(remaining);

            let comparisonText = "";
            if (remaining === 0) {
                comparisonText = "Bullseye! That's exactly what you thought.";
            } else if (remaining < 1000) {
                if (91250 > slider) {
                    comparisonText = `Nice job! That's only Rs ${remaining} more than you thought.`;
                } else if (91250 < slider) {
                    comparisonText = `Nice job! That's only Rs ${remaining} less than you thought.`;
                }
            } else {
                if (91250 > slider) {
                    comparisonText = `That's Rs ${remaining} more than you thought!`;
                } else if (91250 < slider) {
                    comparisonText = `That's Rs ${remaining} less than you thought!`;
                }
            }

            setComparisonStatement(comparisonText);
        }

        const timer = setTimeout(() => {
            setStartCounter(true);
        }, 4000); // 

        return () => clearTimeout(timer); 
    }, [sliderValue]);

    useEffect(() => {
        if (startCounter && sliderValue !== null) {
           
            setCounter(sliderValue);

            const counterInterval = setInterval(() => {
                setCounter(prevCounter => {
                    if (prevCounter < 91250) {
                       
                        return Math.min(prevCounter + 50, 91250);
                    } else if (prevCounter > 91250) {
                    
                        return Math.max(prevCounter - 50, 91250);
                    }
                    return prevCounter; 
                });
            }, 10); 


            return () => clearInterval(counterInterval);  
        }
    }, [startCounter, sliderValue]); 

    const playClickSound = () => {
        if (clickSound.current) {
            clickSound.current.currentTime = 0; 
            clickSound.current.volume = 1;  
            clickSound.current.play(); 
        } else {
            console.error("Audio element not found!");
        }
    };

    const goToSevenPage = () => {
        playClickSound(); 
        navigate('/games/budgetinggame/seven'); 
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
                    <span className="line">You guessed :<br />
                        <big><big><span className="value"  style={{ color: "#73fd29" ,fontSize: "7vh" }}>{sliderValue !== null ? `Rs ${sliderValue}` : ''}</span></big></big>
                    </span>

                    <span className="line"><br />The average cost of eating out is Rs 250.<br /></span>
                    <span className="line">If you bought 365 meals, that would cost:<br /></span>
                    <span className="line" style={{ color: "#73fd29" ,fontSize: "7vh" }}>Rs {counter}<br/></span>    
                    <span className="line" id="final" style={{fontSize: "4.3vh"}}>{comparisonStatement}</span>
                </p>
            </div>
            <br /><br />

            <div className="button">
                <button onClick={goToSevenPage} className="my-button">NEXT</button> {/* NEXT button */}
            </div><br /><br />

            <audio ref={bgAudio} src={backaudio} preload="auto"></audio>
        </div>
    );
};

export default Six;
