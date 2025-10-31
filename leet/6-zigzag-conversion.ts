// source: https://leetcode.com/problems/zigzag-conversion/description/

function convert(s: string, numRows: number): string {
    if(numRows===1 || numRows >= s.length) return s;

    const cycle = 2 * (numRows-1);
    const strArr = new Array<string>(s.length);
    let current = 0;

    for (let i = 0; i < s.length; i += cycle) strArr[current++] = s[i];

    for (let row = 1; row < numRows - 1; row++) {
        for (let i = row; i < s.length; i += cycle) {
            strArr[current++] = s[i];
            const diag = i + cycle - (2 * row);
            if (diag < s.length) strArr[current++] = s[diag];
        }
    }

    for (let i = numRows - 1; i < s.length; i += cycle) strArr[current++] = s[i];

    // If current < s.length (short strings), join ignores unfilled slots.
    return strArr.slice(0, current).join("");
};
// const s = "AB", numRows = 1;
const s = "PAYPALISHIRING", numRows = 3
console.log(convert(s, numRows))

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

// PAYPALISHIRING //3

// PAYPALISHIRING //4