/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let ct = 0
    nums.push(0)
    let res = []

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            ct++
        }
        else {
            res.push(ct)
            ct = 0
        }
    }

    return Math.max(...res)
};