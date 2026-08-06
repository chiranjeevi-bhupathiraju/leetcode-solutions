/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {

    let result = []

    for(let ele of nums){
        if(ele > 9){
            result.push(...String(ele).split('').map(n=>Number(n)))
        }else{
         result.push(ele)
        }
    }

    return result
    
};