/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let set = new Set(nums)
    let a = nums.length

    i = 0

    while (i <= a) {
        if (!set.has(i)) {
            return i
        }
        i++
    }
};