const user = {
    username: "Komal",
    price: 999,
     
    welcomeMessage : function () {
        console.log(`${this.username}  WElcome to my website`);

        
    }

}
user.welcomeMessage()
user.username ="juhi"
user.welcomeMessage()

function chai() {
    console.log(this);
    
}
chai()

//+++++Pure Arrow Function+++++

const addTwo = (num1, num2)  =>{
   return num1+num2
}
console.log(addTwo(3,4));

//+++++++++Implicit Return++++++++
const addTwo = (num1 , num2)=> (num1+num2)
console.log(addTwo(3,7));
