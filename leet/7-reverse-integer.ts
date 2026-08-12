// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).


//? Example 1:
// Input: x = 123
// Output: 321

//? Example 2:
// Input: x = -123
// Output: -321

//? Example 3:
// Input: x = 120
// Output: 21
 
// Constraints: -231 <= x <= 231 - 1

function reverse(num: number) {
    let str = String(num);
    const result:String[] = Array(str.length);
    let isNegative = false;
    if(str[0]==="-") {
        str = str.slice(1);
        isNegative = true;
    }

    const isEven = str.length%2 === 0;
    const middleIndex = isEven ? -1 : (str.length/1)+1
    for(let i=0; i<str.length/2; i++) {
        let j = str.length - 1 - i;
        result[j] = String(str[i]);
        result[i] = String(str[j]);
        if(i+1 === middleIndex) {
            result[i] = String(str[i]);
        }
    }
    if(isNegative) result.unshift("-");
    
    const reversedNum = Number(result.join(""));
    const INT32_MAX = 2147483647;
    const INT32_MIN = -2147483648;
    
    if(reversedNum > INT32_MAX || reversedNum < INT32_MIN) {
        return 0;
    }
    
    return reversedNum;
}
console.log(reverse(-123));