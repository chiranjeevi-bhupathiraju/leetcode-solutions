function maxProfit(prices: number[]): number {
    let n = prices.length
    let suffMax = new Array(n)
    suffMax[n - 1] = prices[n - 1]
    let res = 0

    for (let i = n - 2; i >= 0; i--) {
        suffMax[i] = Math.max(prices[i], suffMax[i + 1])
    }

    for (let i = 0; i < n; i++) {
        let curr = prices[i]
        let maxOnRight = suffMax[i + 1]
        if (maxOnRight >= curr) {
            res = Math.max(res, maxOnRight - curr)
        }
    }

    return res
};
