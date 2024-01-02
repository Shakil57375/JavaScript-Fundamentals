const car = {
    name : "Fiat",
    model : 500,
    weight : "454kg",
    color : "white",
    start : function (){
        this.drive()
        console.log("car has started");
    },
    drive : function (){
        console.log("car is driving");
    }
}

console.log(car.color);
console.log(car["weight"]);

car.start();

const obj = {
    name : "shakil",
    age : 21
}

const {name: myName, age} = obj

console.log(myName, age)