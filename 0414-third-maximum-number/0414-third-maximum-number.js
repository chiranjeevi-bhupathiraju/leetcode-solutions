/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    nums.sort((a, b) => b - a)

    let t = [...new Set(nums)]

    return t.length >= 3 ? t[2] : t[0]
};