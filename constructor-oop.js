// function Employee (name, age, salary){
//     this.name = name;
//     this.age = age;
//     this.salary = salary;

//     this.showInfos = function(){
//         console.log(this.name, this.age, this.salary);
//     }
// }

// const employee1 = new Employee();
// const employee2 = new Employee();

// employee1.name = "Ali Rıza";
// employee1.age = 27;
// employee1.salary = 30000;

// employee2.name = "Mahmut";
// employee2.age = 50;
// employee2.salary = 70000;

// employee1.showInfos();
// employee2.showInfos();

// console.log(employee1);
// console.log(employee2);
"use strict";
function Car(marka, model, yil, tip) {
  this.marka = marka;
  this.model = model;
  this.yil = yil;
  this.tip = tip;

  Object.seal(this);    // Yeni özellik eklemeyi engelledik.
}

// Car.prototype.getInfo = function () {
//     console.log(`Araba: ${this.marka} ${this.model} ${this.yil} ${this.tip}`);
//   };

const araba1 = new Car("BMW", "M5", 2015, "Sedan");
const araba2 = new Car("Audi", "Q7 ", 2016, "SUV");
const araba3 = new Car("Mercedes", "C180", 2017, "Sedan");
const araba4 = "BU BENİM 4. ARABAM";

const arabalar = [araba1, araba2, araba3, araba4];

console.log(araba1);
console.log(araba2);
console.log(araba3);
console.log(arabalar);

// araba1.ikinciMarka = "TOFAŞ";
// console.log(araba1);

const hizliArabalar = [];

const checkCar = function(car){
    if(car instanceof Car){
        hizliArabalar.push(car);
    }
};

checkCar(araba1);
checkCar(araba4);

console.log(hizliArabalar);

Car.prototype.getInfo = function () {
    console.log(`Araba: ${this.marka} ${this.model} ${this.yil} ${this.tip}`);
  };

araba1.getInfo();
