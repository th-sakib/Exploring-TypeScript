//* type guard with typeof
type Alphanumeric = string | number;

const add = (arg1: Alphanumeric, arg2: Alphanumeric) => {
  if (typeof arg1 === "number" && typeof arg2 === "number") {
    return arg1 + arg2;
  } else {
    return arg1.toString() + arg2.toString();
  }
};

console.log(add("1", 2));
console.log(add(1, 2));
console.log(add(1, "2"));

//* type guard with "in"
type User = {
  name: string;
};

type SpecialUser = {
  name: string;
  role: "Admin";
};

function getUser(user: User | SpecialUser) {
  if ("role" in user) {
    console.log(`${user.name} is ${user.role}`);
  } else {
    console.log(user.name);
  }
}

getUser({ name: "Slim Shady" }); // logs: Slim Shady
getUser({ name: "Slim Shady", role: "Admin" }); // logs: Slim Shady is Admin

//* type guard with "instance of"
class Animal {
  constructor(public name: string) {}
}
class Fish extends Animal {
  constructor(name: string) {
    super(name);
  }

  swim() {
    console.log(this.name + "is swim");
  }
}

class Bird extends Animal {
  constructor(name: string) {
    super(name);
  }

  fly() {
    console.log(this.name + "is flying");
  }
}

const canFly = (animal: Animal) => animal instanceof Bird; // return true if animal is instance of Bird
const canSwim = (animal: Animal) => animal instanceof Fish; // return true if animal is instance of Fish

function makeAMove(animal: Bird | Fish) {
  if (animal instanceof Bird) {
    animal.fly();
  } else {
    animal.swim();
  }
}
