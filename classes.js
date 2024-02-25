class Person {

    #password = "1234";

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get getPassword() {
        return this.#password;
    }

    set setPassword(password) {
        this.#password = password;
    }

}

const person1 = new Person("Ali", 25);

console.log(person1.password);
console.log(person1);
console.log(person1.getPassword);

console.log(person1.password);

person1.setPassword = "5678";
console.log(person1.password);
console.log(person1.getPassword);
