// there is four type of binding in javascript
// implicit binding
// explicit binding
// new binding
// window binding

/* let shakil = {
    name : "Shakil",
    age : 33,
    PrintMyName : function(){
        console.log(this.name)
    }
}

shakil.PrintMyName() */

/* var printPlayerNameFunction = function(obj){
    obj.printPlayerName = function(){
        console.log(this.name)
    }
}

var shakil = {
    name : "Shakil",
    age : 24
}

var tamim = {
    name : "Tamim",
    age : 24
}

printPlayerNameFunction(shakil)
printPlayerNameFunction(tamim)

shakil.printPlayerName()
tamim.printPlayerName() */

// implicit binding

/* var Person = function(name, age){
    return{
        name : name,
        age : age,
        printName : function(){
            console.log(this.name);
        }
    }
}

var sakib = Person("sakib", 35)
sakib.printName(); */

