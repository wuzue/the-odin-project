const myArray = ["Ren", "Ner", "nRn"];

console.log(myArray);
console.log('live update');

const h = document.createElement('h1');
const t = document.createTextNode('teste');
h.appendChild(t);
document.body.appendChild(h);

export default myArray;