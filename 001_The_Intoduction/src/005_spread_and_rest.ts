//* spread operator
// Spread operator spreads the array.
// Spread operator works only for iterators.
const smallLaters = ["a", "b", "c"];
const capitalLaters = ["A", "B", "C"];

const allLaters = [];
allLaters.push(...smallLaters, ...capitalLaters);
console.log(allLaters);

//* rest parameter
// Here the alphabets collecting all arguments by using rest parameter
const abcdToABCD = (...alphabets: string[]) => {
  const uppercaseLater = alphabets.map((later) => {
    return later.toUpperCase();
  });

  console.log(uppercaseLater);
};
abcdToABCD("a", "b", "c", "d");
