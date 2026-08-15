/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let arrSum = nums.reduce((s,e)=>s+e,0)
    let digitSum = nums.join('').split('').reduce((s,e)=>s+(+e),0)

    return Math.abs(arrSum-digitSum)
};