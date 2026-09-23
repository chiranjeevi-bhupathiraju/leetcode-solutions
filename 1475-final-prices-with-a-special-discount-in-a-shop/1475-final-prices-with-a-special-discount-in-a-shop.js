/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (p) {
    let res = []

    for (let i = 0; i < p.length; i++) {
        let price = p[i]
        for (let j = i + 1; j < p.length; j++) {
            if (p[j] <= p[i]) {
                price = p[i] - p[j]
                break
            }
        }
        res.push(price)
    }

    return res
};