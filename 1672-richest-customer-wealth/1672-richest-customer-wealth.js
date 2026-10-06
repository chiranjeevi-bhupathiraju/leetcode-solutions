/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (a) {
    let wealths = a.map((acc) => acc.reduce((a, c) => a + c, 0))

    return Math.max(...wealths)
};