function RockPaperScissors() {

  let choices = ["Rock", "Paper", "Scissors", "Pen"]; // The choices of the game
  let playerChoice = prompt("Choice: Rock, Paper, Scissors, Pen").toLowerCase(); //Takes the choice of the player.
  let machineChoice = choices[Math.floor(Math.random() * 4)]; // The computer choice randomly.

  //Output on html:
  document.getElementById("playerChoice").textContent = `You chose: ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`;
  document.getElementById("machineChoice").textContent = `The computer choice: ${machineChoice}`;

  //calculate our result:

  if (playerChoice === machineChoice.toLowerCase()) {
    document.getElementById("result").textContent = "Draw!\uD83E\uDD1D";
  } 
  
  else if (
    (playerChoice == "Rock" && machineChoice == "Scissors") ||
    (playerChoice == "Paper" && machineChoice == "Rock") ||
    (playerChoice == "Scissors" && machineChoice == "Paper") ||
    (playerChoice == "Rock" && machineChoice == "Pen") ||
    (playerChoice == "Scissors" && machineChoice == "Pen") ||
    (playerChoice == "Pen" && machineChoice == "Paper")
  ) {
    document.getElementById("result").textContent = "You Won! \u{1F389}";

  } else if (choices.includes(playerChoice.charAt(0).toUpperCase()+ playerChoice.slice(1))) {

    document.getElementById("result").textContent = "You Lost \u{1F622}";

  } 
  
  else {
    document.getElementById("result").textContent = "Not a such Option/Choice: \u274C";

  }
}
//Begins the game:
RockPaperScissors([]);
