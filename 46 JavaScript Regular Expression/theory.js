// what is a regular expression?
// A regular expression is a sequence of characters that forms a search pattern 
// When you search for data in a text, you can use this search pattern to describe what you are searching for
// A regular expression can be a single character or a more complicated pattern
// Regular expression can be used to perform all types  of text search and text replace operations.

//Declare Reg using slash
let reg = /abc/
//Declare using class, useful for buil a RegExp from a variable
reg = new RegExp('abc')

//Option you must know: i -> Not case sensitive, g -> match all the string
let str = 'Abc abc abc'
str.match(/abc/) //Array(1) ["abc"] match only the first and return
str.match(/abc/g) //Array(2) ["abc","abc"] match all
str.match(/abc/i) //Array(1) ["Abc"] not case sensitive
str.match(/abc/ig) //Array(3) ["Abc","abc","abc"]
//the equivalent with new RegExp is
str.match('abc', 'ig') //Array(3) ["Abc","abc","abc"]
function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}