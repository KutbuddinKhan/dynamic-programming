/*
write a function 'canSum(targetSum, numbers)' that takes in a 
targetSum and an array of numbers as arguments.

The function should return a boolean indicating whether or not it is possible to 
generate the targetSum using numbers from the array.

You may use an element of the array as many times as needed. 

You may assume that all input numbers are non-negative

    Complexity:
    time: O(m * n)
    space: O(m)
*/

const canSumTabulation = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(false);
    table[0] = true;
    // console.log(table);

    for (let i = 0; i <= targetSum; i++) {
        if (table[i] === true) {
            for (let num of numbers) {
                table[i + num] = true;
            }
        }
    }
    
    return table[targetSum];
}

console.log(canSumTabulation(7, [2, 3])) // true
console.log(canSumTabulation(7, [5, 3, 4, 7])) // true
console.log(canSumTabulation(7, [2, 4])) // false
console.log(canSumTabulation(8, [2, 3, 5])) // true
console.log(canSumTabulation(300, [7, 14])) // false