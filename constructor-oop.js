function Employee (name, age, salary){
    this.name = name;
    this.age = age;
    this.salary = salary;

    this.showInfos = function(){
        console.log(this.name, this.age, this.salary);
    }
}

const employee1 = new Employee();
const employee2 = new Employee();

employee1.name = "Ali Rıza";
employee1.age = 27;
employee1.salary = 30000;

employee2.name = "Mahmut";
employee2.age = 50;
employee2.salary = 70000;

employee1.showInfos();
employee2.showInfos();

console.log(employee1);
console.log(employee2);