// Task 16: Utility Types and Keyof Constraints

// Objective: Access object properties dynamically using keyof.

// Instructions:

//     Create a function that:
//         Takes an object and a key.
//         Returns the property value from the object based on the provided key.
//         Use keyof to constrain the key to valid properties of the object.

{
    const Fn = <T, K extends keyof T>(obj:T, key:K):T[K] => {
        return obj[key]
    }

    const person = {
        name: "Sakib",
        roll: 20,
        age: 20,
        isAlive: true
    }

    const person1 = Fn(person, "age")
}