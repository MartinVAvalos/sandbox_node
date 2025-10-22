/* 

    Longest Substring Without Repeating Characters
 Given a string s find the length of the longest substring without repeating characters.

 Example 1: input s = "abcabcbb"
 Output: 3
 Explanation: The answer is "abc", with the length of 3.

 Example 2: input s = "bbbbb"
 Output: 1
 Explanation: The answer is "b", with the length of 1.

 Example 3: input s = "pwwkew"
 Output: 3
 Explanation: The answer is "wke", with the length of 3.

 Example 4: input s = "pwrpvckew"
 Output: 7
 Explanation: The answer is "rpvckew", with the length of 7.
*/

const input = "pwwkew";
function lengthOfLongestSubstring(str) {
    const subStrMap = {};
    Object.entries(str.split("")).map((key) => {
        console.log(key[0], key[1]);
        const index = key[0];
        const value = key[1];
        if(subStrMap.hasOwnProperty(value)) {
            subStrMap[value].push(index);
        } else {
            subStrMap[value] = [index]

        }
    })
    console.log(subStrMap)



}
lengthOfLongestSubstring(input);