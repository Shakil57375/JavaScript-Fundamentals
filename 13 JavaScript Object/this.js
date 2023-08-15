const person = {
    firstName : "Shakil",
    lastName : "Hossain",
    id : 34,
    fullName : function(){
        this.profession()
        return this.firstName + " " + this.lastName 
    },
    profession : function(){
        console.log("Student");
    }
}

console.log(person.fullName());