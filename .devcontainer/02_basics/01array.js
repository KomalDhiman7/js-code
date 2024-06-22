//+++++++++++++Array++++++++++++++

const myArr = [0,1,2,3,4,5]
console.log(myArr[2]);

//+++++++Array_Methods++++++++++

myArr.push(8);   // add 8 at last of array
console.log(myArr);

myArr.unshift(9);    //add 9 at first of array
console.log(myArr);

myArr.shift()    // deletes first value in array
console.log(myArr);

console.log(myArr.includes(9));  // will tell whether 9 is in the array

const newArr = myArr.join()    //join converts everything in string.
console.log(myArr);
console.log(newArr);

//slice,splice

console.log("A",myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

