/*
 Write a function "canConstructTabulation(target, wordBank)" that accepts a target
 string and an array of strings.

 The function should return a boolean indicating whether or not the 'target' 
 can be constructed by concatenating elements of the 'wordBank' array.

 You may reuse elements of 'wordBank' as many times as needed.

    Complexity:
    m = target
    n = wordBank.length
    time:  O(m^2 * n)
    space: O(m)
*/


const canConstructTabulation = (target, wordBank) => {
    const table = Array(target.length + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= target.length; i++) {
        if (table[i] === true) {
            for (let word of wordBank) {
                // If the word matches the characters starting at position
                if (target.slice(i, i + word.length) === word) {
                    table[i + word.length] = true;
                }
            }
        }
    }
    return table[target.length];
}


console.log(canConstructTabulation('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
console.log(canConstructTabulation('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // false
console.log(canConstructTabulation('potato', ['po', 'p', 't', 'tato', 'at', 'o'])); // true
console.log(canConstructTabulation('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // true
console.log(canConstructTabulation('eeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',

])); // falseTabulation