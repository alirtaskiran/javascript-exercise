const person = {
  name: "John",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
    console.log(this);
  }
};

person.greet();
console.log(this);
