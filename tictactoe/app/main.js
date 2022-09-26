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

let playerOne = 'x';
let playerTwo = 'o';
let turn = 0;
let lastClicked;

/*for(let i = 0; i < square.length; i++){ THIS THING HERE IS WORKING, ITS
    square[i].addEventListener('click', function(){ GETTING THE CLICK IN EACH SQUARE
        this.classList.toggle(console.log('click @ ' + i + drawX)); IN THE BOX
    })
}*/


function clickGameBox(e){
    if (turn === 0){
        e.target.innerText = playerOne;
        lastClicked = playerOne;
    }else if(e.target.innerHTML != ""){
        return;
    }else{
        if(lastClicked === playerOne){
            e.target.innerText = playerTwo;
            lastClicked = playerTwo;
        } else {
            e.target.innerText = playerOne;
            lastClicked = playerOne;
        }
    }
    turn = turn + 1;
}

/*
function clickGameBox(){
    var whosTurn = true;
    function turn(id){
        var element = square;
        if(whosTurn){
            element.innerHTML = 'X';
        } else {
            element.innerHTML = 'O';
        }
        element.disabled = true;
        whosTurn = !whosTurn;
    }turn();
}
*/