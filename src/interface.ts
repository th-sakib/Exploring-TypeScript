type User1 = {
    name: string,
    age: number
}

interface User2 {
    name: string, 
    age: number
}

// interface newString = string // not valid
type newString = string // its valid

const user1: User1 = {
    name: "Sakib",
    age: 21
}

const user2: User2 = {
    name: "sakib",
    age: 21
}

// extending type and interfaces 
type Human1 = {
    name: string, 
    age: number
}

type ExtendHuman1 = Human1 & { isAlive: boolean}; // & is intersection

const human1: ExtendHuman1 = {
    name: "sakib",
    age: 21,
    isAlive: true
}

// we can do same kinda thing in interface 
interface Human2 {
    name: string,
    age: number
}

interface ExtendHuman2 extends Human2 {
    isAlive: boolean
}

const human2: ExtendHuman2 = {
    name: "Thamidul",
    age: 21, 
    isAlive: true
}

interface Testing extends Human1 {
    roll: number
}

type TestingType = Human2 & {
    roll: number
}

// array 

type NumberSet = number[]
const numberSet: NumberSet = []

interface NumberSet2 {
    [index: number] : number
}
const numberSet2:NumberSet2 = [2, 3, 3]

// function 
type Func = (num1: number, num2: number) => number
const func: Func = (num1, num2) => {
    console.log(num1 + num2)
    return num1 + num2
}
func(2, 3)

const func1 = (num1: number, num2: number): number => {
    return num1 * num2
}

// using interface on function
interface FuncInterface {
    (num1: number, num2: number): number
}
const func3: FuncInterface = (num1, num2) => {
    return num1
}
func3(3,3)
