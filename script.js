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

function computerPlays() {
    let choice = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * choice.length);
    return choice[index];
}


function playRound() {
        let playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();
        let computerSelection =computerPlays();

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







function endGame(){
    if (playerScore > computerScore) {
        console.log("you won the match!");
    }
    else if (computerScore > playerScore); {
        console.log("the computer won the match.");
    }
}

function game() {
    console.log(playRound());
    if(playerScore < 5 && computerScore < 5){
        game();
    }
    else {
        endGame();
    }
}


game();

//        if (playRound(playerSelection, computerSelection) == "it is a tie!" 
  //           && playRound(playerSelection, computerSelection) == "you lose!" 
 //            && playRound(playerSelection, computerSelection) == "you win!") {  
//}