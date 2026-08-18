/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
    let ct = 0
    let sum = nums.reduce((a,c)=>a+c,0)
    let s = 0
    for(i=0;i<nums.length-1;i++){
        s += nums[i]
        sum -= nums[i]
        if(Math.abs(s-sum) % 2 == 0){
            ct++
        }
    }
    return ct
};