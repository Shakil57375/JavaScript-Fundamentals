class Car {
    constructor(brand){
        this.carName = brand;
    }
    present(){
        return "I have a "  + this.carName;
    }
}

class Model extends Car{
    constructor(brand, mod){
        super(brand);
        this.model = mod;
    }
    show(){
        return this.present() + ", it is a " + this.model;
    }
}

const myCar = new Model("Ford", "mustang")
console.log(myCar.show())


class myFather{
    constructor(name){
        this.fatherName = name;
    }
    fashion(){
        return "my father name is " + this.fatherName
    }
}

class myself extends myFather{
    constructor(name, age){
        super(name)
        this.age = age;
    }
    show(){
        return this.fashion() + " he is "  + this.age
    }
}

let Father = new myself("Alam", 33)
console.log(Father.show())