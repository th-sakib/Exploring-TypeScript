//* normal function
function artist(name: string, age: number): void {
  console.log(name, age);
}

artist("slim shady", 40);

//* arrow function
const artistInfo = (
  name: string,
  age: number
): { fullname: string; birthYear: number } => {
  const today = new Date().getFullYear();
  const birthYear = today - age;

  return {
    fullname: name,
    birthYear,
  };
};
