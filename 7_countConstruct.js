/*
 Write a function 'countConstruct(target, wordBank)' that accepts a
 target string and an array of strings.

 The function should return the NUMBER OF WAYS that the 'target' can be
 constructed by concatenating elements of the 'wordBank' array.

 You may reuse elements of 'wordBank' as many times as needed.
*/

// Brute Force
const countConstruct = (target, wordBank) => {
    if (target === '') return 1;

    let totalCount = 0;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const numWaysForRest = countConstruct(target.slice(word.length), wordBank);
            totalCount += numWaysForRest;
        }
    }
    return totalCount;
}
/*
    Time Complexity
    time: O(n^m * m)
    space: O(m^2)
*/

// Memoization
const memoCountConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '') return 1

    let totalCount = 0

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const numWaysForRest = memoCountConstruct(target.slice(word.length), wordBank, memo);
            totalCount += numWaysForRest;
        }
    }
    memo[target] = totalCount;
    return totalCount;
}
/*
    Time Complexity
    time: O(n * m^2)
    space: O(m^2)=
*/

console.time()
console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // 2
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // 1
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // 0
console.log(countConstruct('potato', ['po', 'p', 't', 'tato', 'at', 'o'])); // true
console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // 4
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',

])); // 0
console.timeEnd()

console.time()
console.log(memoCountConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // 2
console.log(memoCountConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // 1
console.log(memoCountConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // 0
console.log(memoCountConstruct('potato', ['po', 'p', 't', 'tato', 'at', 'o'])); // true
console.log(memoCountConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // 4
console.log(memoCountConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',

])); // 0
console.timeEnd()