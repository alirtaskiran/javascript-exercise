// const students = [
//     {
//         fullName: "Berkay Turna",
//         age: 25,
//         isDeleted: false,
//         isActive: true,
//         courses: ["JavaScript", "React", "Node.js"],
//         instructors: [
//             { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
//             { fullName: "Hicran Ertugral", topics: ["TypeScript", "Angular"] },
//         ]
//     },
//     {
//         fullName: "Cenk Grid Kaynak",
//         age: 32,
//         isDeleted: false,
//         isActive: true,
//         courses: ["JavaScript", "React Native", ".Net Core"],
//         instructors: [
//             { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
//             { fullName: "Korhan Kosece", topics: [".Net Core"] },
//         ]
//     },
//     {
//         fullName: "Ali Riza Taskiran",
//         age: 24,
//         isDeleted: false,
//         isActive: true,
//         courses: ["Java", "Golang"],
//         instructors: [
//             { fullName: "Akin Kaldiroglu", topics: ["Spring", "C++"] },
//             { fullName: "Buse Seker", topics: ["Problem Solving"] },
//         ]
//     },
//     {
//         fullName: "Mert Kirant",
//         age: 32,
//         isDeleted: false,
//         isActive: true,
//         courses: ["Expressjs", "Node.js"],
//         instructors: [
//             { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
//             { fullName: "Onder Tarım", topics: ["React Native"] },
//         ]
//     },
//     {
//         fullName: "Firat Can Tas",
//         age: 26,
//         isDeleted: false,
//         isActive: false,
//         courses: ["Expressjs", "Node.js", ".Net Core"],
//         instructors: [
//             { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
//             { fullName: "Onder Tarım", topics: ["React Native"] },
//         ]
//     },
//     {
//         fullName: "Baris Peker",
//         age: 38,
//         isDeleted: true,
//         isActive: false,
//         courses: ["JavaScript", "HTNL"],
//         instructors: [
//             { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
//             { fullName: "Onder Tarım", topics: ["React Native"] },
//         ]
//     },
// ]

// // //forEach
// // const forEachResult = students.forEach(
// //     (student, index, arr) => {
// //         console.log(`${student.fullName}`);
// //         // console.log(arr);
// //         return student;
// //     }
// // );

// // console.log(forEachResult); /* undefined */

// // // map
// // const newStudents = students.map(
// //     student => {
// //        return student;
// //     }
// // )
// // students[0].fullName = "AHMET"
// // console.log(students[0].fullName);
// // console.log(students[0]);
// // console.log(newStudents);
// // console.log(newStudents.length);
// // console.log(students);

// //filter
// console.log(
//     students.filter(student => {
//         if (student.age < 30) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     })
// );
// console.log(
//     students.filter(student => student.age < 30)
// );

// console.log(
//     students.filter(student => !student.isDeleted && student.isActive)
// );

// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];

// const userNames = users.map((user) => user.name);

// userNames.forEach((name) => console.log(name));

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.forEach((number) => {
//     console.log(number);
//     });

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const evenNumbers = [];
//const evenNumbers2 = [];

// const evenNumbers = numbers.map((number) => {
//     return number * 10;
// });
// // evenNumbers = numbers.map( number => number * 10 );
// console.log('evenNumbers', evenNumbers);

/*
numbers.map((number) => {
    // if (number % 2 === 0) {
        evenNumbers.push(number);
    // }
});
console.log(evenNumbers);
*/

// const evenNumbers2 = numbers.filter((number) => {
//     return number % 2 === 0; // şart fonksiyon olarak gönderilir.
// });
//evenNumbers2 = numbers.filter(number => number % 2 === 0);

/*
numbers.filter((number) => {
    if (number % 2 === 0) {
        evenNumbers2.push(number);
    }
});
*/

// console.log('evenNumbers2', evenNumbers2);

// const evenNumbers3 = [];
// numbers.forEach((number) => {
//     evenNumbers3.push(number * 10);
// });

// console.log(evenNumbers3);

// var fruits = ['elma', 'armut', 'muz', 'çilekli'];
// fruits = fruits.sort((a,b) => {a.length - b.length});

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, -10];
// const hasNegative = numbers.some(function(number) {
//   return number < 0;
// });

// console.log(hasNegative); // true

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const findNumberIndex = numbers.findIndex(function(number) {
//   return number > 5;
// });

// console.log(findNumberIndex); // Output: 5

let aylikMaas = [
  24149, 24149, 24149, 24149, 23274, 22874, 23325, 23724, 23724, 21974, 21939,
  21939
];

let yillikMaas = aylikMaas.reduce(function (total, currentValue) {
  return total + currentValue;
}, 0);

console.log(yillikMaas);
