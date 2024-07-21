//ES6

class User {
    constructor (username,email,password){
        this.email= email
        this.username=username
        this.password=password
    }

    encryptPass(){
        return `${this.password }abc`
    }
}

const p1 = new User("Komak","komal@mail.com",1234)
console.log(p1.encryptPass());