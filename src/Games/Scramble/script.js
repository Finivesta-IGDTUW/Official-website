const words = [
    { word: "LOAN", hint: "Often used for things like buying a car, home, or funding education" },
    { word: "BANK", hint: "A place where people deposit their money" },
    { word: "CASH", hint: "Physical form of money" },
    { word: "STOCK", hint: "Represents a share in a company" },
    { word: "BUDGET", hint: "A plan for managing expenses" },
    { word: "INVEST", hint: "To put money into assets for future returns" },
    { word: "TAX", hint: "A mandatory contribution to the government" },
    { word: "SAVINGS", hint: "Money set aside for future use" },
    { word: "INTEREST", hint: "The cost of borrowing money" },
    { word: "INFLATION", hint: "The rise in general price levels" }
];

let currentWord = {};
let score = 0;
let timeElapsed = 0;
let timer;

// Function to shuffle the word
function shuffleWord(word) {
    let shuffled = word.split('').sort(() => 0.5 - Math.random()).join(' ');
    return shuffled;
}

// Start the game
function startGame() {
    // Hide landing page and show game container
    document.querySelector('.landing-page').style.display = 'none';
    document.querySelector('.game-container').style.display = 'block';

    // Set up new word and game state
    currentWord = words[Math.floor(Math.random() * words.length)];
    document.getElementById("scrambled-word").textContent = shuffleWord(currentWord.word);
    document.querySelector(".hint").textContent = `Hint: ${currentWord.hint}`;
    document.getElementById("answer").value = "";
    timeElapsed = 0;
    document.getElementById("timer").textContent = `${timeElapsed}s`;

    // Clear and restart the timer
    clearInterval(timer);
    timer = setInterval(() => {
        timeElapsed++;
        document.getElementById("timer").textContent = `${timeElapsed}s`;
    }, 1000);
}

// Show correct answer message
function showCorrectMessage() {
    const correctMessage = document.getElementById("correct-message");
    correctMessage.style.display = "flex";
    setTimeout(() => {
        correctMessage.style.display = "none";
    }, 2000);
}

// Show wrong answer message
function showWrongMessage() {
    const wrongMessage = document.getElementById("wrong-message");
    wrongMessage.style.display = "flex";
    setTimeout(() => {
        wrongMessage.style.display = "none";
    }, 2000);
}

// Check user's answer
document.getElementById("check").addEventListener("click", function () {
    const answer = document.getElementById("answer").value.toUpperCase();
    if (answer === currentWord.word) {
        score++;
        document.getElementById("score").textContent = score;
        showCorrectMessage();
        startGame();
    } else {
        document.getElementById("score").textContent = score;
        showWrongMessage();
        startGame();
    }
});

// Refresh the game with a new word
document.getElementById("refresh").addEventListener("click", function () {
    startGame();
});

// Start game when "Start Game" button is clicked
document.getElementById("start-game-btn").addEventListener("click", function () {
    startGame();
});

// Initially, show the landing page and hide the game
document.querySelector('.landing-page').style.display = 'block';
document.querySelector('.game-container').style.display = 'none';

