// QN 1

class variable{}
// QN 2

class vechile{
    constructor (name){
        this.name=name;

    }

}
// QN 3
   class Vehicle {
  constructor(name) {
    this.name = name;
  }

  drive() {
    console.log(this.name + " is driving");
  }
}
// QN 4
class bike extends vehicle{

}
// QN 5
class bike extends vehicle{
    drive(){
        console.log(this.name+"is riding");
    }
}
// QN 6
class student{
    constructor (name)
    {
        this.name=name;
    }
}
// QN 7
class student{
    constructor (name){
        this.name=name;
        this.marks=this.marks;
    }
}
// QN 8
class programmer extends students {

}
// QN 9
class Person {
    constructor(name, months) {
        this.name = name;
        this.months = months;
    }
}

class Programmer extends Person {
    constructor(name, months, language) {
        super(name, months);
        this.language = language;
    }

    showInfo() {
        console.log(`programmer (${this.name}, ${this.months}, ${this.language})`);
    }
}
// QN 10
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  drive() {
    console.log(${this.brand} car is moving);
  }
}

class Truck extends Vehicle {
  drive() {
    console.log(${this.brand} truck is moving);
  }
}

const car = new Vehicle("Lambo");
const truck = new Truck("Cybertruck");

car.drive();
truck.drive();
