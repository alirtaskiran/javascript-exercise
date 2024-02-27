// başka bir fonksiyona argüman olarak atanabilen fonksiyonlara denir.

// function logConsole(value) {
//   console.log(value);
// }

// function warnConsole(value) {
//   console.warn(value);
// }

// function add(num1, num2) {
//   return num1 + num2;
// }

// function substract(num1, num2) {
//   return num1 - num2;
// }

// function multiply(num1, num2) {
//   return num1 * num2;
// }

// function divide(num1, num2) {
//   return num1 / num2;
// }

// function calculator(num1, num2, calculate, callback) {
//   const result = calculate(num1, num2);
//   callback(result);
// }

// calculator(15, 3, add, logConsole);
// calculator(15, 3, add, warnConsole);
// calculator(25, 5, divide, logConsole);
// calculator(25, 5, divide, warnConsole);

const array = [1, 2, -3, 4, 5, -6, 7, -8, -9, 10];

// function getNums(arr, callback) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i])) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// function getNegativeNums(element) {
//   if (element < 0 && element % 2) {
//     return true;
//   }
// }

// function getPositiveNums(element) {
//   if (element >= 0 && !(element % 2)) {
//     return true;
//   }
// }

// console.log(getNums(array, getPositiveNums));

const newPositiveArr = [];
const newNegativeArr = [];

array.forEach((element) => {
    if (element > 0) {
        newPositiveArr.push(element);
    }
});

console.log(newPositiveArr);

array.forEach((element) => {
    if (element < 0) {
        newNegativeArr.push(element);
    }
}
);

console.log(newNegativeArr);

// array.map((element) => {
//   if (element > 0) {
//     newNewNewArr.push(element);
//   }
// });