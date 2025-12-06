{
  function indentity(arg: any) {
    return arg;
  }

  const result1 = indentity("rendom string"); // the return value is type any
  const result2 = indentity(12); // the return value is type still any

  /**
   * * This identity function can take any type of argument and returns it.
   * * In this case as we don't have the information about `arg` parameter's type.
   * * That's why we will get **any** as return value of `identity` function.

   */
}
//* this is where we need generics
//* generics are like a variable (more precisely, type variable)
//* use <> braces to use generics
{
  function indentity<Type>(arg: Type): Type {
    return arg;
  }

  let result1 = indentity("string"); //* (string) returned variable's type
  result1.toUpperCase(); // ✅
  // result1.toFixed(); //! error because toFixed() is not string method
  let result2 = indentity(123); //* (number) returned variable's type
  let result3 = indentity(true); //* (boolean) returned variable's type
  /**
   * * So now we know the returned values type help of generics
   */
}

//* let's see arrays with **generic parameter**
{
  function arrayMaker<T>(arg: T[]): T[] {
    console.log(arg);

    return arg;
  }

  const result1 = arrayMaker([1, 2]); //* number[]
  const result2 = arrayMaker(["1", "2"]); //* string[]

  //* Same example with using Array type
  function arrayMaker2<T>(arg: Array<T>): Array<T> {
    console.log(arg);

    return arg;
  }

  const result3 = arrayMaker2([1, 2]); //* number[]
  const result4 = arrayMaker2(["1", "2"]); //* string[]
}
//* generic Arrays with aliases
{
  const numbers: Array<number> = [1, 2, 3, 4];
  const strings: Array<string> = ["a", "b", "c"];

  // * OR we can do
  type GenericArray<T> = Array<T>;

  const stringy: GenericArray<string> = ["a", "b", "c"];
  const numbery: GenericArray<number> = [1, 2, 3, 4];
}
//* tuples
{
  const coordinates: [number, number] = [1, 2];

  //* we can use generic parameter to make the tuple flexible
  type TCoordinates<X, Y> = [X, Y];

  //* Now we can use the alias with generic parameter to annotate tuples
  const coordinatesOfString: TCoordinates<string, string> = ["a", "b"];
  const coordinatesOfNumber: TCoordinates<number, number> = [1, 2];
  const coordinatesOfMixed: TCoordinates<number, string> = [1, "b"];
}
