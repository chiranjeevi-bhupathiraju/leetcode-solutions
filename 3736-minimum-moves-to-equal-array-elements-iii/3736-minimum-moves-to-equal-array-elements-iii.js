/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    nums.sort((a,b)=>a-b)

    let le = nums[nums.length-1]
    let ct = 0

    for(i=0; i<nums.length-1; i++){
         ct += le - nums[i]
    }

    return ct
};