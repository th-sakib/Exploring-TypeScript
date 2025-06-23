// basic types
{
    // string
    var myName = "sakib";
    // number
    var height = 5.4;
    // boolean
    var isMarried = false;
    /*
    isMarried = "not married" // gives error: type 'string' is not assigned to the type 'boolean';
  
      **And this error will be compile time. Basically we can detect this errors while coding. So runtime errors will be less.**
  */
    // inference
    var city = "Rangpur";
    // city = 1 // error because of type inference. typescript infer type of the variable based on its value.
    // any type
    // let anyTyped: any = 12;
    // anyTyped();
    // anyTyped = "alsdjfl";
    // function paremeter
    function testing(a, b) {
        return a + b;
    }
    // void
    function printHello(name) {
        // console.log(name);
    }
    // never
    // A function that always throws an error
    function throwError(msg) {
        throw new Error(msg);
    }
    // A function that has a infinite loop
    function infiniteLoop() {
        // while (true) {}
    }
    // A variable that can never have a value except the 'thing' also type never.
    var x = void 0;
    x = infiniteLoop(); // no-error
    function handleShape(shape) {
        switch (shape) {
            case "circle":
                break;
            case "square":
                break;
            default:
            // const _exhaustiveCheck: never = shape; // ❌ Error: Type 'triangle' is not assignable to type 'never'
        }
    }
}
// multi dimensional arrays
{
    var matrix = [
        [1, 2],
        [3, 4],
    ];
    var threeDimension = [[[1, 2]]];
}
// Objects
{
    var obj = {
        name: "sakib",
        age: 20,
    };
}
//aliases
{
    var person = {
        name: "sakib",
        age: 20,
    };
    function personFn() {
        return { name: "sakib", age: 20 };
    }
}
// optional type
{
    var person1 = {
        name: "meaw",
        age: 0,
        email: "meawmeaw@paw.com",
    };
    var person2 = {
        name: "meaw",
        age: 0,
    }; // email is optional
}
// intersection
{
    var cristiano = {
        name: "CR7",
        age: 20,
        id: 20023234923742,
        title: "the goat",
    };
}
// Union & Literal type
{
    var personOrEmployee = {
        age: 20,
        name: "s",
        id: 9237932,
    };
    // literal type
    var isTrue = void 0;
    isTrue = true;
    // isTrue = false // error
    var color = void 0;
    color = "blue"; // perfectly fine
    // color = "yellow"; // type error
    var number = void 0;
    number = 2;
    number = 1;
    number = 3;
    // number = 4; // error
}
// Tuple
{
    var myTuple = ["sakib", 20];
    // console.log(myTuple);
}
// enum
{
    var Direction = void 0;
    (function (Direction) {
        Direction[Direction["Up"] = 0] = "Up";
        Direction[Direction["Down"] = 1] = "Down";
        Direction[Direction["Left"] = 2] = "Left";
        Direction[Direction["Right"] = 3] = "Right";
    })(Direction || (Direction = {}));
    console.log(Direction.Right);
}
