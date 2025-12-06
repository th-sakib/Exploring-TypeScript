//* "keyof" type operator
//* this operator is used to extract keys from an object type
//* if keyof is used in an object type it makes union type with the keys

type Vehicles = {
  car: string;
  bike: string;
  ship: string;
};

type EachVehicle = "car" | "bike" | "ship";
type EachVehicleWithKeyOf = keyof Vehicles;

const eachVehicle: EachVehicleWithKeyOf = "car"; // or "bike" or "ship"

//* constriant generic type with keyof

interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "slim",
  age: 3333,
};

const printPersonProperties = (obj: Person, key: keyof Person): void => {
  console.log(`${key}: ${obj[key]}`);
};

printPersonProperties(person, "name");
printPersonProperties(person, "age");

//* making this function generic for every object
//* type of an object key could be (string | number | symbol).
//* in the example below I intersacted (string | number) so that the symbol type keys are ignored.
const genericPrintObjProperties = <T>(obj: T, key: keyof T & (string | number)): void => {
  console.log(`${key}: ${obj[key]}`);
};

//* Now we can use this function with any object
const student = {
  id: 101,
  name: "student_name",
};

genericPrintObjProperties(student, "id"); // works for student
genericPrintObjProperties(person, "name"); // works for person object as well
