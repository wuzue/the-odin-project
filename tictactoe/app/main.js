var drawBoard = (rows, cols) => {
    box = document.querySelector("#board-div");
    box.style.setProperty('--linhas', rows);
    box.style.setProperty('--colunas', cols);
    for(let i = 0; i < (rows * cols); i++){
        gameBoard = document.createElement('div');
        //gameBoard.setAttribute('id', 'game-board');
        box.appendChild(gameBoard).className = 'square-item';
        box.addEventListener('click',  clickGameBox);
    };
};

drawBoard(3,3);

square = document.getElementsByClassName('square-item')

let playerOne = 'X';
let playerTwo = 'O';
let turn = 0;
let lastClicked;

    
// TODO : ADICIONAR COR DIFERENTE PARA CADA JOGADA.
// E.G. : X = BLUE, O = YELLOW
function clickGameBox(e){
    var keys = square.innerHTML;
    if (turn === 0){
        e.target.innerText = playerOne;
        e.target.style.color = 'blue';
        lastClicked = playerOne;
    }else if(e.target.innerHTML != ""){//skip if square aint empty
        return;
    }else{
        if(lastClicked === playerOne){
            e.target.innerText = playerTwo;
            e.target.style.color = 'red';
            lastClicked = playerTwo;
        } else {
            //document.querySelector('.square-item').style.color = "red";
            e.target.innerText = playerOne;
            e.target.style.color = 'blue';
            lastClicked = playerOne;
        }
    }
    turn = turn + 1;
}