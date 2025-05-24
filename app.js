function getComputerChoice() {
  // Give a random choice for the computer and return a string
  const choice = (Math.random() * 3).toFixed(0);
  if (choice <= 1) {
    return "Rock";
  } else if (choice == 2) {
    return "Paper";
  }
  return "Scissor";
}

function getHumanChoice() {
  // Get a human string choice and convert to a number
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
  // Transform the computer selection string to a number
  let computerSelection = 3;
  if (computerChoice === "Rock") {
    computerSelection = 1;
  } else if (computerChoice === "Paper") {
    computerSelection = 2;
  }

  // Revert the human selection to a string
  let humanSelection = "Scissor";
  if (humanChoice === 1) {
    humanSelection = "Rock";
  } else if (humanChoice === 2) {
    humanSelection = "Paper";
  }

  // Compare the computer selection & human selection to determine a winner
  if (
    (computerSelection == 1 && humanChoice == 3) ||
    (computerSelection == 2 && humanChoice == 1) ||
    (computerSelection == 3 && humanChoice == 2)
  ) {
    console.log(`You lose ! ${computerChoice} beats ${humanSelection}`);
    computerScore++;
  } else if (computerSelection == humanChoice) {
    console.log("It's a tie");
  } else {
    console.log(`You Win ! ${humanSelection} beats ${computerChoice}`);
    humanScore++;
  }
}

// Loop for a 5 times play
function playGame() {
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    playRound(computerSelection, humanSelection);
  }
}

let humanScore = 0;
let computerScore = 0;
playGame();
console.log(`Human Score: ${humanScore}`);
console.log(`Computer Score: ${computerScore}`);
