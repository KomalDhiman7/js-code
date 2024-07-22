class User{
    constructor(email,pass){
        this.email= email
        this.pass=pass
    }

    get pass(){
        return this._pass.toUpperCase()  //we use _email, bcz it will not give the output as email is 2 times defined}

    }
    set pass(value){
        this._pass = value
    }
}

const user1= new User("k@komal.ai","12345678")
console.log(user1.pass);