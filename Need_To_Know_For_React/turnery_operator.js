//Simple example:
let num1 = 1;
let num2 = 2;
num1 < num2 ? console.log("True") : console.log("False");
// => "True"

//Reverse it with greater than ( > ):
num1 > num2 ? console.log("True") : console.log("False");
// => "False"
let isWeekend = false;
let timeOfDay = 'Morning';
let number = 42;
let classification = (number > 0) ? 'Positive' : (number < 0) ? 'Negative' : 'Zero';
console.log(classification); // Output: 'Positive'

/* let result = (condition1) ? 'Value for condition1' :
             (condition2) ? 'Value for condition2' :
             (condition3) ? 'Value for condition3' :
             'Default value';

console.log(result);
 */

let activity = isWeekend
  ? (timeOfDay === 'Morning' ? 'Relaxing at home' : 'Going out with friends')
  : (timeOfDay === 'Morning' ? 'Heading to work' : 'Working on projects');

console.log(activity);
