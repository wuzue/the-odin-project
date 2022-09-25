var drawBoard = (rows, cols) => {
    box = document.querySelector("#board-div");
    box.style.setProperty('--linhas', rows);
    box.style.setProperty('--colunas', cols);
    for(let i = 0; i < (rows * cols); i++){
        gameBoard = document.createElement('div');
        //gameBoard.setAttribute('id', 'game-board');
        box.appendChild(gameBoard).className = 'square-item';
    };
};

drawBoard(3,3);

var square = document.getElementsByClassName('square-item')

for(let i = 0; i < square.length; i++){
    square[i].addEventListener('click', function(){
        this.classList.toggle(console.log('click @ ' + i));
    })
}