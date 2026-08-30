/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {

    let memo = {}

    function f(n) {
        if (memo[n]) return memo[n]

        if (n == 1 || n == 0) return n

        return memo[n] = f(n - 1) + f(n - 2)
    }


    return f(n)

};