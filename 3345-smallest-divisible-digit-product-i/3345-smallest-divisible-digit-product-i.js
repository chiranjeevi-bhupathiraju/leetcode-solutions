/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function (n, t) {
    for (let i = n; ; i++) {
        let dp = String(i).split('').reduce((a, c) => a * (+c), 1)
        if (dp % t == 0) {
            return i
        }
    }
};