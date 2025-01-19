// Objective: Create union and intersection types using interfaces.

// Instructions:

// Define interfaces Book and Magazine.
// Create:
// A type that is a union of Book and Magazine.
// A type that is an intersection of Book and Magazine.

interface Book {
    author: string,
    publishedDate: number
}

type PartialBook = Partial<Book> // make both partial(optional)

interface Magazine {
    writer: string,
    isPublished: boolean
}

type exampleUnion = Book | Magazine

type exampleIntersection = Book & Magazine

const reader: exampleUnion = {
    author: "sakib",
    publishedDate: 234234,
    // OR
    // writer: "th",
    // isPublished: false
}

const reader1: exampleIntersection = {
    author: "sakib",
    publishedDate: 234524,
    writer: "th",
    isPublished: false
}