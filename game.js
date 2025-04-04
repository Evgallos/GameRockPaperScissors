//Rock Papers Scissors and Pena Game:

const choices = ["rock", "paper", "scissors", "pen" ];
const playerDisplay = document.getElementById("playerDisplay");
const machineDisplay= document.getElementById("machineDisplay");
const resultDisplay = document.getElementById("resultDisplay");

//Mechanism for Score Display: 
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const machineScoreDisplay = document.getElementById("machineScoreDisplay");

let playerScore = 0;
let machineScore = 0;

//Choice random 1 of the 4 choices: 
function playGame(playerChoice){

  const machineChoice = choices[Math.floor(Math.random()* 4)];
  let result = "";

  // Choice player and machine choice if statement & switch case:
  if(playerChoice === machineChoice){
    result = "It's a Draw!";
  }

  else{
    switch(playerChoice){
      case "rock":
        result = (machineChoice === "scissors" || machineChoice === "pen") ? "You Win!" : "You Lose!";
        break;
        case "paper":
        result = (machineChoice === "rock") ? "You Win!" : "You Lose!";
        break;
        case "scissors":
        result = (machineChoice === "paper" || machineChoice === "pen") ? "You Win!" : "You Lose!";
        break;
        case "pen":
        result = (machineChoice === "paper") ? "You Win!" : "You Lose!";
        break;
    }
  }

  // Display choices plaeyr and machine output result:
  playerDisplay.textContent = `Player: ${playerChoice}`;
  machineDisplay.textContent = `Machine: ${machineChoice}`;
  resultDisplay.textContent = result;

  // Remove green and red color from text when is draw keep it default white:
  resultDisplay.classList.remove("greenText", "redText");

  // Change to Green color text when win and to Red color: 
  switch(result){
    case "You Win!":
      resultDisplay.classList.add("greenText");
      // We add the increase player Score:
      playerScore++;
      // We update our score: 
      playerScoreDisplay.textContent = playerScore;
      break;
    case "You Lose!":
      resultDisplay.classList.add("redText");
      // We add the increase Machine - computer score:
      machineScore++;
      // We update the score of machine - computer: 
      machineScoreDisplay.textContent = machineScore;
      break;
  }
}