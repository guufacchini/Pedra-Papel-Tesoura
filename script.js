function getComputerChoice() {
    let numero = Math.random();
    if (numero < 0.33) {
        return "rock";
    }
    else if (numero < 0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
//console.log(getComputerChoice());

function getHumanChoice() {
    const escolha = prompt("Rock, paper or scissors");
    return escolha;
}
//console.log(getHumanChoice());


function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("It's a tie! Both chose " + humanChoice);
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(" You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    } else {
        console.log(" You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
}
    for(let i = 1; i<=5; i++){
        console.log("--- RODADA " + i + " ---");
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log(" Final score: You: " + humanScore + " x " + computerScore + " Computer");
    if(humanScore > computerScore){
        console.log("🎉 You won the game!");
    }
    else if(computerScore > humanScore){
        console.log("💻 The computer won the game!");
    }
    else{
        console.log("🤝 The game ended in a tie!");
    }
}

playGame();