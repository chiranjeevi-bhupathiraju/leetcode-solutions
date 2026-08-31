/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    nums.sort((a, b) => a - b)
    let a = nums.length

    i = 0

    while (i <= a) {
        if (!nums.includes(i)) {
            return i
        }
        i++
    }
};