//* ? - ternary operator
//* ?? - nullish coalescing operator : returns true only if the value is undefined / null
//* ?. - optional chaining

//* ? - ternary operator
const isAdult = (age: number): boolean => {
  return age >= 18 ? true : false;
};
console.log(isAdult(18));

//* ?? - nullish coalescing operator
const userTheme = null;
const selectTheme = userTheme ?? "light theme";
console.log(selectTheme);
