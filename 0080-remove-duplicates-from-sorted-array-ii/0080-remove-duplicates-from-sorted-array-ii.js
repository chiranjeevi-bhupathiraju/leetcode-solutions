/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length <= 2) return nums.length;
    
    let k = 1;
    
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            k++;
            nums[k] = nums[i];
        }
    }
    
    return k+1;
};