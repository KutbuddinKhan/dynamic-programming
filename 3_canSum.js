/*
write a function 'canSum(targetSum, numbers)' that takes in a 
targetSum and an array of numbers as arguments.

The function should return a boolean indicating whether or not it is possible to 
generate the targetSum using numbers from the array.

You may use an element of the array as many times as needed. 

You may assume that all input numbers are non-negative
*/

// Brute force:
const canSum = (targetSum, numbers) => {
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        // console.log(num);
        const remainder = targetSum - num;
        if (canSum(remainder, numbers) === true) {
            return true;
        }
    }
    return false;
}

// Memoization 
const memoCanSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];

    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainder = targetSum - num;
        if (memoCanSum(remainder, numbers, memo) === true) {
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
}

console.time()
console.log(canSum(7, [2, 3])) // true
console.log(canSum(7, [5, 3, 4, 7])) // true
console.log(canSum(7, [2, 4])) // false
console.log(canSum(8, [2, 3, 5])) // true
console.log(canSum(300, [7, 14])) // false
console.timeEnd()

console.time()
console.log(memoCanSum(7, [2, 3])) // true
console.log(memoCanSum(7, [5, 3, 4, 7])) // true
console.log(memoCanSum(7, [2, 4])) // false
console.log(memoCanSum(8, [2, 3, 5])) // true
console.log(memoCanSum(300, [7, 14])) // false
console.timeEnd()

/*
Time Complexity
            m = target sum
            n = array length

Brute Force                     Memoized
O(n^m) time        ==>          O(m * n) time
O(m) space                      O(m) space

*/