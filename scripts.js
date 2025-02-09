import {data} from '../data/review.js'
console.log(review);

const myTarget = document.querySelector('#cards');

for (let x = 0; x < review.length; x++) {
let barDiv = document.createElement{'div'}
barDiv.innerHTML = `<p>${review[x].name} </p>`;


myTarget.appendChild(barDiv);
}// end of loop
