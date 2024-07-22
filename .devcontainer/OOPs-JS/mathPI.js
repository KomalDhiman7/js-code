// changing value of math.PI to 4

// Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descripter);

const myNewObj = Object.create(null)
const student ={
    name:"Komal",
    clas:"Btech",
    isAvlb:true
}
console.log(student);
// console.log(Object.getOwnPropertyDescriptor(student,"name"));
Object.defineProperty(student,"name",{  //distrupting values
    writable:false,
    enumerable:false
    })

console.log(Object.getOwnPropertyDescriptor(student,"name"));

for (let [key,value]of Object.entries(student)){ // object.entries : to make object iterable
    if (typeof value !== "function"){
        console.log(`${key}: ${value}`);
    }
}