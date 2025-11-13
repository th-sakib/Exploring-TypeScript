// Objective: Write a function that uses the rest operator for variable-length arguments.

// Instructions:

// Create a function that takes multiple numeric arguments (using the rest operator) and returns the sum of all arguments.

{
    function sum (...nums:number[]):number {
        return nums.reduce((acc, num) => acc + num, 0);
    }

    sum(2,34,2,4,234)
}