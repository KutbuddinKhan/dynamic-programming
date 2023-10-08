// Fibonacci series

// Memoization
//  js object, key will be arg to fn, value will the be return value
const fib_memo = (n, memo = {}) => {
    // console.log(memo);
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib_memo(n - 1, memo) + fib_memo(n - 2, memo);
    return memo[n];
}
console.log("Memoization Fibo:");
console.time()
console.log(fib_memo(6))
console.log(fib_memo(7))
console.log(fib_memo(8))
console.log(fib_memo(50))
console.timeEnd()

// Classic method:
const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
};
console.log("Classic method:");
console.time()
console.log(fib(6));  // 8
console.log(fib(7));  // 13
console.log(fib(8));  // 21
console.log(fib(50));  // 12586269025
console.timeEnd()
