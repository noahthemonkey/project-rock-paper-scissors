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

const playerSelection = prompt('Rock, Paper or Scissors?');
const computerSelection =computerPlays(choice);


function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        alert("it is a tie!");
    }

    else if(playerSelection == "rock" && computerSelection == "paper") {
        alert("you lose!")

    }
    else if(playerSelection == "rock" && computerSelection == "scissors") {
        alert("you win!")

    }
    

    else if(playerSelection == "paper" && computerSelection == "scissors") {
        alert("you lose!")

    }
    else if(playerSelection == "paper" && computerSelection == "rock") {
        alert("you win!")

    }


    else if(playerSelection == "scissors" && computerSelection == "rock") {
        alert("you lose!")

    }
    else if(playerSelection == "scissors" && computerSelection == "paper") {
        alert("you win!")

    }

}

playRound(playerSelection, computerSelection)