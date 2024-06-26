const month = 3
switch (month) {
    case 1:
        console.log("wait twp month");
            break;
    case 2:
        console.log("wait one month");
            break;
    case 3:
        console.log("Happy B'day");
            break;
    default:   
        console.log("JA na bhut time hai abhi");
            break;
}

//++++++++++++++++falsy values+++++++++++++++
//false , 0, -0, BigInt 0n, "",null, undefined , NaN
//rest all are considered as true

// +++++++++++++++truthy values+++++++++++++
// true , "0" (0 in string), 'false' , " ", [], {}, function(){}




//++++++++++??(Nuulish Coalescing OPerator) :Null undefined

let val1 ;
val1=5??10
val2 = null??20

console.log(val1);
console.log(val2);


//++++++++++++++ternitary operator (?)+++++++++++++

const  iceteaprice = 100
iceteaprice <=80?console.log("less than 80") : console.log("more thn 80");
