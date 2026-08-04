/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let newA = new Set(nums)


    
    for (i=1;;i++){
        if(!newA.has(i)){
            return i
        }
    }
};