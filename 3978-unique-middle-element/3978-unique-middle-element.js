/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMiddleElementUnique = function (nums) {
    let mi = Math.floor(nums.length / 2)

    return nums.indexOf(nums[mi]) === nums.lastIndexOf(nums[mi])
};