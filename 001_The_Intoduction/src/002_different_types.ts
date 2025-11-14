/*
 * Most basic types are called *primitives*
 ** There are several primitive types in Typescript.
 * 1. string, 2. number, 3. boolean, 4. bigint, 5. symbol
 * 6. undefined, 7. null 
 
 * Types can be **infered** or we can **declare them explicitly**.

 * There are some special types in typescript:
 * 1. any, 2. unknown, 3. never, 4. void, 5. nullable
 * 
 * */

//* Annotating fname variable as `string`
const fname: string = "Slim";

//* some example of basic types
const age: number = 40;
const isOld: boolean = true;
let mah: undefined = undefined;
let never: null = null;

const something: number | string = 2; // the pipe | is used to define a union type
