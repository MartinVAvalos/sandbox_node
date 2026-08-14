//* Link: https://leetcode.com/problems/integer-to-roman/description/

function intToRoman(num: number): string {
    let romanObj: {[key:number]: string} = {
        1:'I',
        5:'V',
        10:'X',
        50:'L',
        100:'C',
        500:'D',
        1000:'M'
    }

    let numStr = String(num);
    let result = '';
    for (let i = 0; i < numStr.length; i++) {
        let digit = Number(numStr[i]);
        let place = 10 ** (numStr.length - 1 - i);

        if(digit === 9) { //!Sub
            result += romanObj[place] + romanObj[place * 10];
        }
        else if(digit >= 5) {
            result += romanObj[place * 5] + romanObj[place].repeat(digit - 5);
        }
        else if(digit === 4) { //!Sub
            result += romanObj[place] + romanObj[place * 5];
        }
        else {
            result += romanObj[place].repeat(digit);
        }
    }

    return result;
}

// Test cases
console.log(intToRoman(63));
console.log(intToRoman(49));
console.log(intToRoman(53));