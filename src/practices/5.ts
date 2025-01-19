// Objective: Write a function that reverses a string.

// Instructions:

// Write a function reverseString that:
// Takes a single string argument.
// Returns the string in reverse order.
// Example:
// Input: "hello"
// Output: "olleh"

{
    const reverseWord = (word: string) => {
        return word.toLowerCase().split("").reverse().join("")
    }

    // alternative function 
    const reverseWord2 : (word:string) => string = (word) => {
        return word.toLowerCase().split("").reverse().join("")
    }

    // using type alias
    type StringManipulator = (word: string) => string // reusable
    const reverseWord3 : StringManipulator = (word) => {
        return word.toLowerCase().split("").reverse().join("")
    }

    reverseWord("hello") // olleh
    reverseWord2("hello")
    reverseWord3("hello")
}