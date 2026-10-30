/**
 * @param {number[]} nums
 * @return {number}
 */

var peakValleyDifference = function (nums) {
    let p = []
    let v = []
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            p.push(nums[i])
        }

        if (nums[i] < nums[i - 1] && nums[i] < nums[i + 1]) {
            v.push(nums[i])
        }
    }

    return p.reduce((a, c) => a + c, 0) - v.reduce((a, c) => a + c, 0)
};