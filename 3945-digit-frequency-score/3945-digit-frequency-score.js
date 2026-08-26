/**
 * @param {number} n
 * @return {number}
 */
var digitFrequencyScore = function (n) {
    let s = 0
    let a = String(n).split('')

    let f = {}

    for (let el of a) {
        f[el] = (f[el] || 0) + 1
    }

    for (let el in f) {
        s += (+f[el]) * el
    }

    return s
};