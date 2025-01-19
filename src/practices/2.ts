// Objective: Create a function with parameters and an optional literal type.

// Instructions:

// Define a function that takes:
// name (string)
// age (number)
// role (optional, with type 'admin' | 'user' | 'guest')
// The function should log these values or perform a basic action.

{
    function Fn(name:string, age: number, role?: 'admin' | 'user' | 'guest') {
        console.log(name);
        console.log(age);
        console.log(role ?? "guest");
        // Default Message: Used the nullish coalescing operator (??) to provide a default message when role is undefined.
    }

    Fn("Sakib", 21); // Outputs: Sakib, 21, guest
    Fn("Sakib", 21, 'admin'); // Outputs: Sakib, 21, admin

    function FnAlternative(name:string, age: number, role: 'admin' | 'user' | 'guest' = 'guest') { // setting default value // in this case we don't need the ternary ? operator in role parameter
        console.log(name);
        console.log(age);
        console.log(role);
    }

    FnAlternative("Sakib", 21); // Outputs: Sakib, 21, guest
    FnAlternative("Sakib", 21, 'admin'); // Outputs: Sakib, 21, admin
}