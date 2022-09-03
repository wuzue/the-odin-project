const computerPlays = ['rock', 'paper', 'scissor'];
//const playerSelection = prompt('Enter a play: ');

function getComputerChoice(computerPlays){
    return computerPlays[Math.floor(Math.random()*3)];
}

const computerSelection = getComputerChoice(computerPlays);

console.log(computerSelection);