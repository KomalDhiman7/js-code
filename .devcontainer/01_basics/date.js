// Date is object

let myDate= new Date()
console.log( myDate);
console.log(myDate.toDateString());

let myCreateDate = new Date(2023, 0, 23)   //month start with 0 in js.
console.log(myCreateDate.toDateString()); 

let myTime= Date.now()
console.log(myTime);
console.log(myCreateDate.getTime());

console.log(Date.now());
console.log(Math.round(Date.now()/1000));

myDate.toLocaleString('default',{
    weekday:"long"
})