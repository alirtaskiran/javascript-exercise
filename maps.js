let myMap = new Map();

console.log(typeof myMap);

const key1 = "Ali Rıza";
const key2 = {a:10, b:20};
const key3 = () => 2;

// SET
myMap.set(key1, "String Değer");
myMap.set(key2, "Object Literal Değer");
myMap.set(key3, "Function Değer");

console.log(myMap);


// GET

console.log(key1);
console.log(myMap.get(key1));

console.log(key2);
console.log(myMap.get(key2));

console.log(key3);
console.log(myMap.get(key3));