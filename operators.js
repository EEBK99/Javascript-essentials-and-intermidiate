console.clear();

let num = 99;
let isAuth = false;

if (num == 90 && isAuth == true) {
  console.log("success");
} else {
  console.log("not success");
}

if (num != 90 || isAuth == true) {
  console.log("success");
} else {
  console.log("not success");
}

let number = 10;
if (!(number == 10 || isAuth == true)) {
  console.log("success");
} else {
  console.log("not success");
}
