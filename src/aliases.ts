type User = {
    name: string,
    age: number
}

const user:User = {
    name: "sakib",
    // age: "sakib" // gives error due to type alias (User)
    age: 21
}

