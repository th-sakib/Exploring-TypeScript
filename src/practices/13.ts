// Objective: Use generics to handle different types.

// Instructions:

//     Create a generic function that:
//         Accepts an array of any type.
//         Returns a new array with duplicate values removed.

{
    type GenericArray<T> = Array<T>

    const noDuplicates = <T>(array: GenericArray<T>):GenericArray<T> => {
        return Array.from(new Set(array))
    }

    noDuplicates([3,3,3,33])
    noDuplicates([3,3,"3",33])
    noDuplicates([3,3,3,33])
}