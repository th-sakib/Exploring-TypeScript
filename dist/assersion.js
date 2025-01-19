"use strict";
function valuePrinter(value) {
    if (value === "string") {
        const convert = parseFloat(value);
        return `The converted value is ${convert}`;
    }
    else if (value === "number") {
        return value;
    }
}
const res1 = valuePrinter(23);
const res2 = valuePrinter(23);
