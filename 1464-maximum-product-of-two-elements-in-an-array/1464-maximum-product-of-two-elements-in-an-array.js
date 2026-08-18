/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let n = nums.length

    nums.sort((a,b)=>b-a)

    let fe = nums[0]-1
    let se = nums[1]-1

    return fe*se
};