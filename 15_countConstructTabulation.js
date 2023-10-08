/*
 Write a function 'countConstruct(target, wordBank)' that accepts a
 target string and an array of strings.

 The function should return the NUMBER OF WAYS that the 'target' can be
 constructed by concatenating elements of the 'wordBank' array.

 You may reuse elements of 'wordBank' as many times as needed.

    complexity:
    m = target
    n = wordBank.length
    time: O(m ^ 2)
    space: O(m)
*/

const countConstructTabulation = (target, wordBank) => {
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;

    for (let i = 0; i <= target.length; i++) {
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                table[i + word.length] += table[i];
            }
        }
    }

    // console.log("target",target)

    return table[target.length];
}





console.log(countConstructTabulation('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // 2
console.log(countConstructTabulation('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // 1
console.log(countConstructTabulation('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // 0
console.log(countConstructTabulation('potato', ['po', 'p', 't', 'tato', 'at', 'o'])); // 4
console.log(countConstructTabulation('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // 4
console.log(countConstructTabulation('eeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',

])); // 0