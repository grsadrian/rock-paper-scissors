const menu = document.querySelector("#menu");

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

function getHumanChoice(event) {
  // Get a human choice and convert to a number
  let choice = event.target.classList[0];
  return choice;
}

menu.addEventListener("click", getHumanChoice);

function playRound(computerChoice, humanChoice) {
  // Transform the computer selection string to a number
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

  // Revert the human selection to a string
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

  // Compare the computer selection & human selection to determine a winner
  if (
    (computerChoiceNum == 1 && humanChoiceNum == 3) ||
    (computerChoiceNum == 2 && humanChoiceNum == 1) ||
    (computerChoiceNum == 3 && humanChoiceNum == 2)
  ) {
    console.log(`You lose ! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  } else if (computerChoiceNum == humanChoiceNum) {
    console.log("It's a tie");
  } else {
    console.log(`You Win ! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  }
}

// // Loop for a 5 times play
// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     const computerSelection = getComputerChoice();
//     const humanSelection = getHumanChoice();
//     playRound(computerSelection, humanSelection);
//   }
// }

// let humanScore = 0;
// let computerScore = 0;
// playGame();
// console.log(`Human Score: ${humanScore}`);
// console.log(`Computer Score: ${computerScore}`);
