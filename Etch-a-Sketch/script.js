const container = document.querySelector('#container');

function doRow(rows, cols){
	container.style.setProperty('--linhas', rows);
	container.style.setProperty('--colunas', cols);
	for (let i = 0; i < (rows * cols); i++){
		let square = document.createElement('div');
		square.addEventListener('click', () => square.style.backgroundColor = 'red');
		//square.innerText = i;
		container.appendChild(square).className = 'square-item ' + i;
		
	};
};

doRow(16,16);

// const selectSquare = document.querySelector(".square-item");

// selectSquare.addEventListener('click', () => selectSquare.style.backgroundColor = 'red');