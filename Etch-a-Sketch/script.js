const container = document.querySelector('#container');

function doRow(rows, cols){
	container.style.setProperty('--linhas', rows);
	container.style.setProperty('--colunas', cols);
	for (let i = 0; i < (rows * cols); i++){
		let square = document.createElement('div');
		//square.addEventListener('click', () => square.style.backgroundColor = 'red');
		//square.innerText = i;
		container.appendChild(square).className = 'square-item ' + i;
		
	};
};

doRow(16,16);

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

const slider = document.querySelector('#slider')
const screenVal = document.querySelector('.setSliderValue');
slider.addEventListener('input', function(){
    let val = document.getElementById('slider').value;
	valuetwo = val
    screenVal.textContent = val + 'x' + valuetwo;
    removeAllChildNodes(container);
    container.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`);
    for (let i = 0; i < val*val; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'lime';
        })
        container.appendChild(div); 
    }
});


const reset = document.querySelector('#reset');
reset.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let eachBlock = container.children;
    for (let i = 0; i < val*val; i++) {
        eachBlock[i].style.backgroundColor = 'black';
    }
});
// const selectSquare = document.querySelector(".square-item");

// selectSquare.addEventListener('click', () => selectSquare.style.backgroundColor = 'red');