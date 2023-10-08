/*
 Write a function "canConstruct(target, wordBank)" that accepts a target
 string and an array of strings.

 The function should return a boolean indicating whether or not the 'target' 
 can be constructed by concatenating elements of the 'wordBank' array.

 You may reuse elements of 'wordBank' as many times as needed.
*/

// Brute Force 
const canConstruct = (target, wordBank) => {
    if (target === '') return true;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (canConstruct(suffix, wordBank) === true) {
                return true;
            }
        }
    }

    return false;
}
/*
    Time Complexity
    time: O(n^m * m) 
    space: O(m^2)
*/

// Memoization
const memoCanConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '') return true;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (memoCanConstruct(suffix, wordBank, memo) === true) {
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
}
/*
    Time Complexity
    time: O(n * m^2)
    space: O(m^2)
*/

console.time()
console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // false
console.log(canConstruct('potato', ['po', 'p', 't', 'tato', 'at', 'o'])); // true
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // true
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',

])); // false
console.timeEnd()


console.time()
console.log(memoCanConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
console.log(memoCanConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // false
console.log(memoCanConstruct('potato', ['po', 'p', 't', 'tato', 'at', 'o'])); // true
console.log(memoCanConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // true
console.log(memoCanConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',

])); // false
console.timeEnd()

