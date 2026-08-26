/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function (nums) {
    let s = 0
    let ct = 0

    for (let el of nums) {
        s += el

        if (s == 0) {
            ct++
        }
    }

    return ct
};