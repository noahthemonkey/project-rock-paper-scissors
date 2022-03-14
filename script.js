//Rock paper scissors. 
//1. We want the computer to select a randomized choice between rock, paper or scissors.
//2. We want to ask the player to pick rock, paper or scissor.
//3. We then want to compare the two, and decide which one wins.
//      -Rock wins over scissors
//      -Paper wins over rocks
//      -Scissors win over paper
//4.We then want to count up to 5 rounds, and keep track of who is winning. 

var choice = ["rock", "paper", "scissors"];

function computerPlays(choice) {
    var index = Math.floor(Math.random() * choice.length);
    return choice[index];
}

const playerInput = prompt('Rock, Paper or Scissors?');
const playerSelection = playerInput.toLowerCase();
const computerSelection =computerPlays(choice);


function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return "it is a tie!";
    }

    else if(playerSelection == "rock" && computerSelection == "paper") {
        return "you lose!";

    }
    else if(playerSelection == "rock" && computerSelection == "scissors") {
        return "you win!";

    }
    

    else if(playerSelection == "paper" && computerSelection == "scissors") {
        return "you lose!";

    }
    else if(playerSelection == "paper" && computerSelection == "rock") {
        return "you win!";

    }


    else if(playerSelection == "scissors" && computerSelection == "rock") {
        return "you lose!";

    }
    else if(playerSelection == "scissors" && computerSelection == "paper") {
        return "you win!";

    }

}
const rounds = [];
let playerScore = 0;
let computerScore = 0;
    function game() {
        for (let i = 5; i > rounds.length; i--) {
            if ((playRound(playerSelection, computerSelection)) == "you win!") {
                rounds.push("you win!");
                playerScore++;
            }
            else ((playRound(playerSelection, computerSelection)) == "you lose!"); {
                rounds.push("you lose!");
                computerScore++;
            }
            
            
    }
}

      
console.log(playRound(playerSelection, computerSelection))


game()