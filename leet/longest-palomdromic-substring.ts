function longestPalindrome(s: string): string {
    if (s.length === 1) return s;
    let start=0, maxLength=0;

    let expandFromCenter = (left: number, right: number) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right-left-1;
    }

    for (let i = 0; i < s.length; i++) {
        const len1 = expandFromCenter(i, i); //odd length
        const len2 = expandFromCenter(i, i+1); //even length

        let len = Math.max(len1, len2);
        if (len > maxLength) {
            maxLength = len;
            start = i - Math.floor((len - 1) / 2);
        }
    }

    return s.substring(start, start + maxLength);
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
