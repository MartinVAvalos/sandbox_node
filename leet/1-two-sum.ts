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

// // target = a+b
function twoSumOptimized(nums: number[], target: number): number[] {
    const bIndexMap = new Map<number, number>();
    const bIndexMapR = new Map<number, number>();
    let reverseIndex = nums.length - 1;

    for (let index = 0; index < nums.length; index++) {
        let aNum = nums[index];
        let bNum = target - nums[index];
        
        let aNumR = nums[reverseIndex];
        let bNumR = target - nums[reverseIndex];

        if(bIndexMap.has(bNum)) {
            return [bIndexMap.get(bNum)!, index];
        }
        if(bIndexMapR.has(bNumR)) {
            return [reverseIndex, bIndexMapR.get(bNumR)!];
        }

        bIndexMap.set(aNum, index);
        bIndexMapR.set(aNumR, reverseIndex);
        reverseIndex--;
    }

    return [];
};


// //? Example 1:
// // console.log(twoSum([2,7,11,15], 9));
// console.log(twoSumOptimized([2,7,11,15], 9));

// //? Example 2:
// // console.log(twoSum([3,2,4], 6));
// console.log(twoSumOptimized([3,2,4], 6));

// //? Example 3:
// // console.log(twoSum([3,3], 6));
// console.log(twoSumOptimized([3,3], 6));
