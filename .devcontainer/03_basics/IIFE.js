// Immediately Invoke Function Expressions (IIFE)

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
