/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
 //var firstLetterToUpperCase = str.charAt(0).toUpperCase()
 //return firstLetterToUpperCase + str.slice(1)
var arrString = str.split("") 
arrString[0] = arrString[0].toUpperCase()
return arrString.join("")
}
//console.log("hola mundo".split(""));
/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
