/*
 Write a function 'allConstruct(target, wordBank)' that accepts a target strring
 and an array of strings.

 The Funciton should return a 2D array containing all the ways that the 'target' can
 be constructed by concatenating elements of the 'wordBank' array. Each element of hte 2D array should
 represent one combination that constructs the 'target'.

 You may reuse elements of 'wordBank' as many times as needed.

 1. input: allConstruct(purple, [purp, p, ur, le, purpl])
 output: [
            ['purp', 'le'], 
            ['p','ur','p','l']
        ]
 2. input: allConstruct(abcdef, [ab, abc, cd, def, abcd, ef, c])
  output: [
            [ab, cd, ef],
            [abc, def],
            [ab, c, def],
            [abcd, ef]s
        ]       

    complexity: => Exponential Complexity
    m = target.length
    n = wordBank.length
        time: ~O(n ^ m)
        space: ~O(n ^ m)
*/


const allConstructTabulation = (target, wordBank) => {
    const table = Array(target.length + 1)
        .fill()
        .map(() => []);
    
    table[0] = [[]];

    for (let i = 0; i <= target.length; i++) {
        for (let word of wordBank) {
            if (i + word.length <= target.length && target.slice(i, i + word.length) === word) {
                const newCombinations = table[i].map(subArray => [...subArray, word]);
                table[i + word.length].push(...newCombinations);
            }
        }
    }

    return table[target.length];
}

console.log(allConstructTabulation('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']))
// [
//     [ab, cd, ef],
//     [abc, def],
//     [ab, c, def],
//     [abcd, ef]
// ]   

console.log(allConstructTabulation('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
// [
//     ['purp', 'le'], 
//     ['p','ur','p','l']
// ]

console.log(allConstructTabulation('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // []

console.log(allConstructTabulation  ('aaaaaaaaaz', [
    'a', 
    'aa', 
    'aaa', 
    'aaaa', 
    'aaaaa'])
);
