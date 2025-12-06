//* in classes we can use access modiers or property visibility using:
// 1. public, 2. private, 3. protected
class Bank {
  readonly id: number; // Ther is public modifier if we don't use any modifiers
  public name: string; // public is optional this is the default so we can ignore it
  private balance: number; // private properties can't be accessed outside nor in another class
  protected something: boolean; // protected properties can't be accessed outside but can be inherited

  constructor(id: number, name: string, balance: number, something: boolean) {
    this.id = id;
    this.name = name;
    this.balance = balance;
    this.something = something;
  }

  // increaseBalance(amount: number) {
  //   return this.balance += amount;
  // }

  //* We can use SETter for this operations
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
