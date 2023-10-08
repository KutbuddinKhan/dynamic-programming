/*
**********  BEST SUM ****************

Write a function 'bestSum(targetSum, numbers)' that takes in a targetSum
and an array of numbers as arguments

The function should return an array containing the shortest combination of numbers 
that add up to exactly the targetSum

If there are is a tie for the shortest combinations, you may return any one of the shortest..
*/

// BRUTE FORCE
const bestSum = (targetSum, numbers) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numbers){
        const remainder = targetSum - num;
        const remainderResult = bestSum(remainder, numbers);

        if (remainderResult !== null) {
            const combination = [...remainderResult, num];
            // If the combination is shorter than the current "shortest", update it
            if(shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }
    return shortestCombination;
}
/*
    Time Complexity
    m = target Sum
    n = numbers.length

    time: O(n^m * m)
    space: O(m^2)
*/


// Memoization
const memoize = (targetSum, numbers, memo = {} ) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numbers){
        const remainder = targetSum - num;
        const remainderCombination = memoize(remainder, numbers, memo);
        if (remainderCombination !== null) {
            const combination = [...remainderCombination, num];
            
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination
            }
        }
    }
    memo[targetSum] = shortestCombination;
    return shortestCombination;
}
/*
    Time complexity:
    time: O(m ^ 2 * n)
    space: O(m^2)
*/


console.time()
console.log(memoize(7, [5, 3, 4, 7]));  // [7]
console.log(memoize(8, [2, 3, 5]));  // [3, 5]
console.log(memoize(8, [1, 4, 5]));  // [4, 4]
console.log(memoize(100, [1, 2, 5, 25]));  // [25, 25, 25,25]
console.timeEnd()

console.time()
console.log(bestSum(7, [5, 3, 4, 7]));  // [7]
console.log(bestSum(8, [2, 3, 5]));  // [3, 5]
console.log(bestSum(8, [1, 4, 5]));  // [4, 4]
console.log(bestSum(100, [1, 2, 5, 25]));  // [25, 25, 25,25]
console.timeEnd()