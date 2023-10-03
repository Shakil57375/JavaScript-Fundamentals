let jsonObj = {
    name: "Harry",
    channel: "CWH",
    friend: "Rohan Das",
    food: "Bhindi" //#bhindiLoverSquad
} 
console.log(jsonObj);
let myJsonStr = JSON.stringify(jsonObj);
console.log(myJsonStr);

myJsonStr = myJsonStr.replace('Harry', 'Larry');
console.log(myJsonStr)

jsonObj = JSON.parse(myJsonStr);
console.log(jsonObj)

// Storing data:
myObj = {name: "John", age: 31, city: "New York"};
myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
console.log(obj.name)