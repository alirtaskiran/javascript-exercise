// class Person {
//     #password = "1234";

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     get getPassword() {
//         return this.#password;
//     }

//     set setPassword(password) {
//         this.#password = password;
//     }

// }

// const person1 = new Person("Ali", 25);

// console.log(person1.password);
// console.log(person1);
// console.log(person1.getPassword);

// console.log(person1.password);

// person1.setPassword = "5678";
// console.log(person1.password);
// console.log(person1.getPassword);

class Emplooye {
  //Private
  #salary = 30000;

  constructor(firstName, lastName, age, birthday, startYear, endYear, company) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.birthday = birthday;
    this.startYear = startYear;
    this.endYear = endYear;
    this.company = company;
  }

  getFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }

  getCompanyInfo() {
    console.log(
      `${this.firstName} is working at ${this.company}, he started in ${this.startYear}, he ended in ${this.endYear}`
    );
  }

  //Getter and Setter for salary
  get getSalary() {
    return this.#salary;
  }

  set setSalary(salary) {
    this.#salary = salary;
  }
}

class EmplooyeList {


  //Private
  #emplooyes;


  constructor() {
    this.#emplooyes = [];
  }

  addEmplooye(emplooye) {
    if (emplooye instanceof Emplooye) {
      this.#emplooyes.push(emplooye);
    } else {
      throw "You can only add Student object to the students array.";
    }
  }

  get getEmplooyes() {
    return this.#emplooyes;
  }
  
  set setEmplooyes(emplooyes) {
    this.#emplooyes = emplooyes;
  }

}

const emplooye1 = new Emplooye(
  "Ali Rıza",
  "Taşkıran",
  27,
  30000,
  "1997-12-05",
  2023,
  2024,
  "Turkish Technic in THY"
);

const emplooye2 = new Emplooye(
  "Ahmet",
  "Yılmaz",
  34,
  70000,
  "1990-04-12",
  2020,
  2023,
  "Amazon"
);


const emplooyeList = new EmplooyeList();

emplooyeList.addEmplooye(emplooye1);
emplooyeList.addEmplooye(emplooye2);

console.log(emplooyeList);

emplooye1.getFullName();
emplooye2.getFullName();

emplooye1.getCompanyInfo();
emplooye2.getCompanyInfo();

console.log(emplooyeList.getEmplooyes);

console.log(emplooyes); // not defined!
