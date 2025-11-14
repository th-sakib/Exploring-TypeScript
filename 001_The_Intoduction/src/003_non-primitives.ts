//* annotating an array as array of numbers
const arr: number[] = [1, 2, 3, 4];

//! const arr2: string[] = [1, 2]; // gives error because we are storing number in string annotated array.

const arr3 = ["string", 12, true]; // this is inferred as (string | number |  true)[]
const arr3WithExplicitType: (string | number | boolean)[] = ["asdf", 12, false];
//! arr3.push(null); // null is not assignable in a (string | number | boolean) array

//* * A tuple
//* A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.
const coordinates: [number, number] = [50, 80];

//* annotating an object
const person: {
  readonly organization: string; // literal type | value is the type
  firstname: string;
  middlename?: string; // optional type
  lastname: string;
  isMarried: boolean;
} = {
  organization: "Aftermath Entertainment",
  firstname: "Slim",
  lastname: "Shady",
  isMarried: true,
};

//* methods
const bankAccount: {
  name: string;
  balance: number;
  addBalance: (amount: number) => void;
} = {
  name: "slim shady",
  balance: 0,

  addBalance(amount) {
    this.balance += amount;
  },
};
const bankAccount2 = {
  name: "slim shady",
  balance: 0,

  addBalance(amount: number): void {
    this.balance += amount;
  },
};
