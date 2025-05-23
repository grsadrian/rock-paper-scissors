let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choice = (Math.random() * 3).toFixed(0);
  if (choice <= 1) {
    return "Rock";
  } else if (choice == 2) {
    return "Paper";
  }
  return "Scissor";
}

function getHumanChoice() {
  let choice = prompt("rock, paper or scissor: ").toUpperCase();
  if (choice === "ROCK") {
    choice = 1;
    return choice;
  } else if (choice === "PAPER") {
    choice = 2;
    return choice;
  }
  choice = 3;
  return choice;
}

function playRound(computerChoice, humanChoice) {
  let computerWin = false;
  let humanWin = false;
  let computerSelection = 3;
  if (computerChoice === "Rock") {
    computerSelection = 1;
  } else if (computerChoice === "Paper") {
    computerSelection = 2;
  }

  if (
    (computerSelection == 1 && humanChoice == 3) ||
    (computerSelection == 2 && humanChoice == 1) ||
    (computerSelection == 3 && humanChoice == 2)
  ) {
    computerWin = true;
  } else if (computerSelection == humanChoice) {
    console.log("It's a tie");
  } else {
    humanWin = true;
  }
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();
playRound(computerSelection, humanSelection);
