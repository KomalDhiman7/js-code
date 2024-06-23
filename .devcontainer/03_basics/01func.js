function sayMyName(){
    console.log("k");
    console.log("o");
    console.log("m");
    console.log("a");
    console.log("l");
}

sayMyName()

function addTwo(n1,n2){      //here n1and n2 are parameters
    console.log(n1+n2);
}
addTwo(7,6)      //here 7and 6 are arguments


//+++++++Another-Method++++++++++++

function addTwoN(num1,num2){
    let result = num1+num2
    return result     //returrn k bad vala likha kbhi print nhi hogaaaa
}
const result = addTwoN(9,10)
console.log("result: ", result);

 
//++++++++++loginmessage++++++++++
function loggin(username) {
    if (username===(undefined)){
        console.log("please enter username");
        return
    }
    
    return `${username} just loggedin`
}
console.log(loggin("Kom"))