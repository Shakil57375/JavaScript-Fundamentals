//There are 2 main ways to create an Object in JavaScript

//The First Method:
let firstPlayer = new Object();

//You can add properties like this:
firstPlayer.name = 'Player 1';
firstPlayer.level = 3;
firstPlayer.inventory = ['a half-eaten cracker', 'some pocket lint', 'a flimsy tree branch'];
firstPlayer.description = 'Don\'t mention Player 2 around them, they\'ll get angry...';

//You can create methods like this:
firstPlayer.checkLevel = function() {
    console.log(`${this.name} is currently... Level ${this.level}!`);
    //The "this" keyword refers to the object
}

firstPlayer.checkLevel();
//This will print "Player 1 is currently... Level 3!" to the Console


//The Second Method:
let secondPlayer = {
    
    //You can add properties like this:
    name: 'Player 2',
    level: 20,
    inventory: ['a health potion', 'a sack of gold coins', 'a sturdy steel blade'],
    description: 'Better than Player 1 in every way possible.',
    
    //You can create methods like this:
    checkLevel: function() {
        console.log(`${this.name} is currently... Level ${this.level}!`);
        //The "this" keyword refers to the object
    }
}

secondPlayer.checkLevel();
//This will print "Player 2 is currently... Level 20!" to the Console

//And that's it! Decide what method you prefer and start making some Objects!