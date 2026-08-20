/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {

    let f = {}

    for(let e of nums){
        f[e] = (f[e]??0)+1
    }

    let s = 0

    for(let ch in f){
        if(f[ch] == 1 ){
           s += (+ch)
        }
    }

    return s
};