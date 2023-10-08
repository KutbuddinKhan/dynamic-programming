/*
**********  BEST SUM TABULATION  ****************

Write a function 'bestSumTabulation(targetSum, numbers)' that takes in a targetSum
and an array of numbers as arguments

The function should return an array containing the 'shortest' combination of numbers 
that add up to exactly the targetSum

If there are is a tie for the shortest combinations, you may return any one of the shortest.

    Complexity:
    time: O(m^2 * n)
    space: O(m^2)
*/

const bestSumTabulation = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                const combination = [...table[i], num];
                // If this current combination is shorter than what is already stored
                if (!table[i + num] || table[i + num].length > combination.length) {
                    table[i + num] = combination;
                }
            }
        }
    }
    return table[targetSum];
}

console.log(bestSumTabulation(7, [5, 3, 4, 7]));  // [7]
console.log(bestSumTabulation(8, [2, 3, 5]));  // [3, 5]
console.log(bestSumTabulation(8, [1, 4, 5]));  // [4, 4]
console.log(bestSumTabulation(100, [1, 2, 5, 25]));  // [25, 25, 25,25]
