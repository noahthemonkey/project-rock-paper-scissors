//----------------------------------------------------------------------------------------------
let playerScore = 0;
let computerScore = 0;

const scoreBoard = document.querySelector("#score");

const roundTracker = document.createElement("div");
roundTracker.setAttribute("id", "roundTracker");
roundTracker.classList.add("roundTracker");
roundTracker.textContent = "play!";

scoreBoard.appendChild(roundTracker);

const playerRounds = document.createElement("div");
playerRounds.setAttribute("id", "playerWon");
playerRounds.classList.add("playerWon");
playerRounds.textContent = "player: " + playerScore;

scoreBoard.appendChild(playerRounds);

const computerRounds = document.createElement("div");
computerRounds.setAttribute("id", "computerWon");
computerRounds.classList.add("computerWon");
computerRounds.textContent = "computer: " + computerScore;

scoreBoard.appendChild(computerRounds);

document.getElementById("rock").onclick = user;
document.getElementById("paper").onclick = user;
document.getElementById("scissors").onclick = user;

//----------------------------------------------------------------------------------------------

function user() {
  function restart() {
    if (playerScore == 5 || computerScore == 5) {
      playerScore = 0;
      computerScore = 0;
    }
  }
  restart();
  let playerChoice = this.id;
  console.log("user: " + playerChoice);

  function computerPlays() {
    let computerChoice = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[index];
  }
  function endGame() {
    if (playerScore == 5) {
      roundTracker.textContent = "YOU WON THE GAME!!!!";
    }
    if (computerScore == 5) {
      roundTracker.textContent = "The computer won the game, unlucky! :P";
    }
  }

  console.log(playRound(playerChoice, computerPlays()));
  endGame();

  // function endGame(){
  //     if (playerScore > computerScore) {
  //        console.log("you won the match!");
  //       }
  //       else if (computerScore > playerScore); {
  //           console.log("the computer won the match.");
  //       }
  //   }

  //  function game() {
  //      console.log(playRound());
  //      if(playerScore < 5 && computerScore < 5){
  //          game();
  //      }
  //      else {
  //          endGame();
  //      }
  //  }

  // game();

  const scoreBoard = document.querySelector("#score");
  playerRounds.textContent = "player: " + playerScore;
  scoreBoard.appendChild(playerRounds);
  computerRounds.textContent = "computer: " + computerScore;
  scoreBoard.appendChild(computerRounds);

  //---------------------------------------------------------------------------------------------
  function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
      let score = "tie! go again!";
      score += "\n";
      // score += "the score"
      score += "\n";
      // score += "your score: " + playerScore + " The computers score: " + computerScore
      roundTracker.textContent = score;
      return score;
    }

    if (playerSelection == "rock" && computerSelection == "paper") {
      computerScore++;
      let score = "You lose! paper beats rock!";
      score += "\n";
      // score += "the score"
      score += "\n";
      // score += "your score: " + playerScore + " The computers score: " + computerScore
      roundTracker.textContent = score;
      return score;
    }
    if (playerSelection == "rock" && computerSelection == "scissors") {
      playerScore++;
      let score = "You win! rock beats scissors!";
      score += "\n";
      // score += "the score"
      score += "\n";
      // score += "your score: " + playerScore + " The computers score: " + computerScore
      roundTracker.textContent = score;
      return score;
    }

    if (playerSelection == "paper" && computerSelection == "scissors") {
      computerScore++;
      let score = "You lose! scissors beats paper!";
      score += "\n";
      // score += "the score"
      score += "\n";
      // score += "your score: " + playerScore + " The computers score: " + computerScore
      roundTracker.textContent = score;
      return score;
    }
    if (playerSelection == "paper" && computerSelection == "rock") {
      playerScore++;
      let score = "You win! paper beats rock!";
      score += "\n";
      // score += "the score"
      score += "\n";
      // score += "your score: " + playerScore + " The computers score: " + computerScore
      roundTracker.textContent = score;
      return score;
    }

    if (playerSelection == "scissors" && computerSelection == "rock") {
      computerScore++;
      let score = "You lose! scissors beats rock!";
      score += "\n";
      // score += "the score"
      score += "\n";
      // score += "your score: " + playerScore + " The computers score: " + computerScore
      roundTracker.textContent = score;
      return score;
    }
    if (playerSelection == "scissors" && computerSelection == "paper") {
      playerScore++;
      let score = "You win! scissors beats paper!";
      score += "\n";
      // score += "the score"
      score += "\n";
      // score += "your score: " + playerScore + " The computers score: " + computerScore
      roundTracker.textContent = score;
      return score;
    }
  }
}
