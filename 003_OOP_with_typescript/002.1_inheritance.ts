class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  printAge() {
    console.log(`${this.name} is ${this.age} years old`);
  }
  printName() {
    console.log(this.name);
  }
}

const person = new Person("Slim Shady", 40);

//* inheritence
class PersonWithProfession extends Person {
  profession: string;
  constructor(name: string, age: number, profession: string) {
    super(name, age);
    this.profession = profession;
  }

  printProfession() {
    console.log(`${this.name} is a ${this.profession}`);
  }
}

const personWithProfession = new PersonWithProfession(
  "Slim Shedy",
  40,
  "Rapper",
);

personWithProfession.printAge();
personWithProfession.printName();
personWithProfession.printProfession();

console.log(personWithProfession);
