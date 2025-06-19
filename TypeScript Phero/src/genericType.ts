
// const arr: number[] = [3,34,24,23,42];
// const arr: Array<number> = [3,24,2,34,234];

type GenericArray<T> = Array<T>; // T is a convention 

const arr: GenericArray<number> = [23.42,42,342,4,23,4];

type GenericProduct<T> = Array<T>

const products: GenericProduct<{title: string, price: number}> = [
    {
        title: "mobile",
        price: 3
    },
    {
        price: 3,
        title: "computer"
    }
]