// make promise

// note: IF we  get an  error 404; we  get it  as a response  not in reject



const promiseone = new Promise(function (resolve,reject){
    //Do an async task
    //DB calls,cryptography
    setTimeout(function(){
        console.log('Async taask is complete');
        resolve()                           // resolve will call the promise 
    },1000)
    
})
promiseone.then(function(){                 //then connects the resolve written in 2 line
    console.log('promise consumed');
})

new Promise(function (resolve,reject) {
    setTimeout(function(){
        console.log('async2');
        resolve()
    },1000)
}).then(function(){                     
    console.log('promise2');
})

const promise3 = new Promise(function (resolve,reject){
    setTimeout(function(){
        resolve({username: "komal",email:"komaldhiman773@gmail.com"
        })
    },1000)
})
promise3.then(function(user){
    console.log(user);
})



const promise4 = new Promise(function (resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "komal",email:"komaldhiman773@gmail.com"})
        }else{
            reject('ERROR: Something went WRONG!')
        }
    },1000)
    
})
promise4
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>{
    console.log("resolved");
})


const promise5 = new Promise(function(resolve,reject){       
    setTimeout(()=>{
        let error = true
        if  (!error){
            resolve({username:"JS",password:"12345"})
        }else{
            reject('ERROR: Something went WRONG!')
        }
    },1000)
})
async function consumePromiseFive(){
    try{                                            // use of try catch = then catch
    const response = await promise5
    console.log(response);
}catch(error){
    console.log(error);
}
}
consumePromiseFive()

//  FETCH====================================

fetch('https://jsonplaceholder.typicode.com/')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>
    console.log(error)
)