const container = document.querySelector('#container');

function doRow(rows, cols){
	container.style.setProperty('--linhas', rows);
	container.style.setProperty('--colunas', cols);
	for (let i = 0; i < (rows * cols); i++){
		let square = document.createElement('div');
		square.innerText = "box " + (i + 1);
		container.appendChild(square).className = 'square-item';
	};
};

doRow(5,5);

const selectSquare = document.getElementsByClassName('square-item');

function sayHi(){
	alert("hi");
};

//selectSquare.addEventListener("click", sayHi);

const me = document.querySelector('#me');

me.addEventListener('click', sayHi);