// Objective: Simulate an asynchronous operation with TypeScript.

// Instructions:

//     Write an asynchronous function that:
//         Simulates fetching user data (containing name and age).
//         Returns the data after a short delay.

type GenericData = {
    name: string,
    age: number
}

const simulateFetch = <T>(data: T):Promise<T> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
            resolve(data)
            } catch (error) {  
                reject(error)
            }
        }, 1000);
    })
}

const fetchData = async() => {
    try {
        const res = await simulateFetch<GenericData>({
            name: "sakib",
            age: 21
        })
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

fetchData()