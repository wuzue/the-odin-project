// var clickOne = document.getElementById('number-1').addEventListener('click', function(){
//     //alert("one");
//     var toText = document.getElementById('text-display').innerHTML = '1';

// })

// var clickTwo = document.getElementById('number-2').addEventListener('click', function(){
//     //alert("two");
//     var toText = document.getElementById('text-display').innerHTML = '2';

// })

// var clickThree = document.getElementById('number-3').addEventListener('click', function(){
//     //alert("three");
//     var toText = document.getElementById('text-display').innerHTML = '3';

// })

// var clickFour = document.getElementById('number-4').addEventListener('click', function(){
//     //alert("four");
//     var toText = document.getElementById('text-display').innerHTML = '4';

// })

// var clickFive = document.getElementById('number-5').addEventListener('click', function(){
//     //alert("five");
//     var toText = document.getElementById('text-display').innerHTML = '5';

// })

// var clickSix = document.getElementById('number-6').addEventListener('click', function(){
//     //alert("six");
//     var toText = document.getElementById('text-display').innerHTML = '6';

// })

// var clickSeven = document.getElementById('number-7').addEventListener('click', function(){
//     //alert("seven");
//     var toText = document.getElementById('text-display').appendChild('7');

// })

// var clickEight = document.getElementById('number-8').addEventListener('click', function(){
//     //alert("eight");
//     var toText = document.getElementById('text-display').innerHTML = '8';

// })

// var clickNine = document.getElementById('number-9').addEventListener('click', function(){
//     //alert("nine");
//     var toText = document.getElementById('text-display').innerHTML = '9';

// })

// var clickZero = document.getElementById('number-0').addEventListener('click', function(){
//     //alert("zero");
//     var toText = document.getElementById('text-display').innerHTML = '0';
// })

// var clickDel = document.getElementById('delete-button').addEventListener('click', function(){

// })

// NEW CODE

// SECOND CODE BELOW
/*
const calculatorScreen = document.getElementById('text-display');
const buttons = document.querySelectorAll('numbers');

buttons.forEach(btn => {
    btn.addEventListener('click', function(){
        showNumber(this.id);
    });
});

const showNumber = number => {
    const screenNumber = calculatorScreen.innerHTML;
    if (screenNumber.length < 15){// max numbers on screen
        calculatorScreen.innerHTML = parseInt(screenNumber + number).toString();
    } 
}

console.log(showNumber);
*/

let numbers = document.getElementsByClassName("number");
let showText = document.getElementById("text-display");

for (let i=0; i<numbers.length; i++) {
  numbers[i].addEventListener("click", function(){
    let buttonValue = this.textContent;
    if (buttonValue === "C") {
     showText.innerHTML = "";
    } else {
        var addNum = showText.innerHTML = (showText.innerHTML+buttonValue).substr(-9);
      if (showText.innerHTML.length == 9 && addNum){
        console.log("greater")
      }
    }
    // if(showText.innerHTML.length > 9){
    //     console.log('greater');
    // }
  });
}