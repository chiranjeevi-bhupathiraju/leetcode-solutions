function longestPalindrome(s: string): number {
    let f = {}

    for (let e of s) {
        f[e] = (f[e] || 0) + 1
    }

    let res = 0
    let hasOdd = false

    for (let e in f) {
        if (+f[e] % 2 == 0) {
            res += +f[e]
        } else {
            res += f[e] - 1
            hasOdd = true
        }
    }

    if (hasOdd) {
        res += 1
    }

    return res
};