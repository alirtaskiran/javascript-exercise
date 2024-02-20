let myMap = new Map(); // => MAP OLUSTURMA

console.log(typeof myMap); // => OBJECT DONUYOR

const key1 = "Ali Rıza";    // KEYLER OLUSTURULDU
const key2 = { a: 10, b: 20 };
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

// LENGTH OGRENME
console.log(myMap.size);

// FOREACH ILE GEZINME

myMap.forEach(function (value, key) {
  console.log(key, value);
});

// FOR OF ILE GEZINME

for (let [key, value] of myMap) {
  // => DESTRUCTURING
  console.log(key, value);
}

// KEYLER UZERINDE GEZINME

for (let key of myMap.keys()) {
  console.log(key);
}

// VALUELAR UZERINDE GEZINME

for (let value of myMap.values()) {
  console.log(value);
}

// ARRAYDEN MAP OLUSTURMA

const array = [["Key1", "Value1"], ["Key2", "Value2"]]

let myArr = new Map(array);

console.log(myArr);