/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    nums.sort((a, b) => a - b)


    let bi = nums[nums.length - 1]
    let sum = 0

    for (let i = 0; i < nums.length - 1; i++) {
        sum += (bi - nums[i])
    }

    return sum
};