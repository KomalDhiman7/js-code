// Immediately Invoke Function Expressions (IIFE)

//n IIFE in JavaScript is a function that is executed immediately after it is defined. 
//It is a design pattern that provides a way to create a private scope to avoid polluting the global scope, often used to encapsulate code.

(function chai(){              // name iife
    console.log(`DB connected`);
})();
// first vala (func...) is for object declarion an dusra vala () is for execution 
(function chai(){
    console.log(`DB connected two`);
})();


// other method

((name) =>{                                          // name passed
    console.log(`DB CONNECTED 3 ${name}`);
}) ('Komal')
