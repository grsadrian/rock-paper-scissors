let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choice = (Math.random() * 3).toFixed(0);
  if (choice === 1) {
    return "rock";
  } else if (choice === 2) {
    return "paper";
  }
  return "scissor";
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

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

function playRound(humanChoice, computerChoice) {}
