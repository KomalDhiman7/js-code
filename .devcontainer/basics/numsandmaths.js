const score = 400
console.log(score);

const balance = new Number(2900)
console.log(balance);

console.log(balance.toString());

console.log(balance.toString().length);

console.log(balance.toFixed(2));

const otherNumber = 23.8989

console.log(otherNumber.toPrecision(4));

const  hunderds = 100000
console.log(hunderds.toLocaleString('en-IN'));

//++++++++++++++++++MATHS++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); //gives +ve value
console.log(Math.round(4.9));
console.log(Math.ceil(4.9)); //round ka method
console.log(Math.floor(4.2)); //round ka method

console.log((Math.random()*100)+20);

const min = 10
const max = 20
console.log(Math.random()*(max-min+1));
console.log(Math.floor(Math.random()*(max-min+1))+min);






