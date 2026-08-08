/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    let res = 0

    for(i=0;i<nums.length;i++){
         let num1 = nums[i]
        for(j=i+1;j<nums.length;j++){
            let num2 = nums[j]
             if(num1+num2 < target){
                res++
             }
        }
    }

    return res
};