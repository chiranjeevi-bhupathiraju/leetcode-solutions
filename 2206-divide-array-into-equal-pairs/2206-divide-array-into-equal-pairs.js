/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
    let f = {}

    for (let e of nums) {
        f[e] = (f[e] || 0) + 1
    }

    for (let e in f) {
        if (f[e] % 2 !== 0) {
            return false
        }
    }

    return true
};