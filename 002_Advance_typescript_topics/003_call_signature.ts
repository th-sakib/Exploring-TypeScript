//* Sometimes the functions need extra properties which can't achieved using typescript. Thats why we need to use call signatures.

interface ICallSignatureFn {
  (arg: number): boolean;
  description: string;
}

const myFunc: ICallSignatureFn = (arg) => {
  return arg > 3;
};
myFunc.description = "lajsldjf";
