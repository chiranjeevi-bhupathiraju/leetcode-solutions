function reverse(x: number): number {
    let [l, u] = [-(2 ** 31), (2 ** 31) - 1]

    let isNeg = false
    if (x < 0) {
        x = -1 * x
        isNeg = true
    }

    let n = + ('' + x).split("").reverse().join("")
    if (isNeg) {
        n = -1 * n
    }

    if (l <= n && n <= u) {
        return n
    } else {
        return 0
    }
};
