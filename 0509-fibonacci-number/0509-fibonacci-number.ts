function fib(n: number): number {
    let memo = {}

    function F(n) {
        if (memo[n] !== undefined) return memo[n]

        if (n === 0) return 0
        if (n === 1) return 1

        return memo[n] = F(n - 1) + F(n - 2)
    }

    return F(n)
}
