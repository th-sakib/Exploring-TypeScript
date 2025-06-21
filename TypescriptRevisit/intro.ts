// basic types
{
  // string
  let myName: string = "sakib";

  // number
  let height: number = 5.4;

  // boolean
  let isMarried: boolean = false;

  /*
  isMarried = "not married" // gives error: type 'string' is not assigned to the type 'boolean';

	**And this error will be compile time. Basically we can detect this errors while coding. So runtime errors will be less.**
*/

  // inference
  let city = "Rangpur";
  // city = 1 // error because of type inference. typescript infer type of the variable based on its value.

  // any type
  // let anyTyped: any = 12;
  // anyTyped();
  // anyTyped = "alsdjfl";

  // function paremeter
  function testing(a: number, b: number) {
    return a + b;
  }

  // void
  function printHello(name: string): void {
    console.log(name);
  }

  // never
  // A function that always throws an error
  function throwError(msg: string): never {
    throw new Error(msg);
  }
  // A function that has a infinite loop
  function infiniteLoop(): never {
    while (true) {}
  }
  // A variable that can never have a value except the 'thing' also type never.
  let x: never;
  x = infiniteLoop(); // no-error
  // x = 1; // error

  type Shape = "circle" | "square" | "triangle";
  function handleShape(shape: Shape) {
    switch (shape) {
      case "circle":
        break;
      case "square":
        break;
      default:
      // const _exhaustiveCheck: never = shape; // ❌ Error: Type 'triangle' is not assignable to type 'never'
    }
  }
}
// multi dimensional arrays
{
  const matrix: number[][] = [
    [1, 2],
    [3, 4],
  ];
  const threeDimension: number[][][] = [[[1, 2]]];
}
// Objects
{
  const obj: { name: string; age: number } = {
    name: "sakib",
    age: 20,
  };
}
//aliases
{
  type Person = {
    name: string;
    age: number;
  };

  const person: Person = {
    name: "sakib",
    age: 20,
  };

  function personFn(): Person {
    return { name: "sakib", age: 20 };
  }
}
// optional type
{
  type Person = {
    name: string;
    age: number;
    email?: string;
  };
  const person1 = {
    name: "meaw",
    age: 0,
    email: "meawmeaw@paw.com",
  };
  const person2 = {
    name: "meaw",
    age: 0,
  }; // email is optional
}
// intersection
{
  type Person = {
    name: string;
    age: number;
  };
  type Employee = {
    id: number;
    title: string;
  };

  type PersonAndEmployee = Person & Employee;
  const cristiano: PersonAndEmployee = {
    name: "CR7",
    age: 20,
    id: 20023234923742,
    title: "the goat",
  };
}
// Union & Literal type
{
  // Union type
  type Person = {
    name: string;
    age: number;
  };
  type Employee = {
    id: number;
    title: string;
  };
  const personOrEmployee: Person | Employee = {
    age: 20,
    name: "s",
    id: 9237932,
  };

  // literal type
  let isTrue: true;
  isTrue = true;
  // isTrue = false // error

  let color: "red" | "green" | "blue";
  color = "blue"; // perfectly fine
  // color = "yellow"; // type error

  let number: 1 | 2 | 3;
  number = 2;
  number = 1;
  number = 3;
  // number = 4; // error
}
// Tuple
{
  let myTuple: [string, number] = ["sakib", 20];
  console.log(myTuple);
}
