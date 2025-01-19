// Objective: Practice using intersection types.

// Instructions:

// Create a type AdminUser that is an intersection of:
// User with properties name and email
// Admin with property adminLevel
// Write a function describeAdmin(user: AdminUser): string that returns a description of the admin user.

{
    interface User {
        name: string,
        email: string
    }

    interface Admin {
        adminLevel: string
    }

    type AdminUser = User & Admin

    const describeAdmin = (user: AdminUser): string => {
        return `Admin Description: ${user.name}, Email: ${user.email}, Level: ${user.adminLevel}`
    }
}