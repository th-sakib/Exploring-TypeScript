function valuePrinter(value: number | string):string | number | undefined {
    if(value === "string") {
        const convert = parseFloat(value)
        return `The converted value is ${convert}`
    }

    else if(value === "number") {
        return value
    }
}

const res1 = valuePrinter(23) as number
const res2 = valuePrinter("23") as string

type customError = {
    message: string
}
try {

} catch (error) {
    console.log((error as customError).message);
}
