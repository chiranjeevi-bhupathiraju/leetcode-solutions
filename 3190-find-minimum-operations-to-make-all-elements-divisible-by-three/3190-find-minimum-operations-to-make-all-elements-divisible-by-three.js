/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (n) {
    let o = 0

    for (let a of n) {
        if ((a - 1) % 3 == 0 || (a + 1) % 3 == 0) {
            o++
        }
    }

    return o
};