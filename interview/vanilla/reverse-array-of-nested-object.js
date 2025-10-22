// Given an array of nested objects, where some objects may have nested objects as their values. Write a function called flattenAndFlip that:
// - flattens all nested objects into a single level object
// - flips the keys and values of the flattened object

// If a value is not a valid key (e.g. not a string or symbol), skip flipping the key-value pair

const data = [
    {
        id: 1,
        name: 'Alice',
        details: {
            age: 25,
            hobbies: { 
                sport: 'tennis',
                music: 'piano',
            },
        }
    },
    [{
        id: 2,
        name: 'Bob',
        details: {
            age: 30,
            hobbies: {
                sport: 'soccer',
                music: 'guitar',
            },
        },
    }],
    [[{
        id: 3,
        name: 'Simon',
        details: {
            age: 28,
            hobbies: {
                sport: 'fish',
                music: 'drums',
            },
        },
    }]]
];

let result = {};
function flattenAndFlip(data) {
    const flattenedResult = {};
    function flattenObj(myObj, field='') {
        for(const [key, val] of Object.entries(myObj)) {
            const newKey = field ? `${field}.${key}` : key;
            if(val && typeof val === "object" && !Array.isArray(val)) {
                flattenObj(val, newKey);
            }
            else {
                flattenedResult[val] = newKey;
            }
        }
    }
    function flattenArray(data) {
        for(const el of data) {
            if(el && Array.isArray(el)) {
                return flattenArray(el);
            } else if(typeof el === "object" && el) {
                flattenObj(el);
            }
        }
    }

    if(Array.isArray(data)) {
        flattenArray(data);

        // data.flat(Infinity);
        // data.forEach(el => {
        //     flattenAndFlip(el);
        // })
    }
    else if(typeof data === "object") {
        flattenObj(data)
    }
    result = {...result, ...flattenedResult};
}

flattenAndFlip(data)
console.log("Jesus is with me");
console.log(JSON.stringify(result, null, 2));



// flattenArr

// const result = {};
// const temp = [[{
//     id: 3,
//     name: 'Simon',
//     details: {
//         age: 28,
//         hobbies: {
//             sport: 'fish',
//             music: 'drums',
//         },
//     },
// }]];
// function flattenArray(data) {
//     for(const el of data) {
//         if(el && Array.isArray(el)) {
//             return flattenArray(el);
//         } else if(typeof el === "object" && el) {
//             flatten(el);
//         }
//     }
// }
// flattenArray(temp);


// flattenObj

// const temp = {
//     id: 2,
//     name: 'Bob',
//     details: {
//         age: 30,
//         hobbies: {
//             sport: 'soccer',
//             music: 'guitar',
//         },
//     },
// }
// function flatten(myObj, field='') {
//     for(const [key, val] of Object.entries(myObj)) {
//         const newKey = field ? `${field}.${key}` : key;
//         if(val && typeof val === "object" && !Array.isArray(val)) {
//             flatten(val, newKey);
//         }
//         else {
//             result[val] = newKey;
//         }
//     }
// }
// console.log(result);
