//* union type
type UserRole = "admin" | "user";

const user = (role: UserRole) => {
  if (role === "admin") {
    console.log("hello admin");
  } else if (role === "user") {
    console.log("hello user");
  } else {
    console.log("breh who the hell are you");
  }
};

//* intersaction
type Employee = {
  name: string;
  salary: number;
};

type Manager = {
  teamSize: number;
};

type EmployeeManager = Employee & Manager; //* intersaction of Employee and Manager alias

const employeeManager: EmployeeManager = {
  name: "asldjf",
  salary: 3333333,
  teamSize: 298,
};

//* Another example
//* Object intersaction combines two types. In contrast, union intersactions make keep only the matched properties
type A = {
  a: string;
  b: string;
  c: number;
};

type C = A & {
  d: string;
};
/*
 * combines to:
 * {
     a: string,
     b: string,
     c: number,
     d: string
 * }
 * */

const c: C = {
  a: "",
  b: "",
  c: 12,
  d: "",
};

type B = keyof A & ("a" | "b");
//    keyof A will result: "a" | "b" | "c" | "d"
/*
 * the intersaction will be:
 {
   a: string,
   b: string,
 }
 * The "c" and "d" will be ignored
 * */

const b: B = "a"; // or "b"; the "c" can't be assigned in type B
