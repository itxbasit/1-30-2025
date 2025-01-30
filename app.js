// const firstClass = (param, param1) =>{
//     return param(), param1() // callback function
// }

// const passingFunc1 = () =>{
//     return 'First Class Function1'
// }

// const passingFunc = () =>{
//     return 'First Class Function'
// }

// console.log(firstClass(passingFunc, passingFunc1))

// pir^ , 2pir, 4/3pr^3
// const radius = [12, 34, 56];

// const areaOfCircle1 = (radius) => {
//     const output = []
//     for(let i=0; i<radius.length; i++){
//         output.push(Math.PI * radius[i] ** 2)
//     }
//     return output
// };

// const circumfernceOfCircle = (radius) => {
//     const output = []
//     for(let i=0; i<radius.length; i++){
//         output.push(Math.PI * radius[i] * 2)
//     }
//     return output
// };

// const volumeOfCircle = (radius) => {
//     const output = []
//     for(let i=0; i<radius.length; i++){
//         output.push((4/3)*(Math.PI * radius[i] ** 3))
//     }
//     return output
// };

// console.log(areaOfCircle1(radius))
// console.log(circumfernceOfCircle(radius))
// console.log(volumeOfCircle(radius))

const areaOfCircle = (radius, i, u, u1) => {
  console.log(Math.PI * radius ** 2, i, u, u1);
};

// const calculate = (arr, logic) => {
//   const output = [];
//   for (let i = 0; i < arr.length; i++) {
//     output.push(logic(arr[i])); // logic(34)
//   }
//   return output;
// };

// console.log(calculate(radius, areaOfCircle))

// const output = radius.map(areaOfCircle)

// console.log(output)

//function b(){
//     return 'ab'
// }
// const out = b()

// console.log(out)

// const radius = [12, 34, 56];

// const output = radius.map(areaOfCircle);

// console.log(output);

// if(true) console.log('ab') console.log('ac')
const people = [
  { firstname: "John", lastname: "Doe", age: 28 },
  { firstname: "Jane", lastname: "Smith", age: 34 },
  { firstname: "Michael", lastname: "Johnson", age: 45 },
  { firstname: "Emily", lastname: "Davis", age: 25 },
  { firstname: "Chris", lastname: "Martinez", age: 32 },
  { firstname: "Sarah", lastname: "Wilson", age: 40 },
  { firstname: "David", lastname: "Moore", age: 38 },
  { firstname: "Laura", lastname: "Taylor", age: 27 },
  { firstname: "James", lastname: "Anderson", age: 40 },
  { firstname: "Jessica", lastname: "Thomas", age: 29 },
  { firstname: "Matthew", lastname: "Jackson", age: 22 },
  { firstname: "Olivia", lastname: "White", age: 31 },
  { firstname: "Daniel", lastname: "Harris", age: 36 },
  { firstname: "Sophia", lastname: "Martin", age: 23 },
  { firstname: "Liam", lastname: "Lee", age: 37 },
  { firstname: "Isabella", lastname: "Clark", age: 26 },
  { firstname: "Ethan", lastname: "Lewis", age: 42 },
  { firstname: "Ava", lastname: "Walker", age: 33 },
  { firstname: "Benjamin", lastname: "Allen", age: 24 },
  { firstname: "Charlotte", lastname: "Young", age: 41 },
];

// const output = people.filter((v) => v.age < 40)

// console.log(people.map((v)=> v.age > 40 && `${v.firstname} ${v.lastname}`))

// const fullname = people.map((v) => `${v.firstname} ${v.lastname}`);

// console.log(fullname);

// console.log(people.filter((v) =>(v.age == 40)))


// const arrr = [2, 5, 6, 8, 10]
// let sum = 0
// for(let i=0; i<arrr.length; i++){
//   sum += arrr[i]
// }
// console.log(sum)

// const sum = arrr.reduce((acc, value) => {
//   return acc < value
// }, 0)

// console.log(sum)
