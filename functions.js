console.clear();
//function is used for reusability
//simple function.................................................
// function names() {
//   console.log("john");
//   console.log("eva");
//   console.log("adam");
// }
// names();
// names();

// here if we want some same values from  function but some is change so in this case we use parameters in functions
// function namesinfo() {
//   console.log("hello john");
//   console.log("john is 20 years old");
// }
// namesinfo();

// here if we want some same values from function but some is change so in this case we use parameters in functions
// function info(name, age) {
//   console.log("welcome " + name);
//   console.log(name + " is " + age + " years old");

//   //return name;
//   //return [name, age];
//   //checkingisvalid(name, age);
// }
// info("ali", 23);
// // info("turgut", 24);
// // info("aliyar", 26);

//advance functions......................................................
// function checkingisvalid(name, age) {
//   console.log("Hello ", name);
//   if (age > 18) {
//     return true;
//   } else {
//     return false;
//   }
// }
// //checkingisvalid("jhon", 17);
// if (checkingisvalid("jhon", 19)) {
//   console.log("Your are 18+");
// } else {
//   console.log("Your are underage");
// }

//more advance function with callings....................................
// function info(name, age) {
//   console.log("welcome " + name);
//   console.log(name + " is " + age + " years old");

//   checkingisvalid(name, age);
// }
// info("ali", 23);

// function checkingisvalid(name, age) {
//   console.log("Hello ", name);
//   if (age > 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// if (checkingisvalid()) {
//   console.log("Your are 18+");
// } else {
//   console.log("Your are underage");
// }

//another way of using return in function..................................................
// function info(name, age) {
//   console.log("welcome " + name);
//   console.log(name + " is " + age + " years old");

//   return {
//     name: name,
//     age: age,
//   };
// }

//pass by value......................................
// var username = "john";
// var username2 = username;
// var username = "saleem";
// console.log(username2);
// console.log(username);

//pass by reference..................................
// let username = {
//   name: "jamshed",
//   age: 23,
//   gender: "male",
// };
// let username2 = username;
// username.name = "adam";
// username2.age = 25;
// console.log(username2);
// console.log(username);

//changings in lists.................................
// let ages = [1, 2, 3, 4];
// let ages2 = ages;
// ages = [1, 3, 2];
// console.log(ages);
// console.log(ages2);

let ages = [1, 2, 3, 4];
let ages2 = ages;
ages2.push(22);
ages = [1, 3, 2];
console.log(ages);
console.log(ages2);
