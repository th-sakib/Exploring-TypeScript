class Test {
  arg1: string;
  arg2: number;
  arg3: boolean;

  constructor(arg1: string, arg2: number, arg3: boolean) {
    this.arg1 = arg1;
    this.arg2 = arg2;
    this.arg3 = arg3;
  }

  printArgs() {
    console.log(this.arg1, this.arg2, this.arg3);
  }
}

const test = new Test("a", 1, true);
console.log(test);

//* Or we can use public keyword to make the constructor initialize itself
class Test2 {
  constructor(public arg1: string, public arg2: number, public arg3: boolean ) {}
}

const test2 = new Test2("b", 2, false);
console.log(test2);

