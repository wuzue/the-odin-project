let showText = document.getElementById('calc-screen');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (event) =>{
        switch(event.target.innerText){
            case 'C':
                showText.innerText = '';
                break;
            case '←':
                if(showText.innerText){ showText.innerText = showText.innerText.slice(0, -1);}
                break;
            case '=':
                try{
                    showText.innerText = eval(showText.innerText);
                } catch {
                    showText.innerText = 'Error';
                }
                break
            default:
                showText.innerText = showText.innerText + event.target.innerText;
        }
    })
})