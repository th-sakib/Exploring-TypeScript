// Objective: Define a structured Person object using Type Aliases.

// Instructions:

// Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.

{
    type Person = {
        name: string,
        address: string,
        hairColor: string,
        eyeColor: string,
        income: number,
        expense: number,
        hobbies: string[],
        familyMembers: {name: string, relation: string}[], // array of object
        job: {title: string; company: string, isActive: boolean},
        skills: string[],
        maritalStatus: "single" | "married" | "divorced" | "widowed",
        friends: string[]
    }
}