/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let f = {}

    for(let e of arr){
        f[e] = (f[e]??0)+1
    }

   let f2 = {}
    for(let ch in f){
       f2[f[ch]] = (f2[f[ch]]||0)+1
    }

    for(let ch in f2){
        if(f2[ch] > 1){
            return false
        }
    }



    return true
};