//* union type
type UserRole = "admin" | "user";

const user = (role: UserRole) => {
  if (role === "admin") {
    console.log("hello admin");
  } else if (role === "user") {
    console.log("hello user");
  } else {
    console.log("breh who the hell are you");
  }
};

//* intersaction
type Employee = {
  name: string;
  salary: number;
};

type Manager = {
  teamSize: number;
};

type EmployeeManager = Employee & Manager; //* intersaction of Employee and Manager alias

const employeeManager: EmployeeManager = {
  name: "asldjf",
  salary: 3333333,
  teamSize: 298,
};
