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
playerPlays = prompt('Rock, Paper or Scissors?');
    



function play(result){
   if (playerPlays == computerPlays(choice)){
    
    winner = "tie!";
    }
    
    //player picks rock
    if (playerPlays == "rock" && computerPlays(choice) == "paper") {
        winner = "computer won!";
    }

    if (playerPlays == "rock" && computerPlays(choice) == "scissors") {
        winner = "you won!";
    }


    //player picks paper
    if (playerPlays == "paper" && computerPlays(choice) == "scissors") {
        winner = "computer won!";
    }

    if (playerPlays == "paper" && computerPlays(choice) == "rock") {
        winner = "you won!";
    }



    //player picks scissors
    if (playerPlays == "scissors" && computerPlays(choice) == "rock") {
        winner = "computer won!";
    }

    if (playerPlays == "scissors" && computerPlays(choice) == "paper") {
        winner = "you won!";
    }
    
    return result;
}