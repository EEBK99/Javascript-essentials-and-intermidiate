//variables

console.clear();

// Integers and Floats
// 123, 3.14

// In js "var" is used for any datatype
var number = 99;
var pi = 3.14;
console.log(number);
console.log(pi);
// adding to values
var numberpi = number + pi;
console.log(numberpi);

// Strings
var firstname = "Muahmmad Haseeb Farooq";
var lastname = "khan";
var fullname = firstname + " " + lastname;
console.log(firstname);
console.log(lastname);
console.log(fullname);

// Booleans
var isAuth = true;
console.log(isAuth);
isAuth = false; //when using "var", we can do changings in values once it assigned and this can be done only in "var"
console.log(isAuth);

// Null & Undefined
var username;
console.log(username); // its output will show undefined because its value is not defined
username = null;
console.log(username);

// typeof
var typeoffullname = typeof fullname;
console.log(typeof fullname);
console.log(typeof number);
console.log(typeof pi);
console.log(typeof numberpi);
console.log(typeof null); // type of null is object
console.log(typeof undefined);

number = null;
console.log(number);

// Function Scope => var
// Block Scope => const and let
// var value can be changed once assigned while in const value can not be changed once assigned

// var value can be changed
var n = 9;
console.log(n);
n = 8;
console.log(n);
// {
//   var n = 9;
// }
// console.log(n);

// const value cannot be changed once assigned and its scope is within block
const cty = 11;
console.log(cty);
cty = 12;
console.log(cty);
// {
//   const cty = 11;
// }
// console.log(cty);

// let value can be changed once assigned and its scope is within block
let valuel = 14;
console.log(valuel);
valuel = 15;
console.log(valuel);
// {
//   let valuel = 14;
// }
// console.log(valuel);
