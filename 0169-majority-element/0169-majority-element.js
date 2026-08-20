/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let f = {}
    let half = Math.trunc(nums.length/2)

    for(let e of nums){
        f[e] = (f[e]??0)+1
    }
 
    let r = 0
    for(let e in f){
       if(f[e] > half){
            r = +e
       }
    }

   return r
};