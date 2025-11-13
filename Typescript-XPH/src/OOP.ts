{
  class Car {
    public name: string; // because this properties are publicly available so we put "public" keyword // its optional it assigned by default
    year: number;
    private _price: number; // a private member of a class can be accessible from the class (use methods to manipulate it but u can't assign outside the class) // the underscore (_) is just a convention to assign a private member

    // protected _price : number // this protected members can be modified in child classes. but public can't be modified without the the exact class

    constructor(name: string, year: number, price: number) {
      (this.name = name), (this.year = year), (this._price = price);
    }

    getPrice() {
      return this._price;
    }

    makeSound() {
      return `${this.name} make "bhroom! bhroom!" sound`;
    }
  }

  const car1 = new Car("Ford", 2025, 6999);
  // @strictPropertyInitialization: true
  class Orbit {
    // name: string // it gives error because strict propety initialization is set to true by default in tsconfig.json
  }

  class Orbit2 {
    // name: string;
    // motion: string

    // Because public is already the default visibility modifier, you don’t ever need to write it on a class member, but might choose to do so for style/readability reasons.

    constructor(public name: string, public motion: string) {
      // if used public inside the constructor no need to initialize them the ts will automatically initialize and assign them
      // this.name = name,
      // this.motion = motion
    }
  }

  const orbitTest = new Orbit2("Earth", "Circular");

  orbitTest.name;

  // static member
  class MyClass {
    static x = 0;
    static printX() {
      console.log(MyClass.x);
    }
  }
  console.log(MyClass.x);
  MyClass.printX();
}

// explore about  polymorphism and encapsulations and abstraction
