class User{
    constructor(username,mail,pass){
        this.username=username
        this.mail=mail
        this.pass=pass
    }
}
class Teacher extends User{
    constructor(username,mail,pass){
        super(username)
        this.mail=mail
        this.pass=pass
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const p1=new User("Tanvi","techaer@.com","123")
p1.addCourse()