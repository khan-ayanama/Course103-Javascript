// same method in subclass
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating`;
  }

  isSuperCute() {
    return this.age <= 1;
  }

  isCute() {
    return true;
  }
}

// extends keyword add the properties of Animal into Dog classes, it becomes parent or base class for Dog which is sub class or derived class
// super Keyword: When we use super keyword we defines what property we want to send to parent class and what we want to use in the sub-class
// When we call any property JS will look first in sub-class and if it doesn't find the class in child class then it will see in parent class irrespective of presence of method in parent class.

class Dog extends Animal {
  constructor(name, age, speed) {
    super(name, age);
    this.speed = speed;
  }

  eat() {
    return `Modified Eat : ${this.name} is eating`;
  }

  run() {
    return `${this.name} is running at ${this.speed}kmph`;
  }
}
// object / instance
// const tommy = new Dog("tommy", 3,45);
// console.log(tommy.run());
// console.log(tommy.eat());

const animal1 = new Animal("sheru", 2);
console.log(animal1.eat());
