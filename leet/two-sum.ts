// Source: https://leetcode.com/problems/two-sum/description/

function twoSum(nums: number[], target: number): number[] {
    //? Ex [2,7,11,15], 9
    //* a + b = target
    const result = [] as number[];
    let indexBNumEntries: Map<number, number> = new Map();

    nums.forEach((aNum, index) => {
        const bNum = target - aNum;
        if(indexBNumEntries.has(aNum)) {
            result.push(indexBNumEntries.get(aNum)!, index);
        }
        indexBNumEntries.set(bNum, index);
    })

    return result;
};


//? Example 1:
console.log(twoSum([2,7,11,15], 9));

//? Example 2:
console.log(twoSum([3,2,4], 6));

//? Example 3:
console.log(twoSum([3,3], 6));
