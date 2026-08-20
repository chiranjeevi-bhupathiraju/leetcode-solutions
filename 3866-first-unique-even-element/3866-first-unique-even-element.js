/**
 * @param {number[]} nums
 * @return {number}
 */
var firstUniqueEven = function(nums) {
    let f = {}

    for(let e of nums){
        f[e] = (f[e]??0)+1
    }

    for(let ch of nums){
        if(f[ch] == 1 && ch%2 == 0){
            return +ch
        }
    }

    return -1
};