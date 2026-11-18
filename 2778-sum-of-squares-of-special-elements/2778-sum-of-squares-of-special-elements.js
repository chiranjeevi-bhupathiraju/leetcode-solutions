/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function (nums) {
    let res = []

    for (let i = 0; i < nums.length; i++) {
        if (nums.length % (i + 1) == 0) {
            res.push(nums[i])
        }
    }

    return res.reduce((a, c) => a + (c * c), 0)
};