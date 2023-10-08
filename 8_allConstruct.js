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
            [abcd, ef]
        ]       
*/

const allConstruct = (target, wordBank) => {
    if (target === '') return [[]];

    const result = [];

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank);
            const targetWays = suffixWays.map(way => [word, ...way]);

            result.push(...targetWays);
        }
    }

    return result;
}

const memoAllConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '') return [[]];

    const result = [];

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = memoAllConstruct(suffix, wordBank, memo);
            const targetWays = suffixWays.map(way => [word, ...way]);

            result.push(...targetWays);
        }
    }
    memo[target] = result;
    return result;
}

/*
    Time complexity
    m = target.length
    n = wordBank.length

    time: O(n^m)
    space: o(m)
*/

console.time()
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']))
// [
//     [ab, cd, ef],
//     [abc, def],
//     [ab, c, def],
//     [abcd, ef]
// ]   

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
// [
//     ['purp', 'le'], 
//     ['p','ur','p','l']
// ]

console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // []

console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',

])); // []
console.log("brute force time end:")
console.timeEnd()

console.time()
console.log(memoAllConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']))
// [
//     [ab, cd, ef],
//     [abc, def],
//     [ab, c, def],
//     [abcd, ef]
// ]   

console.log(memoAllConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
// [
//     ['purp', 'le'], 
//     ['p','ur','p','l']
// ]

console.log(memoAllConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // []

console.log(memoAllConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',

])); // []
console.log('memo time end:')
console.timeEnd()
