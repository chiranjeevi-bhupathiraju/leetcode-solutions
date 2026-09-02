/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function (nums) {
    let a = nums.map((e) => e % 2)

    return a.sort((a, b) => a - b)
};