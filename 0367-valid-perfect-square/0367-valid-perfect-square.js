/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (n) {
    let i = 1
    while (i < 100000) {
        if (i * i == n) {
            return true
        }
        i++
    }
    return false
};