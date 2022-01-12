/**
 * F(0) = 0
 * F(1) = 1
 * F(n) = F(n - 1) + F(n - 2)
 */


// function fibonacci (n){
//     if (n < 2) return n;
//     return fibonacci(n - 1) + fibonacci(n - 2)
// }


// function fibonacci(n) {
//     if (n < 2) return n;
//     let f0 = 0;
//     let f1 = 1;
//     let cur = f0;
//
//     for (let i = 1; i < n; i++){
//         cur = f0 + f1;
//         f0 = f1;
//         f1 = cur;
//     }
//     return cur;
// }


// function fibonacci(n) {
//     if (n < 2) {
//         return n
//     }
//     const Fib = [0, 1];
//     for (let i = 1; i < n; i++) {
//         Fib[i + 1] = Fib[i] + Fib[i - 1]
//     }
//     return Fib[n]
// }


function fibonacci(n, pre = 0, cur = 1) {
    if (n === 0) return 0;
    if (n <= 1) {
        return cur
    }
    return fibonacci(n - 1, cur, pre + cur)
}

console.time()
console.log(fibonacci(0))
console.timeEnd()
