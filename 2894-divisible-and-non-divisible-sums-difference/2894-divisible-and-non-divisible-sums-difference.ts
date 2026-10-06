function differenceOfSums(n: number, m: number): number {
    let sum1 = 0
    let sum2 = 0

    let i = 1
    while (i <= n) {
        if (i % m == 0) {
            sum1 += i
        } else {
            sum2 += i
        }
        i++
    }

    return sum2 - sum1
};