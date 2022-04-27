//Rock paper scissors. 
//1. We want the computer to select a randomized choice between rock, paper or scissors.
//2. We want to ask the player to pick rock, paper or scissor.
//3. We then want to compare the two, and decide which one wins.
//      -Rock wins over scissors
//      -Paper wins over rocks
//      -Scissors win over paper
//4.We then want to count up to 5 rounds, and keep track of who is winning. 

let playerScore = 0;
let computerScore = 0;











// function endGame(){
//     if (playerScore > computerScore) {
//         console.log("you won the match!");
//     }
//     else if (computerScore > playerScore); {
//         console.log("the computer won the match.");
//     }
// }

// function game() {
//     console.log(playRound());
//     if(playerScore < 5 && computerScore < 5){
//         game();
//     }
//     else {
//         endGame();
//     }
// }


// game();

//----------------------------------------------------------------------------------------------



document.getElementById('rock').onclick = user;
document.getElementById('paper').onclick = user;
document.getElementById('scissors').onclick = user;

function user(){
    let playerChoice = this.id;
    console.log("user: "  + playerChoice)


    function computerPlays() {
        let computerChoice = ["rock", "paper", "scissors"];
        let index = Math.floor(Math.random() * computerChoice.length);
        return computerChoice[index];
    }

    console.log("computer: " + computerPlays())


   console.log(playRound(playerChoice, computerPlays()))

   const score = document.querySelector('#score');


const playerRounds = document.createElement('div');
playerRounds.setAttribute('id','playerWon');
playerRounds.classList.add('playerWon');
playerRounds.textContent = 'player: ' + playerScore;

score.appendChild(playerRounds);


const computerRounds = document.createElement('div');
computerRounds.setAttribute('id','computerWon');
computerRounds.classList.add('computerWon');
computerRounds.textContent = 'computer: ' + computerScore;

score.appendChild(computerRounds);


function playRound(playerSelection, computerSelection) {


//---------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------

    if(playerSelection == computerSelection) {
        let score = "tie! go again!";
        score += '\n'
        score += "the score"
        score += '\n'
        score += "your score: " + playerScore + " The computers score: " + computerScore
        return score;
        
    }

    if(playerSelection == "rock" && computerSelection == "paper") {
        computerScore++ 
        let score = "You lose! paper beats rock!";
        score += '\n'
        score += "the score"
        score += '\n'
        score += "your score: " + playerScore + " The computers score: " + computerScore
        return score;

    }
    if(playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++
        let score = "You win! rock beats scissors!";
        score += '\n'
        score += "the score"
        score += '\n'
        score += "your score: " + playerScore + " The computers score: " + computerScore
        return score;

    }
    

    if(playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++
        let score = "You lose! scissors beats paper!";
        score += '\n'
        score += "the score"
        score += '\n'
        score += "your score: " + playerScore + " The computers score: " + computerScore
        return score;

    }
    if(playerSelection == "paper" && computerSelection == "rock") {
        playerScore++ 
        let score = "You win! paper beats rock!";
        score += '\n'
        score += "the score"
        score += '\n'
        score += "your score: " + playerScore + " The computers score: " + computerScore
        return score;

    }


    if(playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++ 
        let score = "You lose! scissors beats rock!";
        score += '\n'
        score += "the score"
        score += '\n'
        score += "your score: " + playerScore + " The computers score: " + computerScore
        return score;

    }
    if(playerSelection == "scissors" && computerSelection == "paper"){
        playerScore++ 
        let score = "You win! scissors beats paper!";
        score += '\n'
        score += "the score"
        score += '\n'
        score += "your score: " + playerScore + " The computers score: " + computerScore
        return score;

        }
        
    }

}