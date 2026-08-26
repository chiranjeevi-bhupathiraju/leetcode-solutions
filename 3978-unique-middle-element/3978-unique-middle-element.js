/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMiddleElementUnique = function (nums) {
    let f = {}
    for (let el of nums) {
        f[el] = (f[el] || 0) + 1
    }

    let m = Math.trunc(nums.length / 2)

    return f[nums[m]] == 1
};