
let a = 300
if (true){
    let a = 70
    const b = 80
    var c = 50      // var value is printed outside the scope whereas let and const notttt thats why we avoid using var
    console.log("Inner: ", a);
}
// {} is scope with loops and functions (not in objects etc)

//{} l andr avli values are local scope whereas { } k bahar vali global 
console.log(a);



// in node the global scope is different from inspect global scope


function one (){
    const username = "komal"
    
    function two(){
        const website = "youtube"
        console.log(username);
    }
   // console.log(website);

    two()
}
one()


//+++++++++interesting ++++++++

function addone(num){
    return num+1
}
addone(6)

const addtwo = function(num){
    return num +2
}
addtwo(8)
