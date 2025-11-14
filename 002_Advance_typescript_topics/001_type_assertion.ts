//* Type Assertion means to assume a variable's type
// This can be useful if any library doesn't typed a varible correctly

const var1: unknown = "abcd";
const size1 = (var1 as string).length; //* assuming var1 is string for better completion
console.log(size1); // ✅

const var2: unknown = 123;
const size2 = (var2 as string).length;
console.log(size2); // still returns undefined because number doesn't have length property

// (4 as string) //! gives error because typescript is smart enough to detect a number can't be a string without converting it.

//* type assertion with <>
const var3: any = "asdf";
const size3 = (<string>var3).length;

//* forcefull assertion
const var4: string = "lllkj";
//(var4 as number) //! Can't cast this string typed variable to number
(var4 as unknown as number).toFixed();
