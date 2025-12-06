//* encapsulatoin means to bundling data into the class.
//* encapsulation hides the state of the class. like private and protected modifier hides the data that's what encapsulation is.
class Bank {
  readonly id: number; // Ther is public modifier if we don't use any modifiers
  public name: string;
  private balance: number; // Encapsulated data
  protected something: boolean;  // Encapsulated data

  constructor(id: number, name: string, balance: number, something: boolean) {
    this.id = id;
    this.name = name;
    this.balance = balance;
    this.something = something;
  }

  // setter
  set increaseBalance(amount: number) {
    this.balance += amount;
  }

  // getter
  get getBalance() {
    return this.balance;
  }
}

const bankAccount = new Bank(111, "shady", 0, true);
// bankAccount.increaseBalance(10); // if using methods and not setters
bankAccount.increaseBalance = 10; // if using setters

console.log("balance:", bankAccount.getBalance);
console.log(bankAccount);
