// Source: https://leetcode.com/problems/maximum-xor-for-each-query/description/?envType=daily-question&envId=2024-11-08
// ? NOTE: the question given relied on knowing this about XOR

// let xOrAllNums = 0;

//?* Calculate the initial XOR of all elements in nums
// for (const num of nums) {
//     xOrAllNumsr ^= num;
// }


// xOrAllNums XOR k = maxK
//* I can swap k and maxK and the statement is true
// xOrAllNums XOR maxK = k

function getMaximumXor(nums: number[], maximumBit: number): number[] {
    const maxK = (1<<maximumBit) - 1;
    let xOrAllNums = nums.reduce((acc, num) => acc ^ num, 0);
    
    const result = new Array(nums.length);

    for (let index = 0; index < nums.length; index++) {
        result[index] = xOrAllNums ^ maxK;
        xOrAllNums ^= nums[nums.length - 1 - index];
    }
    
    return result;
};

console.log(getMaximumXor([0,1,1,3], 2)); // [0,1,2,2]
console.log(getMaximumXor([2,3,4,7], 3)); // [0,1,2,2]
console.log(getMaximumXor([0,1,2,2,5,7], 3)); // [0,1,2,2]
// console.log(getMaximumXor([0,1,2,2,5,7], 3)); // [0,1,2,2]
