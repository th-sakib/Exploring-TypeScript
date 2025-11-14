# Annotation

- Annotations are used to specify the data type of a variable, parameter, function return value and other types of values.
- Annotation help developers catch errors **early in development** by allowing them to specify what type of values can assigned to a given variable or passed as an argument to a function.

---

### Example

```ts
// let myVar: type = value;
let age: number = 20;
let name: string = "john doe";
let isMarried: boolean = false;
let arr: number[] = [1, 2, 3, 4, 5];

name = "doe john"; // no error
name = 12; // error: type number is not assignable to type string
/*
	And this error will be compile time. Basically we can detect this errors while coding. So runtime errors will be less.
*/
```

---

# Type inference

- Type inference is a feature in typescript that allows the compiler to _autometically_ determine the type of a variable based on its value.
- In other words, If you don't explicitly specify type of a variable typescript will try to **infer** type of the variable based on its value.

### Example

```ts
let city = "Rangpur";
city = 1;
```

`city = 1` throws an error because of type inference. Typescript _infer_ type of the variable based on its value.

---

# `any` type

`any` type represent any type in typescript. When a variable is annotated with the any type, Typescript will disable type checking and allow that variable to have any value.

- Using any in certain situation can be useful, but `any` should be used sparingly. Overusing any can lead to _untyped_ code and we'll not get any type checking error in typescript.

```ts
const container: any = "any variable";
container = 1;
container();
// no type error in compile time.
```

---

# `void` type

Void is a type that represent _absence_ of any value.

```ts
function printHello(name: string): void {
  console.log(name);
}
```

---

# `never` type

Never keyword is used indicate that a function will _never_ returns anything, or a variable that never can have a value.

- A function that always throws an error.
- A function that has an infinite loop.
- A variable that can never have a value.

```ts
// never
// A function that always throws an error
function throwError(msg: string): never {
  throw new Error(msg);
}
// A function that has a infinite loop
function infiniteLoop(): never {
  while (true) {}
}
// A variable that can never have a value
let x: never;
x = 1; // error
x = infiniteLoop(); // no error
```

---

# `arrays` type

2 way to type arrays

1. use [] bracket notation.
2. use the generic `Array<type>` notation.

```ts
const arr: number[] = [1, 2, 2, 3];
const arr2: Array<number> = [1, 2, 3, 4, 5];
```

// Feel free to correct me if I am wrong with any information
