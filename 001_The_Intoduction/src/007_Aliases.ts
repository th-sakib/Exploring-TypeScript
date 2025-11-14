// [interface vs alias](https://github.com/microsoft/TypeScript/wiki/Performance#preferring-interfaces-over-intersections)

// * Aliases means creating group of types that are resuable and and make code cleaner

type Car = {
  name: string;
  isExpensive: boolean | "super expensive";
};

const car1: Car = {
  name: "BMW",
  isExpensive: true,
};

const car2: Car = {
  name: "meaw",
  isExpensive: "super expensive",
};
console.log(car1, car2);

//* creating alias for function
type TFunc = (p1: string, p2: number) => void;

const myFunc: TFunc = (p1, p2) => {
  console.log("example function");
};
myFunc("sasdf", 234);

//* Extending alias with intersaction type operator
type Bus = Car & {
  bigBack: boolean;
};

const bus: Bus = {
  name: "asdf",
  isExpensive: true,
  bigBack: true,
};
console.log(bus);
