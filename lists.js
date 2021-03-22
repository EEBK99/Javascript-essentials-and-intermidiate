console.clear();

// arrays = lists
var marks = [70, 50, 80, 60];
marks[1] = 55;
console.log(marks[1]);

var names = ["A", "B", "c", "d"];
console.log(names);

var mixArr = ["a", 1, true, 2.6];
console.log(mixArr[3]);

for (let i = 0; i <= mixArr.length; i++) {
  console.log(mixArr[i]);
}

// list with key and value
let info = {
  name: "ali",
  age: 23,
  gender: "Male",
};
console.log(info);
console.log(info.gender);
console.log(info.name, info.age);

let name = info.name;
let age = info.age;
console.log(name, age);
