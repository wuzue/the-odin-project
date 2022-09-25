var drawBoard = (rows, cols) => {
    box = document.querySelector("#board-div");
    box.style.setProperty('--linhas', rows);
    box.style.setProperty('--colunas', cols);
    for(let i = 0; i < (rows * cols); i++){
        let gameBoard = document.createElement('div');
        //gameBoard.setAttribute('id', 'game-board');
        box.appendChild(gameBoard).className = 'square-item';
    };
};

drawBoard(3,3);

var square = document.querySelector('.square-item')
square.addEventListener('click', function(){
    console.log(this.square);
    console.log('oi');

})
console.log(square);