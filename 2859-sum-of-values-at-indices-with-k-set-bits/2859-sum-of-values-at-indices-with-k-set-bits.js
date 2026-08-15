/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    let n = nums.length
    let res = 0

    for(i=0;i<n;i++){
        let br = i.toString(2).split('').reduce((s,e) => s+(+e),0)
        if(br===k){
          res += nums[i]
        }
    }
    return res
};