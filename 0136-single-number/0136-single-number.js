/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let f = {}
    const n = nums.length

    for(let e of nums){
        f[e] =( f[e] ?? 0)+1
    }

    for(let e in f){
        if(f[e] === 1){
            return +e
        }
    }

    return -1
};