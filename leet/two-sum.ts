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

function twoSumOptimized(nums: number[], target: number): number[] {
    let indexBNumEntries: Map<number, number> = new Map();
    let indexBNumEntriesR: Map<number, number> = new Map();
    let indexR = nums.length - 1;

    for (let index = 0; index < nums.length; index++) {
        const aNum = nums[index];
        const bNum = target - aNum;

        const aNumR = nums[indexR];
        const bNumR = target - aNumR;
        
        if(indexBNumEntries.has(aNum)) {
            return [indexBNumEntries.get(aNum)!, index];
        }
        if(indexBNumEntriesR.has(aNumR)) {
            return [indexBNumEntriesR.get(aNumR)!, indexR]
        }

        indexBNumEntries.set(bNum, index);
        indexBNumEntriesR.set(bNumR, indexR);
        indexR--;
    }
    return []; //? No solution
};


//? Example 1:
// console.log(twoSum([2,7,11,15], 9));
console.log(twoSumOptimized([2,7,11,15], 9));

//? Example 2:
// console.log(twoSum([3,2,4], 6));
console.log(twoSumOptimized([3,2,4], 6));

//? Example 3:
// console.log(twoSum([3,3], 6));
console.log(twoSumOptimized([3,3], 6));
