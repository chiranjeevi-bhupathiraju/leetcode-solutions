/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    nums.sort((a,b)=>a-b)

    let minAvg = Infinity
    
    let i = 1
    while(i <= nums.length/2){
        let sum = (nums.shift() + nums.pop())/2
        minAvg = Math.min(minAvg,sum)

    }
     return minAvg
};