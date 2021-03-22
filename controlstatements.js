// control statements
// Triple Equals => Type and Value
// Double Equals => Value

console.clear();

//if else
var equality = 1;
if (equality == 1) {
  console.log("Value is equal");
} else {
  console.log("Value is not equal");
}

if (1 == "1") {
  console.log("Value is equal");
} else {
  console.log("Value is not equal");
}

var isAuth = true;
if (isAuth === true) {
  console.log("User has been Authenticated");
} else {
  console.log("Unknown User");
}

var number = 50;

if (number > 80) {
  console.log("A+ Grade");
} else if (number > 70) {
  console.log("A Grade");
} else if (number >= 60) {
  console.log("B Grade");
} else if (number <= 59) {
  console.log("C Grade");
}

//switch
let number1 = "80abc";
switch (number1) {
  case "80":
    console.log("you have passed");
    break;
  default:
    console.log("you have not passed");
}
