// Second:

// Write a function to tally the number of times a letter occurs in a string.

// const tallLetters = (str) =>
// apple would yield:
// {a: 1, p:2, l: 1, e: 1}

const tallLetters = (str) => {
    const result = {};
    str.split("").forEach(letter => {
        result[letter] ? ++result[letter] : result[letter]=1;
    });
    return result;
}
console.log(tallLetters("apple"));