let playerScoreNum = 0;
let computerScoreNum = 0;
let roundNum = 0;
let gameOver = false;

const playerOption = document.querySelectorAll(".option");
const gameResultOutput = document.querySelector(".gameResult");
const roundOutput = document.querySelector(".roundNum");
const computerScoreOutput = document.querySelector(".computerScoreNum");
const playerScoreOutput = document.querySelector(".playerScoreNum");
const playAgainButton = document.querySelector(".play-again");

const computerOptions = ["rock", "paper", "scissors"];

playAgainButton.addEventListener("click", reset);

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
    if (computerSelection === playerSelection) {
      roundNum++;
      roundOutput.textContent = roundNum;
      gameResultOutput.textContent = `You and computer both play ${playerSelection}... it's a draw`;
    } else if (
      (computerSelection === "rock" && playerSelection === "scissors") ||
      (computerSelection === "paper" && playerSelection === "rock") ||
      (computerSelection === "scissors" && playerSelection === "paper")
    ) {
      roundNum++;
      roundOutput.textContent = roundNum;
      computerScoreNum++;
      computerScoreOutput.textContent = computerScoreNum;
      gameResultOutput.textContent = `${computerSelection} beats ${playerSelection}... computer gets a point`;
    } else {
      roundNum++;
      roundOutput.textContent = roundNum;
      playerScoreNum++;
      playerScoreOutput.textContent = playerScoreNum;
      gameResultOutput.textContent = `${playerSelection} beats ${computerSelection}... you get a point!`;
    }
    checkFinalWinner();
  }

  function checkFinalWinner() {
    if (playerScoreNum === 3) {
      gameOver = true;
      console.log("game over");
      displayWinner("player");
      togglePlayAgain();
    } else if (computerScoreNum === 3) {
      console.log("game over");
      gameOver = true;
      displayWinner("computer");
      togglePlayAgain();
    }

    function displayWinner(winner) {
      if (winner === "player") {
        gameResultOutput.textContent = "You beat the computer 😄 Congrats!!!";
      } else {
        gameResultOutput.textContent =
          "You lost to the computer 😭 Better luck next time.";
      }
    }
  }
});

function togglePlayAgain() {
  playAgainButton.classList.toggle("play-again-visible");
}

function reset() {
  togglePlayAgain();
  gameOver = false;
  playerScoreNum = 0;
  computerScoreNum = 0;
  roundNum = 0;
  playerScoreOutput.textContent = 0;
  computerScoreOutput.textContent = 0;
  roundOutput.textContent = 0;
  gameResultOutput.textContent = "Play rock, paper, scissors best of 5";
}
