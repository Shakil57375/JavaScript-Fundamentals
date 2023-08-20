const person = {
    firstName : "Shakil",
    lastName: "Hossain",
    id : 323,
    fullName : function () {
        return this.firstName + " " + this.lastName
    }
}

// console.log(person.fullName());

const player = function (name, age){
    return {
        name : name,
        age : age,
        printName : function () {
            console.log(this.name);
        },
        father : {
            name : "mr xx",
            printName : function () {
                console.log(this.name);
            }
        }
    }
}

var shakib = player('shakib', 35);
shakib.printName();
shakib.father.printName();