/*var drawBoard = (x, y, width, height) => {
    var box = document.querySelector('#board');

    box.width = 1920;
    box.height = 1080;
    if (box.getContext){
        drawBox = box.getContext('2d');

        return drawBox.strokeRect(x, y, width, height);

    }
}

var insideBoard = (x, y, width, height) => {
    var 
} 

drawBoard(650, 50, 500, 500)*/
var drawBoard = (rows, cols) => {
    box = document.querySelector("#board-div");
    box.style.setProperty('--linhas', rows);
    box.style.setProperty('--colunas', cols);
    for(let i = 0; i < (rows * cols); i++){
        let gameBoard = document.createElement('div');
        //gameBoard.setAttribute('id', 'game-board');
        box.appendChild(gameBoard).className = 'square-item ' + i;
    };
};

drawBoard(3,3);