const menu = document.querySelector("#menu");
const humanChoiceDisplay = document.querySelector("#human-choice");
const computerChoiceDisplay = document.querySelector("#computer-choice");
const resultDisplay = document.querySelector("#result");
const playButton = document.querySelector("button");
const gameDisplay = document.querySelector("main");
const pontuationScoreDisplay = document.querySelector("#pontuation");
const playerScoreDisplay = document.querySelector("#player-pontuation");
const computerScoreDisplay = document.querySelector("#computer-pontuation");
let humanScore = 0;
let computerScore = 0;
let roundsCount = 0;

function getComputerChoice() {
  // Give a random choice for the computer and return a string
  const choice = (Math.random() * 3).toFixed(0);
  if (choice <= 1) {
    return "rock";
  } else if (choice == 2) {
    return "paper";
  }
  return "scissor";
}

function playRound(computerChoice, humanChoice) {
  humanChoiceDisplay.innerText = `YOUR CHOICE: ${humanChoice}`;
  computerChoiceDisplay.innerText = `COMPUTER CHOICE: ${computerChoice}`;

  // Transform the computer choice string to a number
  let computerChoiceNum;
  switch (computerChoice) {
    case "rock":
      computerChoiceNum = 1;
      break;
    case "paper":
      computerChoiceNum = 2;
      break;
    default:
      computerChoiceNum = 3;
  }

  // Revert the human choice string to a number
  let humanChoiceNum;
  switch (humanChoice) {
    case "rock":
      humanChoiceNum = 1;
      break;
    case "paper":
      humanChoiceNum = 2;
      break;
    default:
      humanChoiceNum = 3;
  }

  // Compare the computer choice & human choice to determine a winner
  if (
    (computerChoiceNum == 1 && humanChoiceNum == 3) ||
    (computerChoiceNum == 2 && humanChoiceNum == 1) ||
    (computerChoiceNum == 3 && humanChoiceNum == 2)
  ) {
    resultDisplay.textContent = `You lose ! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  } else if (computerChoiceNum == humanChoiceNum) {
    resultDisplay.textContent = "It's a tie";
  } else {
    resultDisplay.textContent = `You Win ! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  }
}

function playGame(event) {
  roundsCount++;
  const computerSelection = getComputerChoice();
  const humanSelection = event.target.classList[0];
  playRound(computerSelection, humanSelection);
  playerScoreDisplay.innerText = humanScore;
  computerScoreDisplay.innerText = computerScore;
  if (roundsCount > 5) {
    alert("End of game");
    gameDisplay.style.display = "none";
    playButton.style.display = "block";
    resultDisplay.innerText = "";
    humanChoiceDisplay.innerText = "";
    computerChoiceDisplay.innerText = "";
    roundsCount = 0;
  }
}

playButton.addEventListener("click", () => {
  gameDisplay.style.display = "flex";
  pontuationScoreDisplay.style.display = "flex";
  playButton.style.display = "none";
  humanScore = 0;
  computerScore = 0;
  playerScoreDisplay.innerText = humanScore;
  computerScoreDisplay.innerText = computerScore;
});

menu.addEventListener("click", playGame);
