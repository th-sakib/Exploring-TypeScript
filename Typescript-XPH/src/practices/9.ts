// Objective: Use optional chaining with nested objects.

// Instructions:

// Write a function getEmployeeCity(employee) that safely retrieves the city of an employee from a nested object using optional chaining.

{
    type Employee = {
        name: string,
        address?: {
            city: string
        }
    }
    function getEmployeeCity(employee: Employee) {
        return employee?.address?.city || "City is not available"
    }

    getEmployeeCity({
        name: "sakib",
        address: {
            city: "Rangpur"
        }
    })
}