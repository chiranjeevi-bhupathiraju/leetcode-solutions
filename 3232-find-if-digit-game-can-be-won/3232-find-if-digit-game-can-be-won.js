/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function (nums) {
    let sdSum = nums.filter((n) => n < 10).reduce((a, c) => a + c, 0)
    let ddSum = nums.filter((n) => n > 9).reduce((a, c) => a + c, 0)

    return sdSum !== ddSum
};