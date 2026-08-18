/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    
    let res = []

    for(let i=0;i<nums.length;i+=2){
       let val = nums[i+1]
       let freq = nums[i]

       while(freq--){
        res.push(val)
       }
        
    }

return res
};