const findLongestWord = message => {
    const longestWord = message.split(' ').sort((a, b) =>  b.length - a.length);
    return longestWord[0];
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));