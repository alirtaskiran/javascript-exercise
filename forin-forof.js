const person = {
    name: "Ali Rıza",
    age: 27,
    salary: 30000
}

const langs = ["Phyton", "Java", "C++", "PHP"]

const name = "Ali";

// FOR - IN

// Obje üstünde gezinme

// for(let prop in person){
//     console.log(prop, person[prop]);
// }

// Array üzerinde gezinme

// for(let prop in langs){
//     console.log(langs[prop]);
// }

// String üzerinde gezinme

// for(let index in name){
//     console.log(name[index]);
// }

// FOR - OF
// ITERABLE OLAN (SIRASIZ) İÇİN ÇALIŞMAZ

// for(let value of person){   // OBJE ÜSTÜNDE ÇALIŞMIYOR...
//     console.log(value);
// }

// for(let value of langs){
//     console.log(value);
// }

for(let value of name){
    console.log(value);
}