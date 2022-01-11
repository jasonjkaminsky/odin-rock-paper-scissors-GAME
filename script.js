let playerScoreNum = 0;
let computerScoreNum = 0;
let roundNum = 0;
let gameOver = false;

const playerOption = document.querySelectorAll(".option");
const gameResultOutput = document.querySelector(".gameResult");
const roundOutput = document.querySelector(".roundNum");
const computerScoreOutput = document.querySelector(".computerScoreNum");
const playerScoreOutput = document.querySelector(".playerScoreNum");
const playerScoreNumColor = document.getElementById("playerScoreNum");
const computerScoreNumColor = document.getElementById("computerScoreNum");
const rematchButton = document.querySelector(".rematch");
const newHandButton = document.querySelector(".newHandButton");
const options = document.querySelector(".options");
const contest = document.querySelector(".contest");

const computerOptions = ["rock", "paper", "scissors"];

rematchButton.addEventListener("click", reset);

playerOption.forEach((option) => {
    option.addEventListener("click", (e) => {
        e.target.alt;

        if (gameOver) return;

        function getComputerSelection() {
            return computerOptions[Math.floor(Math.random() * 3)];
        }
        let computerSelection = getComputerSelection();
        playGame(e.target.alt, computerSelection);
    });

    function playGame(playerSelection, computerSelection) {
        options.style.display = "none";
        if (computerSelection === playerSelection) {
            roundNum++;
            roundOutput.textContent = roundNum;
            playerScoreNumColor.style.color = "white";
            computerScoreNumColor.style.color = "white";
            gameResultOutput.textContent = `you and computer both play ${playerSelection}... it's a draw`;
        } else if (
            (computerSelection === "rock" && playerSelection === "scissors") ||
            (computerSelection === "paper" && playerSelection === "rock") ||
            (computerSelection === "scissors" && playerSelection === "paper")
        ) {
            roundNum++;
            roundOutput.textContent = roundNum;
            computerScoreNum++;
            computerScoreOutput.textContent = computerScoreNum;
            playerScoreNumColor.style.color = "white";
            computerScoreNumColor.style.color = "yellow";
            gameResultOutput.textContent = `${computerSelection} beats ${playerSelection}... COMPUTER gets a point`;
        } else {
            roundNum++;
            roundOutput.textContent = roundNum;
            playerScoreNum++;
            playerScoreOutput.textContent = playerScoreNum;
            playerScoreNumColor.style.color = "yellow";
            computerScoreNumColor.style.color = "white";
            gameResultOutput.textContent = `${playerSelection} beats ${computerSelection}... YOU get a point!`;
        }
        ///// Set the user pick /////
        document.getElementById("playerSelectionImage").src =
            handOptions[playerSelection];

        document.getElementById("computerSelectionImage").src =
            handOptions[computerSelection];

        ///// display the contest div /////
        contest.style.display = "flex";
        contest.style.justifyContent = "center";

        checkFinalWinner();
    }

    function checkFinalWinner() {
        if (playerScoreNum === 3) {
            gameOver = true;
            console.log("game over");
            displayWinner("player");
            newHandButton.style.display = "none";
            toggleRematch();
        } else if (computerScoreNum === 3) {
            console.log("game over");
            gameOver = true;
            displayWinner("computer");
            newHandButton.style.display = "none";
            toggleRematch();
        }

        function displayWinner(winner) {
            if (winner === "player") {
                gameResultOutput.textContent =
                    "You beat the computer 😄 Congrats!!!";
                playerScoreNumColor.style.color = "red";
            } else {
                gameResultOutput.textContent =
                    "You lost to the computer 😭 Better luck next time.";
                computerScoreNumColor.style.color = "red";
            }
        }
    }

    const handOptions = {
        rock: "/images/rock.png",
        paper: "/images/paper.png",
        scissors: "/images/scissors.png",
    };

    const newHand = () => {
        options.style.display = "flex";
        contest.style.display = "none";
    };

    newHandButton.addEventListener("click", newHand);
});

function toggleRematch() {
    rematchButton.classList.toggle("rematch-visible");
}

function reset() {
    toggleRematch();
    gameOver = false;
    playerScoreNum = 0;
    computerScoreNum = 0;
    roundNum = 0;
    playerScoreOutput.textContent = 0;
    computerScoreOutput.textContent = 0;
    roundOutput.textContent = 0;
    playerScoreNumColor.style.color = "white";
    computerScoreNumColor.style.color = "white";
    options.style.display = "flex";
    contest.style.display = "none";
    newHandButton.style.display = "flex";
    gameResultOutput.textContent = "First to three points wins!";
}
