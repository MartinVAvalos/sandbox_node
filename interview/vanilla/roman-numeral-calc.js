/*
    Create a function that takes in a roman numberal string and converts it to a number
*/

const romanNumeral = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500
}

const str = "DXLVII";

function romanToArabicNumber(romanNumber) {
    let result = 0;
    let romanArray = str.split("");
    for (let i = 0; i < romanArray.length; i++) {
        let curr = romanNumeral[romanArray[i]], next = romanNumeral[romanArray[i+1]];
        if(curr < next) {
            result += next-curr;
            ++i;
        } else {
            result += curr;
        }
    }
    return result;
}

console.log(romanToArabicNumber(str));