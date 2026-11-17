function getComputerChoice(){
    let numero = Math.random();
    if(numero < 0.33){
        return "rock";
    }
    else if(numero < 0.66){
        return "paper";
    }
    else{
        return "scissors";
    }
}
console.log(getComputerChoice());

function getHumanChoice(){

}