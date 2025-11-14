// [interface vs alias](https://github.com/microsoft/TypeScript/wiki/Performance#preferring-interfaces-over-intersections)

//* Interface is used to type objects
interface IUser {
  name: string;
  age: number;
}
interface IRole {
  role: "admin" | "user";
}

const user: IUser = {
  name: "Slim",
  age: 40,
};

//* We can't do
// interface IBool = boolean; //! equal sign (=) is not accepted in inteface
type Bool = boolean;

//* extending a interface
interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

const user1: IUserWithRole = {
  name: "Slim",
  age: 20320,
  role: "admin",
};
