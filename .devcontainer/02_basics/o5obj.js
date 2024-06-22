const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = Object.assign({}, obj1, obj2)   //adds 2 objects
// //{} is given in front so that all the others objects for eg: obj1 and obj2 will have one parent (or it synthesise '{}' as is parent )
console.log(obj3);

const obj3 = {...obj1,...obj2}
console.log(obj3); 

// +++++Object Destructing+++++++

const course = {
    instructor : "komal"
    available : "python", "java"
    price : "999"
}
const {instructor} = course
console.log(instructor);

  



