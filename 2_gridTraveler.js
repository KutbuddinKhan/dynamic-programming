// say that you are a traveler on a 2D grid. you begin in the top-left corner
// and your goal is to travel to the bottom-right corner.
// You may only move down or right.

// In how many ways can you travel to the goal on a grid with dimensions m * n?



// memoization method:
const memoGridTravel = (m, n, memo = {}) => {
    const key = m + "," + n
    // are the args in the memo
    if (key in memo) return memo[key];

    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    memo[key] = memoGridTravel(m - 1, n, memo) + memoGridTravel(m, n - 1, memo);

    return memo[key];
}
console.time()
console.log(memoGridTravel(1, 1));  // 1
console.log(memoGridTravel(2, 3));  // 3
console.log(memoGridTravel(3, 2));  // 3
console.log(memoGridTravel(3, 3));  // 6
console.log(memoGridTravel(3, 0));
console.log(memoGridTravel(18, 18));  // 2333606220
console.timeEnd()


// classic method: Brute force
const gridTravel = (m, n) => {
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    return gridTravel(m - 1, n) + gridTravel(m, n - 1);

}
console.time()
console.log(gridTravel(1, 1));  // 1
console.log(gridTravel(2, 3));  // 3
console.log(gridTravel(3, 2));  // 3
console.log(gridTravel(3, 3));  // 6
console.log(gridTravel(3, 0));  // 0
console.log(gridTravel(18, 18));  // 2333606220
console.timeEnd()

