new Map([x])
// "x" represents iterable elements stored as key:value pairs
// When "x" is not specified, the Map starts out empty


const user = new Map([
  ['First Name', 'Divine'],
  ['Last Name', 'Orji'],
  ['Age', 24],
  [false, 'Dance'],
]);

console.log(user);

/*
Map(4) {
  'First Name' => 'Divine',       
  'Last Name' => 'Orji',
  'Age' => 24,
  false => 'Dance'
}
*/

// Map decalaration in javaScript
const obj1 = { name: 'ismail' };
const obj2 = { name: 'sulman' };
const obj3 = { name: 'naeem' };

firstMap = new Map([
    [
        [obj1, [{ date: 'yesterday', price: '10$' }]], // using object as a key in the map and object inside the array
        [obj2, [{ date: 'today', price: '100$' }]]
    ]
]);
firstMap.set(obj3, [{ date: "yesterday", price: '150$' }]); //pushing the obj to the Map

// iterating the Map
for (const entry of firstMap.entries()) {
    console.log(entry);
};

console.log(firstMap);

firstMap.delete(obj3);
console.log(firstMap);