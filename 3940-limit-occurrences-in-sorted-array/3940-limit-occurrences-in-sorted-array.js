/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var limitOccurrences = function (nums, k) {
    let f = {}
    let res = []

    for (let e of nums) {
        f[e] = (f[e] ?? 0) + 1
        if (f[e] <= k) {
            res.push(e)
        }

    }

    return res
};