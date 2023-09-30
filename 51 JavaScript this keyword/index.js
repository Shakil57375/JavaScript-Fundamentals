// there is four type of binding in javascript
// explicit binding
// new binding
// implicit binding
// window binding

/* let shakil = {
    name : "Shakil",
    age : 33,
    PrintMyName : function(){
        console.log(this.name)
    }
}

shakil.PrintMyName() */

var printPlayerNameFunction = function(obj){
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
tamim.printPlayerName()