/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let n = nums.length

    nums.sort((a,b)=>b-a)

    return (nums[0]-1) * (nums[1]-1)
};