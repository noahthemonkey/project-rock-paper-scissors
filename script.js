//Rock paper scissors. 
//1. We want to ask the player to pick rock, paper or scissor.
//2. We want the computer to select a randomized choice between rock, paper or scissors.
//3. We then want to compare the to, and decide which one wins.
//      -Rock wins over scissors
//      -Paper wins over rocks
//      -Scissors win over paper
//4.We then want to count up to 5 rounds, and keep track of who is winning. 


function computerPlay() {
    choices = ["rock", "paper", "scissors"]
    var ai = choices[Math.floor(Math.random() * choices.length)]
    return ai;
}