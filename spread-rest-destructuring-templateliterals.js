const arr1 = ["Java", "C", "C#", "Phyton", "JavaScript"]

console.log(...arr1); // SPREAD

const arr2 = ["HTML", "CSS", "TypeScript", "Node.JS"]

const newArr = [...arr1, ...arr2]

console.log(newArr);




const [firstElement, secondElement, ...otherElements] = arr1; // REST

console.log(firstElement);
console.log(secondElement);
console.log(otherElements);


const myObject = {
    name: "Ali",
    age: 27,
    hobbies: ["Music", "Fishing", "Sports"]
}

console.log(myObject);

const {name:myName, age:myAge, hobbies:myHobbies} = myObject; // DESTRUCTURING

console.log(`Adım: ${myName} \n Yaşım: ${myAge} \n Hobilerim: ${myHobbies}`); // TEMPLATE LITERALS

