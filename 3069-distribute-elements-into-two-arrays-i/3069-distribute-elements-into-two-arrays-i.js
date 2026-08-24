/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function(nums) {
    let a1 = []
    let a2 = []

    a1.push(nums[0])
    a2.push(nums[1])

    for(let i=2; i<nums.length; i++){
         if(a1.at(-1)>a2.at(-1)){
            a1.push(nums[i])
         }else{
            a2.push(nums[i])
         }
    }

    return [...a1,...a2]
};