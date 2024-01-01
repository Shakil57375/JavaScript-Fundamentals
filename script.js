// Superclass
class Animal {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }
}

// Subclass
class Dog extends Animal {
    constructor(name, age, gender, breed) {
        // Call the constructor of the superclass (Animal)
        super(name, age, gender);

        // Initialize subclass-specific property 
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} is barking.`);
    }

    displayInfo() {
        console.log(`${this.name} is a ${this.age}-year-old ${this.gender} ${this.breed}.`);
    }
}

// Create instances
const myDog = new Dog('Buddy', 3, 'Male', 'Golden Retriever');
myDog.eat();         // Inherited from Animal
myDog.bark();        // Specific to Dog
myDog.displayInfo(); // Uses properties from both Animal and Dog
