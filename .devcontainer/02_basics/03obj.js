// singleton
//object literals

const JsUser = Symbol("key1")    // chnging datatype

const JsUser = {
    name: "Kom",
    email: "komaldhimann77@.com",
    age : 21,
    location: "jaipur",
    [mySym]: "mykey1",   //declaring chnaged datatype

}

console.log(JsUser[mySym]);        
console.log(JsUser);   //every obj

  

Object.freeze(JsUser);    //freezes the object and any diff will not propagate