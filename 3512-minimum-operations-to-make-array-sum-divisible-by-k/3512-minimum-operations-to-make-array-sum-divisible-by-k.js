/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    let s = 0

    for (let n of nums) {
        s += n
    }

    return s % k
};