/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let freq = {}
    let maxF = 0

    for (i=0;i<nums.length;i++){
        freq[nums[i]] = (freq[nums[i]] ?? 0)+1
        maxF = Math.max(maxF,freq[nums[i]])
    }

    let s= 0
    for(let e in freq){
        if(freq[e] == maxF){
            s += freq[e]
        }
    }

    return s
};