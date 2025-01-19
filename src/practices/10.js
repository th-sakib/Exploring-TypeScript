// Objective: Handle null and undefined values using nullish coalescing.
// Instructions:
// Write a function getDisplayName(name: string | null | undefined): string that returns "Anonymous" if name is null or undefined.
function getDisplayName(name) {
    return name !== null && name !== void 0 ? name : "Annonymous";
}
console.log(getDisplayName("Sakib"));
console.log(getDisplayName(null));
console.log(getDisplayName(undefined));
