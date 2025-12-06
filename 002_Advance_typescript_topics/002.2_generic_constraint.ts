/*
 * * This is a generic function that works on a set of types.
 * * What if we want to use .lenth property on arg(argument).
 * * As the arg is generic type which can be anything, typescript won't allow this to happen.
 *
 * * That why we contrain "T" using "extend" keyword
 * */

// function logginIdentity<T>(arg: T): T {
//   arg.length; //! error because .length can't be used in type "T" which can be any type
//   return arg;
// }

interface ILengthWise {
  length: number;
}

function logginIdentity<T extends ILengthWise>(arg: T): T {
  arg.length; // ✔
  return arg;
}

//* After contraining it we can't just call it with any type argument. Now we have to call it with proper type which is ILengthWise interface wants
const identity1 = logginIdentity({
  length: 8,
  blah: "blah",
}); // ✔

// const identity2 = logginIdentity(3); //! error because the function need length property
const identity3 = logginIdentity([1, 2]); // ✔
console.log(identity3);

