// function is also an object in js
// everything in js is object
//Every object in js has an in-built property, which is called it's prototype.The prototype itself is an object.
// prototype will have its prototype, which makes a chain.
//Chain ends when we reach the prototype which has a null value


function mulOf5(num) {
    return num*5
}
console.log(mulOf5(5));
console.log(mulOf5.prototype);    //{}



///////////////////////////////////////////

const User ={
    name :"KOmal",
    id: "komldhi55@gmail.com"
}

const teacher={
    makeVideo: true,
}
const teacherAbitlity={
    isAvailable: false
}

const TAsupport={
    makeAss : 'JS-Assign',
    fullTime: true,
    __proto__:teacherAbitlity
}
Object.setPrototypeOf(teacherAbitlity,teacher)



////// Injecting a new method  to find the true lengtth of the string

let userName= "Komal    "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is ${this.trim().length}`);   //this.trim().length trims the spaces
}

userName.trueLength()
"hirgjonheels".trueLength()


