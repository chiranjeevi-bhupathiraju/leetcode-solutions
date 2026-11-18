/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
    let n = numBottles
    let ct = numBottles

    while (n >= numExchange) {
        let nc = Math.floor(n / numExchange)
        n = (n % numExchange) + nc

        ct += nc
    }

    return ct
};