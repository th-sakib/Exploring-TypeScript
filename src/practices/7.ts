// Objective: Write a function that behaves differently based on the input type.

// Instructions:

// Create a function that accepts a parameter of type string | number.
// The function should:
// Return the length if the input is a string.
// Return the square if the input is a number.

{
    const Fn = (param: string | number):number => {
        if(typeof param === "number") {
            return param * param
        } else {
            return param.length
        }
    }
}