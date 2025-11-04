// source: https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
// 0,1 = holds indexes of largest difference
// 2 = holds largest difference
function lengthOfLongestSubstring(s: string): number {
    const charMap = new Map<string, number>();
    let maxLength = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        if (charMap.has(char) && charMap.get(char)! >= left) {
            left = charMap.get(char)! + 1;
        }

        charMap.set(char, right);

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

function lengthOfLongestSubstring2(s: string): number { //?not as good as first answer
    const seen = new Set<string>();
    let left = 0;
    let best = 0;

    for (let right = 0; right < s.length; right++) {
        const ch = s[right];

        // shrink window while duplicate is present
        while (seen.has(ch)) {
            seen.delete(s[left]);
            left++;
        }

        seen.add(ch);
        best = Math.max(best, right - left + 1);
    }

    return best;
}

// console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
// console.log(lengthOfLongestSubstring("abcabcbb"));