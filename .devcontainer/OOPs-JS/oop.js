// this keyword is  used  for current  contextt
// const userOne ={
//     name: "KOmal",
//     loginCount: "8",
//     isLOggedIn: true,
// }

function User(username,loginCount,isLoggedIn){
    this.username  =  username;         // this  is used to differenciate btwn variables (username)
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting= function(){
        console.log(`Welcome ${this.username}`);
    }

    return this     // return is implicitally defined (byDEfault)
}
const userOne= new User("komal","8",true)    // if we doesn't wrote "new" keyword, then while printing userOne values, UserTwo values wwill also get overwrite.
const userTwo= new User("Sam","7",false)            // new generates a consstructor function
//console.log(userOne);
console.log(userTwo);
