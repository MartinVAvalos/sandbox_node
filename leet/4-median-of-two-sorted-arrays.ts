// source: https://leetcode.com/problems/median-of-two-sorted-arrays/description/

function findMedianSortedArrays(nums1: number[], nums2: number[]): number|undefined {
    if (nums1.length === 0 && nums2.length === 0) return undefined
    const LENGTH = nums1.length + nums2.length;
    let fullArray:Array<number> = new Array(LENGTH);
    let index1 = 0, index2 = 0;
    for (let index = 0; index < fullArray.length; index++) {
        if(index2 >= nums2.length || nums1[index1] <= nums2[index2]) {
            fullArray[index] = nums1[index1++]
        } else if (index1 >= nums1.length || nums1[index1] > nums2[index2]) {
            fullArray[index] = nums2[index2++]
        }
    }
    const isEven = LENGTH%2 === 0;
    const middleIndex = ~~(LENGTH/2)
    if(isEven) {
        return (fullArray[middleIndex] + fullArray[middleIndex-1])/2;
    }
    return fullArray[middleIndex];
};

console.log(findMedianSortedArrays([1, 3, 4], [2, 5]));
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

console.log(findMedianSortedArrays([1,2], [3,4]));
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.