let rounds = 6;
let playerGo;
let playerPoints = 0;
let computerPoints = 0;

//atribuindo valores numericos as palavras,
// rock = 1, paper = 2, scissor = 3

function computerPlay() {
    computerChoice = Math.floor(Math.random()*3) + 1;

    if (computerChoice === 1){
        computerChoice = 'rock';
    }
    if (computerChoice === 2){
        computerChoice = 'paper';
    }
    if (computerChoice === 3){
        computerChoice = 'scissor';
    }

    console.log(`Computer chooses: ${computerChoice}`);
}

//agora preciso fazer a vez do jogador jogar
/* preciso pegar a jogada do jogador, printar no console o que ele escolheu,
 e determinar qual jogada vence qual*/

function playRound(){
    playerGo = prompt("Insira sua jogada - 'rock', 'paper' or 'scissor': ");
    console.log(`Player chooses: ${playerGo}`);
    computerPlay();

    if(playerGo === "rock" && computerChoice === "rock"){
        console.log("Its a tie");
        playerPoints++;
        computerPoints++;
    }
    if(playerGo === "paper" && computerChoice === "paper"){
        console.log("Its a tie");
        playerPoints++;
        computerPoints++;
    }
    if(playerGo === "scissor" && computerChoice === "scissor"){
        console.log("Its a tie");
        playerPoints++;
        computerPoints++;
    }

    if(playerGo === "rock" && computerChoice === "paper"){
        console.log("Computer won!");
        computerPoints++;
    }
    if(playerGo === "rock" && computerChoice === "scissor"){
        console.log("Player won!");
        playerPoints++;
    }

    if(playerGo === "paper" && computerChoice === "scissor"){
        console.log("Computer won!");
        computerPoints++;
    }
    if(playerGo === "paper" && computerChoice === "rock"){
        console.log("Player won!");
        playerPoints++;
    }

    if(playerGo === "scissor" && computerChoice === "paper"){
        console.log("Player won!");
        playerPoints++;
    }
    if(playerGo === "scissor" && computerChoice === "rock"){
        console.log("Computer won!");
        computerPoints++;
    }
}

function game() {
    for(let i = 0; i < 6; i++){
        console.log(`Rounds left: ${rounds}`);
        rounds -= 1;
        playRound()
        if (rounds === 0) {
            console.log("Battle Finished!!\n");
            if (playerPoints > computerPoints){
                console.log(`Player won! ${playerPoints} points against ${computerPoints}`)
            } else if (playerPoints === computerPoints){
                console.log(`It was a draw! Player: ${playerPoints} points, and computer had ${computerPoints}`)
            } else {
                console.log(`Computer wins! ${computerPoints} points against ${playerPoints}`)
            }
        }
    }
}

game();