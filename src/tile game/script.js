const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
const endingScreen = document.getElementById("endingScreen");
const finalTime = document.getElementById("finalTime");
const finalMoves = document.getElementById("finalMoves");
const userRank = document.getElementById("userRank");
const leaderboard = document.getElementById("leaderboard");
const matchPopup = document.getElementById("matchPopup");
const playAgainButton = document.getElementById("playAgain");
const exitButton = document.getElementById("exit");

let cards;
let interval;
let firstCard = false;
let secondCard = false;
let seconds = 0,
    minutes = 0;
let movesCount = 0,
    winCount = 0;

const items = [
    { name: "USA", image: "usa.png", pairImage: "dollar.png" },
    { name: "Euro", image: "france.png", pairImage: "euro.png" },
    { name: "Turkey", image: "turkey.png", pairImage: "lira.png" },
    { name: "UK", image: "uk.png", pairImage: "pound.png" },
    { name: "India", image: "india.png", pairImage: "rupee.png" },
    { name: "Russia", image: "russia.png", pairImage: "ruble.png" },
    { name: "China", image: "china.png", pairImage: "yuan.png" },
    { name: "South Korea", image: "korea.png", pairImage: "won.png" },
];

const globalScores = [
    { name: "Player1", moves: 20, time: "02:30" },
    { name: "Player2", moves: 25, time: "03:00" },
    { name: "Player3", moves: 30, time: "03:15" },
    { name: "Player4", moves: 35, time: "03:45" },
    { name: "Your Name", moves: 10, time: "02:00" }, // Example user
];

const timeGenerator = () => {
    seconds += 1;
    if (seconds >= 60) {
        minutes += 1;
        seconds = 0;
    }
    let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
    let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
    timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
};

const movesCounter = () => {
    movesCount += 1;
    moves.innerHTML = `<span>Moves:</span>${movesCount}`;
};

const showMatchPopup = () => {
    matchPopup.classList.remove("hide");
    matchPopup.style.display = "block"; // Show popup
    setTimeout(() => {
        matchPopup.style.display = "none"; // Hide after 1 second
    }, 1000);
};

const displayEndingScreen = () => {
    finalTime.innerText = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    finalMoves.innerText = movesCount;
    userRank.innerText = movesCount; // Use movesCount as rank for demo
    leaderboard.innerHTML = '';

    // Sort global scores by moves
    globalScores.sort((a, b) => a.moves - b.moves);
    globalScores.forEach((player) => {
        const li = document.createElement('li');
        li.innerText = `${player.name}: Moves - ${player.moves}, Time - ${player.time}`;
        leaderboard.appendChild(li);
    });

    endingScreen.classList.remove("hide");
};

const hideEndingScreen = () => {
    endingScreen.classList.add("hide");
};

const generateRandom = (size = 4) => {
    let tempArray = [...items];
    let cardValues = [];
    size = (size * size) / 2;
    for (let i = 0; i < size; i++) {
        const randomIndex = Math.floor(Math.random() * tempArray.length);
        let selectedItem = tempArray[randomIndex];
        cardValues.push({ name: selectedItem.name, image: selectedItem.image, type: "country" });
        cardValues.push({ name: selectedItem.name, image: selectedItem.pairImage, type: "currency" });
        tempArray.splice(randomIndex, 1);
    }
    return cardValues;
};

const matrixGenerator = (cardValues, size = 4) => {
    gameContainer.innerHTML = "";
    cardValues.sort(() => Math.random() - 0.5);
    for (let i = 0; i < size * size; i++) {
        gameContainer.innerHTML += `
         <div class="card-container" data-card-value="${cardValues[i].name}" data-card-type="${cardValues[i].type}">
            <div class="card-before"></div>
            <div class="card-after">
            <img src="${cardValues[i].image}" class="image"/>
            </div>
         </div>
         `;
    }
    gameContainer.style.gridTemplateColumns = `repeat(${size}, auto)`;

    cards = document.querySelectorAll(".card-container");
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            if (!card.classList.contains("matched") && !card.classList.contains("flipped")) {
                card.classList.add("flipped");
                if (!firstCard) {
                    firstCard = card;
                } else {
                    movesCounter();
                    secondCard = card;
                    let firstCardValue = firstCard.getAttribute("data-card-value");
                    let secondCardValue = secondCard.getAttribute("data-card-value");
                    let firstCardType = firstCard.getAttribute("data-card-type");
                    let secondCardType = secondCard.getAttribute("data-card-type");
                    if (firstCardValue === secondCardValue && firstCardType !== secondCardType) {
                        firstCard.classList.add("matched");
                        secondCard.classList.add("matched");
                        showMatchPopup(); // Show popup for match
                        firstCard = false;
                        winCount += 1;
                        if (winCount === Math.floor(cardValues.length / 2)) {
                            displayEndingScreen();
                            stopGame();
                        }
                    } else {
                        let [tempFirst, tempSecond] = [firstCard, secondCard];
                        firstCard = false;
                        secondCard = false;
                        setTimeout(() => {
                            tempFirst.classList.remove("flipped");
                            tempSecond.classList.remove("flipped");
                        }, 900);
                    }
                }
            }
        });
    });
};

startButton.addEventListener("click", () => {
    movesCount = 0;
    seconds = 0;
    minutes = 0;

    controls.classList.add("hide");
    stopButton.classList.remove("hide");
    startButton.classList.add("hide");
    interval = setInterval(timeGenerator, 1000);
    moves.innerHTML = `<span>Moves:</span> ${movesCount}`;
    initializer();
});

stopButton.addEventListener("click", stopGame = () => {
    controls.classList.remove("hide");
    stopButton.classList.add("hide");
    startButton.classList.remove("hide");
    clearInterval(interval);
});

const initializer = () => {
    result.innerText = "";
    winCount = 0;
    let cardValues = generateRandom();
    matrixGenerator(cardValues);
};

playAgainButton.addEventListener("click", () => {
    hideEndingScreen();
    initializer();
});

exitButton.addEventListener("click", () => {
    window.close(); // Or redirect to a different page
});
