// For the two coding exercises code up the following:

// First:

const sampleObject = { first_name: "Martin", last_name: "Vera" }
const reverseKeyVals = (obj) => {
    return Object.entries(obj).reduce((acc, [key, val]) => {
        acc[val] = key;
        return acc;
    }, {})
}
console.log(reverseKeyVals(sampleObject));

// example Answer: {Martin: "first_name", Vera: "last_name"}