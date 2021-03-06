// #### 1. Concatenation. 
// * Create two variables. One variable should contain a string value and the other should contain a number.
//  Concatenate the string and the number.
// ```javascript
// let introSentence = "hello, my name is Fran and I am";
// let age = 25;
// ```
let introSentence = "hello, my name is Fran and I am ";
let age = 25;
console.log(introSentence + age);

// the `+` operator convert the number to string

// **Expected Output**: 
// ```javascript
// "hello, my name is Fran and I am 25"
// ```
// * In this case, what is the `+` operator doing? Comment your answer in the js file.

// #### 2. Converting 
// * Create a variable with the value of "1005". Convert it to a number.
// * Create a variable with the value of "10.05". Convert it to a number. 
const val1 = "1005";
console.log(parseInt(val1));
const val2 = "10.05";
console.log(parseFloat(val2));

