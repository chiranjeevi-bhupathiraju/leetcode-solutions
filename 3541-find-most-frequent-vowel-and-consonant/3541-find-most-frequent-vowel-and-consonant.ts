function maxFreqSum(s: string): number {
    let max1 = 0
    let max2 = 0
    let f = {}

    for (let e of s) {
        f[e] = (f[e] || 0) + 1
    }

    for (let e in f) {
        if ('aeiou'.includes(e)) {
            max1 = Math.max(max1, +f[e])
        } else {
            max2 = Math.max(max2, +f[e])
        }
    }

    return max1 + max2
};