/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let max = 0

    for (let acc of accounts) {
        let sum = acc.reduce((a, c) => a + c, 0)
        max = Math.max(max, sum)
    }

    return max
};